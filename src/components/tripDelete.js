import React from 'react';
import {connect} from 'react-redux';
import {fetchOneTrip, deleteTrip} from '../actions/trips';
import moment from 'moment';
import {Link, Redirect} from 'react-router-dom';
import './tripDelete.css';

export class TripDelete extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchOneTrip(this.props.match.params.tripId));
  }

  render() {
    if (!this.props.loggedIn) {
      return (<Redirect to="/" />);
    }
    
    if (!this.props.trip) {
      return (<div>Loading...</div>);
    }
    
    return(
      <div className="tripDelete">
        <h2> 
          {`Delete Trip: ${this.props.trip.name}, ${moment(this.props.trip.startDate).format('MMMM YYYY')}`}
        </h2>
        <p>Once deleted, you will not be able to access the trip plan or day plans</p>
        <Link className="buttonLink" to='/trips'>Cancel</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp; 
        <Link className="buttonLink" onClick={() => {
          this.props.dispatch(deleteTrip(this.props.match.params.tripId));
        }} to='/trips'>Delete</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return Object.assign({}, state, {
    tripId: props.match.params.tripId,
    trip: state.tripReducer.trip,
    loggedIn: state.auth.currentUser
  });
};

export default connect(mapStateToProps)(TripDelete);