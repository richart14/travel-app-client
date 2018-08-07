import React from 'react';
import {connect} from 'react-redux';
import { fetchAllTrip } from '../actions';
import moment from 'moment';
import {Link} from 'react-router-dom';
import './tripList.css';


class TripList extends React.Component{
  
  componentDidMount() {
    console.log('mounting success');
    this.props.dispatch(fetchAllTrip());
  }

  render() {
    const tripList = this.props.trips.map(trip => {
      const dateString = moment(trip.startDate).format('ddd, MMMM D YYYY');

      return (
        <li key={trip.id} className='tripList'>
          <Link to={`/${trip.id}`}>
            {trip.name}
            <br/>
            {dateString}
          </Link>
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