import React from 'react';
import {connect} from 'react-redux';
import {fetchOneTrip} from '../actions';
import moment from 'moment';
import {Link} from 'react-router-dom';
import './single-trip.css';

class SingleTrip extends React.Component{
  constructor(props) {
    super(props);
    this.props.dispatch(fetchOneTrip(this.props.tripId));
  }

  render() {
    if (!this.props.trip) {
      return (<div></div>);
    }
    let number;
    const dayList = this.props.trip.days.map((day, index) => {
      number = index;
      return (
        <li key={day.id} className='dayList'>
          {`Day ${index+1}: ${moment(this.props.trip.startDate).add(index + 1, 'd').format('ddd, MMMM D YYYY')}`}
          <br />
          {day.content}
          <br />
          <Link to="/trips">Edit</Link>
          <br />
          <Link to="/trips">Delete</Link>
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
          <button>Add Itinerary</button>
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

export default connect(mapStateToProps)(SingleTrip);