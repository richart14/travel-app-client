import React from 'react';
import {reduxForm, Field, SubmissionError, reset} from 'redux-form';
import {fetchAllTrip} from '../actions';
import {API_BASE_URL} from '../config';

import './tripForm.css';


export class tripForm extends React.Component {
  
  onSubmit(values) {
    return fetch(`${API_BASE_URL}/trip`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {'Content-Type': 'application/json'}
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
        onSubmit={handleSubmit(values =>
          this.onSubmit(values)
        )}>
        {successMessage}
        {errorMessage}
        <label htmlFor="tripName">Trip Name</label>
        <Field 
          className="tripName"
          type="text" 
          component="input"
          id="tripName" 
          name="name" 
          placeholder="Name for now unitl I figure out how to do this" 
        />
        <label htmlFor="startDate">Start Date</label>
        <Field 
          name="startDate"
          component="input"
          type="date"
          id="startDate"
          className="startDate"
        />
        <button type="submit" disabled={pristine || submitting}>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'trip'
})(tripForm);