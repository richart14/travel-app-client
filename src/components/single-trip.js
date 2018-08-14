import React from 'react';
import {connect} from 'react-redux';
import {fetchOneTrip} from '../actions/trips';
import {createDay} from '../actions/days';
import moment from 'moment';
import {Link, withRouter} from 'react-router-dom';
import Plan from './plans';
import './single-trip.css';

class SingleTrip extends React.Component{
  
  componentDidMount() {
    this.props.dispatch(fetchOneTrip(this.props.tripId));
  }

  handleClick() {
    this.props.dispatch(createDay(this.props.tripId));
    // add page workaround
    window.location.reload();
  }
  render() {
    if (!this.props.trip) {
      return (<div>Trips loading...</div>);
    }
    
    let number;
    const dayList = this.props.trip.days.map((day, index) => {
      number = index;
      return (
        <li key={day.id} className='dayList'>
          {`Day ${index+1}: ${moment(this.props.trip.startDate).add(index, 'd').format('ddd, MMMM D YYYY')}`}
          <br />
          {day.content}
          <br />
          <button>Edit</button>
          {' | '}
          <Link to='/'>Delete</Link >
          {' | '}
          <select onChange={value => console.log(this)}>
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
          <Plan planList={day.plans} />
        </li>
      );
    });
    const startDate = moment(this.props.trip.startDate).format('ddd, MMMM D YYYY');
    const endDate = moment(this.props.trip.startDate).add(number + 1, 'd').format('ddd, MMMM D YYYY');
    const dateString = `From ${startDate} till ${endDate}`;

    return (
      <div>
        <ul>
          <h2>{this.props.trip.name}</h2>
          <p>{dateString}</p>
          <button onClick={() => this.handleClick()}>Add Day</button>
          {dayList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, state, {
    tripId: props.match.params.tripId,
    trip: state.tripReducer.trip
  });
};

export default withRouter(connect(mapStateToProps)(SingleTrip));
