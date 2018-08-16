import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {fetchOneTrip, editTripSuccess} from '../actions/trips';
import {API_BASE_URL} from '../config';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './tripForm.css';


export class TripEdit extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneTrip(this.props.match.params.tripId));
  }
  onSubmit(values) {
    return fetch(`${API_BASE_URL}/trip/${this.props.match.params.tripId}`, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.token}`
      }
    })
      .then(res => {
        console.log(res);
        if (!res.ok) {
          if (
            res.headers.has('content-type') && 
              res.headers
                .get('content-type')
                .startsWith('application/json')
          ) {
            return res.json()
              .then(err => Promise.reject(err));
          }
          return Promise.reject({
            code: res.status,
            message: res.statusText
          });
        }
        return;
      })
      .then(() => console.log('Editted with values:', values))
      .then(()=> this.props.dispatch(editTripSuccess(values)))
      .catch(err => Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      ));
  }

  render() {

    const {handleSubmit, pristine, submitting} = this.props;

    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Trip editted successfully
        </div>
      );
    }
    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">
          {this.props.error}
        </div>
      );
    }
    
    return (
      <form 
        className="tripForm"
        onSubmit={handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {successMessage}
        {errorMessage}
        <div className="row">
          <div className="col-6 left">
            <label className="col-2" htmlFor="destination">Destination</label>
            <Field
              className="destination col-8"
              type="text"
              component="input"
              id="destination"
              name="destination"
              placeholder="Begin at a city..."
            />
            <label className="col-2" htmlFor="tripName">Trip Name </label>
            <Field 
              className="tripName col-8"
              type="text" 
              component="input"
              id="tripName" 
              name="name" 
              placeholder="Your Trip Name" 
            />
            <label className="col-2" htmlFor="startDate">Start Date </label>
            <Field 
              name="startDate col-8"
              component="input"
              type="date"
              id="startDate"
              className="startDate"
            />
          </div>
          <div className="col-6 right">
            <label className="col-8" htmlFor="description">Trip Description</label>
            <Field 
              className="description col-8"
              type="text" 
              component="textarea"
              id="description" 
              name="description"
            />
            <label htmlFor="isTraveler">I'm a traveler on this trip</label>
            <Field 
              name="isTraveler"
              id="isTraveler"
              component="input"
              type="checkbox"
            />
          </div>
          <Link to="/trips" className="buttonLink" style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Edit Trip</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.tripReducer.trip) {
    return {
      token: state.auth.authToken,
      initialValues: Object.assign({}, state.tripReducer.trip, {
        startDate: moment(state.tripReducer.trip.startDate).format('YYYY-MM-DD')
      })
    };
  } else {
    return { token: state.auth.authToken, initialValues: state.tripReducer.trip };
  }
};

TripEdit = reduxForm({
  form: 'edit',
  enableReinitialize: true
})(TripEdit);

TripEdit = connect(
  mapStateToProps
)(TripEdit);

export default TripEdit;
