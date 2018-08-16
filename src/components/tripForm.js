import React from 'react';
import {reduxForm, Field, SubmissionError, reset} from 'redux-form';
import {fetchAllTrip} from '../actions/trips';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../config';

import './tripForm.css';


export class TripForm extends React.Component {
  
  onSubmit(values) {
    return fetch(`${API_BASE_URL}/trip`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.token}`
      }
    })
      .then(res => {
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
      .then(() => console.log('Submitted with values:', values))
      .then(() => this.props.dispatch(reset('trip')))
      .then(()=> this.props.dispatch(fetchAllTrip()))
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
          Trip added successfully
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
          <button className="tripFormButton" type="submit" disabled={pristine || submitting}>Add New Trip</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  // let {currentUser} = state.auth;
  // console.log(currentUser);
  // figure out the best way to display the current user
  return {
    loggedIn: state.auth.currentUser !== null,
    token: state.auth.authToken,
  };
};

TripForm = reduxForm({
  form: 'trip',
  enableReinitialize: true
})(TripForm);

TripForm = connect(
  mapStateToProps
)(TripForm);

export default TripForm;