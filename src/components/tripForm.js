import React from 'react';
import {reduxForm, Field} from 'redux-form';
// import { DateTimePicker } from 'react-widgets';
// import Globalize from 'globalize';
// import globalizeLocalizer from 'react-widgets-globalize';

// Globalize.locale('en');

// globalizeLocalizer();
import './tripForm.css';

export class tripForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    
    return (
      <form 
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <label htmlFor="tripName">Trip Name</label>
        <Field 
          className="tripName"
          type="text" 
          component="input"
          id="tripName" 
          name="tripName" 
          placeholder="Trip to ..." 
        />
        <label htmlFor="startDate">Start Date</label>
        <input 
          className="startDate"
          type="date"
          id="startDate" 
          name="startDate" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'trip'
})(tripForm);