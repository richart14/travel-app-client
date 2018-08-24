import React from 'react';
import {connect} from 'react-redux';
import {fetchOneTrip} from '../actions/trips';
import {createDay, deleteDay} from '../actions/days';
import moment from 'moment';
import {deletePlan} from '../actions/plans';
import {withRouter} from 'react-router-dom';
import SinglePlan from './plans';
import './single-trip.css';

class SingleTrip extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchOneTrip(this.props.tripId));
  }

  handleClick() {
    this.props.dispatch(createDay(this.props.tripId));
  }

  handleDelete(dayId) {
    console.log('deleting ', dayId);
    this.props.dispatch(deleteDay(dayId));
  }

  handlePlanDelete(planId) {
    console.log('deleting plan', planId);
    this.props.dispatch(deletePlan(planId));
  }

  handleEdit(dayId) {
    console.log('editing', dayId);
    this.setState({
      edit: !this.state.edit
    });
  }

  handleAddPlan(dayId, type) {
    console.log('adding plan of ', type, 'with dayId: ', dayId, this.props.tripId);
    window.location = `/trips/${this.props.tripId}/${dayId}/create/${type}`;
  }

  render() {


    if (!this.props.trip) {
      return (<div>Trips loading...</div>);
    }

    // how to properly use refs Mario
    let editDiv;
    if (this.state.edit) {
      editDiv = 
        <form>
          <input type='text' />
          <button>Submit Edit</button>
        </form>;
    }
    
    let number;
    const dayList = this.props.trip.days.map((day, index) => {
      number = index;
      return (
        <li key={day.id} className='dayList'>
          {`Day ${index+1}: ${moment(this.props.trip.startDate).subtract(moment().utcOffset(), 'm').add(index, 'd').format('ddd, MMMM D YYYY')}`}
          <br />
          {day.content}
          <br />
          {/* <button onClick={() => this.handleEdit(day.id)}>Edit</button> */}
          {editDiv}
          <button className="tripFormButton" onClick={() => this.handleDelete(day.id)}>Delete</button > 
          <select className="tripFormButton" onChange={(e) => this.handleAddPlan(day.id, e.target.value)}>
            <option>Add Plan</option>
            <option value='flight'>Flight</option>
            <option value='rental'>Rental</option>
            <option value='cruise'>Cruise</option>
            <option value='housing'>Housing</option>
            <option value='dining'>Dining</option>
            <option value='activity'>Activity</option>
            <option value='meeting'>Meeting</option>
            <option value='map'>Map</option>
            <option value='direction'>Direction</option>
            <option value='other'>Other</option>
          </select>
          <SinglePlan planList={day.plans} tripId={this.props.tripId} dayId={day.id}/>
        </li>
      );
    });
    const startDate = moment(this.props.trip.startDate).subtract(moment().utcOffset(), 'm').format('ddd, MMMM D YYYY');
    const endDate = moment(this.props.trip.startDate).subtract(moment().utcOffset(), 'm').add(number, 'd').format('ddd, MMMM D YYYY');
    const dateString = `From ${startDate} till ${endDate}`;

    return (
      <div className="singleTrip">
        <div className="singleTrip-header">
          <h2>{this.props.trip.name}</h2>
          <p>{dateString}</p>
          <button className="tripFormButton" onClick={() => this.handleClick()}>Add Day</button>
        </div>
        <ul>
          {dayList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, state, {
    loggedIn: state.auth.currentUser,
    tripId: props.match.params.tripId,
    trip: state.tripReducer.trip
  });
};

export default withRouter(connect(mapStateToProps)(SingleTrip));
