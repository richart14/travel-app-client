import React from 'react';
import {connect} from 'react-redux';
import { fetchAllTrip } from '../actions/trips';
import moment from 'moment';
import {Link} from 'react-router-dom';
import './tripList.css';


class TripList extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchAllTrip());
  }
  

  render() {
    const tripList = this.props.trips.map(trip => {
      const dateString = moment(trip.startDate).format('MMMM YYYY');
      return (
        <li key={trip.id} className='tripList'>
          <div className="row">
            <div className="col s12 m6">
              <div className="card whitesmoke">
                <div className="card-content">
                  <div className="card-title">
                    <Link to={`/trips/${trip.id}`}>
                      {trip.name}
                      <br/>
                      {dateString}
                    </Link>
                  </div>
                  <p>
                    {trip.destination}
                    <br/>
                    {`${moment(trip.startDate).format('MMM D')}${(trip.days.length > 0) ? moment(trip.startDate).add(trip.days.length, 'd').format(' - D, YYYY') : moment(trip.startDate).format(', YYYY')}`}
                    <br />
                    {`(${trip.days.length} day${trip.days.length === 1 ? '':'s'})`}
                    <br />
                    {trip.description}
                  </p>
                </div>
                <div className="card-action">
                  <Link className="buttonLink" to={`/trips/edit/${trip.id}`}>Edit</Link> | <Link className="buttonLink" to={`/trips/delete/${trip.id}`}>Delete</Link>
                </div>
                
              </div>
            </div>
          </div>
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