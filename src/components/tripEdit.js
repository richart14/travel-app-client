import React from 'react';
import {reduxForm, Field, SubmissionError, reset} from 'redux-form';
import {fetchOneTrip} from '../actions';
import {API_BASE_URL} from '../config';
import {connect} from 'react-redux';
import './tripForm.css';


export class TripForm extends React.Component {
  constructor(props) {
    super(props);
    // this.props.dispatch(fetchOneTrip(this.props.match.params.tripId));
    console.log(this.props);
    console.log('constructor');
  }

  componentDidMount() {
    this.props.dispatch(fetchOneTrip(this.props.match.params.tripId));
  }
  onSubmit(values) {
    console.log(values);
  }

  render() {
    console.log(this.props.initialValues);
    // this.props.initialValues ? this.props.load(this.props.initialValues) : console.log('nothing to see here');
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
        onSubmit={handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {successMessage}
        {errorMessage}
        <label htmlFor="destination">Destination</label>
        <Field
          className="destination"
          type="text"
          component="input"
          id="destination"
          name="destination"
          placeholder="Begin at a city..."
        />
        <label htmlFor="tripName">Trip Name</label>
        <Field 
          className="tripName"
          type="text" 
          component="input"
          id="tripName" 
          name="name" 
          placeholder="Your Trip Name" 
        />
        <label htmlFor="startDate">Start Date</label>
        <Field 
          name="startDate"
          component="input"
          type="date"
          id="startDate"
          className="startDate"
        />
        <label htmlFor="description">Trip Description</label>
        <Field 
          className="description"
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
        <br />
        <button type="submit" disabled={pristine || submitting}>Add Trip</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    initialValues: state.tripReducer.trip
  };
};

TripForm = connect(
  mapStateToProps
)(TripForm);


export default reduxForm({
  form: 'edit',
  enableReinitialize: true
})(TripForm);