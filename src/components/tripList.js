import React from 'react';
import {connect} from 'react-redux';
import { fetchTrip } from '../actions';
import './tripList.css';


class TripList extends React.Component{
  
  componentDidMount() {
    console.log('mounting success');
    this.props.dispatch(fetchTrip());
  }

  render() {
    const tripList = this.props.trips.map(trip => {
      const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ];
      const dayName = [
        'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday',
        'Sunday'
      ];
      const date = new Date(trip.startDate);
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      const dayOfWeek = date.getDay();
      const dateString = `${dayName[dayOfWeek]}, ${monthNames[month]} ${day},${year}`;

      return (
        <li key={trip.id} className='tripList'>
          {trip.name} starting at {dateString}
        </li>
      );
    });
    return (
      <ul>
        {tripList}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    trips: state.tripReducer.trips,
  };
};

export default connect(mapStateToProps)(TripList);