import React from 'react';
import {connect} from 'react-redux';
import {fetchOneTrip, deleteTrip} from '../actions/trips';
import moment from 'moment';
import {Link} from 'react-router-dom';

export class TripDelete extends React.Component{
  componentDidMount() {
    this.props.dispatch(fetchOneTrip(this.props.match.params.tripId));
  }

  render() {
    if (!this.props.trip) {
      return (<div></div>);
    }
    
    return(
      <div>
        <h2> 
          {`Delete Trip: ${this.props.trip.name}, ${moment(this.props.trip.startDate).format('MMMM YYYY')}`}
        </h2>
        <p>Once deleted, you will not be able to access the trip plan or day plans</p>
        <Link to='/trips'>Cancel</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp; 
        <Link onClick={() => {
          this.props.dispatch(deleteTrip(this.props.match.params.tripId));
        }} to='/trips'>Delete</Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return Object.assign({}, state, {
    tripId: props.match.params.tripId,
    trip: state.tripReducer.trip
  });
};

export default connect(mapStateToProps)(TripDelete);