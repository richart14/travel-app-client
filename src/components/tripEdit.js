import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {fetchOneTrip, editTripSuccess} from '../actions/trips';
import {API_BASE_URL} from '../config';
import moment from 'moment';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import './tripForm.css';


export class TripEdit extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchOneTrip(this.props.match.params.tripId));
  }
  onSubmit(values) {
    values.startDate = moment(values.startDate).local().format('YYYY-MM-DD');
    return fetch(`${API_BASE_URL}/trip/${this.props.match.params.tripId}`, {
      method: 'PUT',
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
      .then(() => console.log('Editted with values:', values))
      .then(()=> this.props.dispatch(editTripSuccess(values)))
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
              name="startDate"
              component="input"
              type="date"
              id="formStartDate"
              className="form-input start"
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
        <Link to="/trips" className="buttonLink" style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
        <button className="tripFormButton" type="submit">Edit Trip</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.tripReducer.trip) {
    return {
      token: state.auth.authToken,
      loggedIn: state.auth.currentUser,
      initialValues: Object.assign({}, state.tripReducer.trip, {
        startDate: moment(state.tripReducer.trip.startDate).local().format('YYYY-MM-DD')
      })
    };
  } else {
    return { token: state.auth.authToken, loggedIn: state.auth.currentUser, initialValues: state.tripReducer.trip };
  }
};

let TripEditRedux = reduxForm({
  form: 'edit',
  enableReinitialize: true
})(TripEdit);

TripEditRedux = connect(
  mapStateToProps
)(TripEditRedux);

export default TripEditRedux;
