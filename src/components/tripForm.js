import React from 'react';
import {Redirect} from 'react-router-dom';
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

    if (!this.props.loggedIn) {
      return (<Redirect to="/" />);
    }

    const {handleSubmit} = this.props;

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
        <div className="formrow">

          <div className="col-25">
            <label className="col" htmlFor="destination">Destination</label>
          </div>
          <div className="col-75">
            <Field
              className="form-input desc"
              type="text"
              component="input"
              id="destination"
              name="destination"
              placeholder="Begin at a city..."
            />
          </div>
          <div className="col-25">
            <label className="col" htmlFor="tripName">Trip Name </label>
          </div>
          <div className="col-75">
            <Field 
              className="form-input trip"
              type="text" 
              component="input"
              id="tripName" 
              name="name" 
              placeholder="Your Trip Name" 
            />
          </div>
          <div className="col-25">
            <label className="col" htmlFor="startDate">Start Date </label>
          </div>
          <div className="col-75">
            <Field 
              name="form-input start"
              component="input"
              type="date"
              id="formStartDate"
              className="startDate col s6"
            />
          </div>

          <div className="col-25">
            <label className="col" htmlFor="description">Trip Description</label>
          </div>
          <div className="col-75">
            <Field 
              className="form-input desc"
              type="text" 
              component="textarea"
              id="description" 
              name="description"
            />
          </div>

          {/* <label htmlFor="isTraveler">I'm a traveler on this trip</label>
          <Field 
            name="isTraveler"
            id="isTraveler"
            component="input"
            type="checkbox"
          /> */}
        </div>
        <button className="tripFormButton wave-effect" type="submit" >Add New Trip</button>
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

let TripFormRedux = reduxForm({
  form: 'trip',
  enableReinitialize: true
})(TripForm);

TripFormRedux = connect(
  mapStateToProps
)(TripFormRedux);

export default TripFormRedux;