import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import Input from './input';

export class PlanForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }
  render() {
    let tripId = this.props.match.params.tripId;
    let dayId = this.props.match.params.dayId;
    let type = this.props.match.params.type;
    const {handleSubmit, pristine, submitting} = this.props;

    switch(type) {
    case 'flight':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'rental':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Provider</h3>
          <label htmlFor="providerName">Name</label>
          <Field 
            className="providerName"
            component="input"
            type="text"
            id="providerName"
            name="description"
          />
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>Pick Up</h3>
          <label htmlFor="pickUpName">Name</label>
          <Field 
            className = "pickUpName"
            component = "input"
            type = "text"
            id = "pickUpName"
            name = "locationName"
          />
          <label htmlFor="pickUpLocation">Address</label>
          <Field 
            className = "pickUpLocation"
            component = "input"
            type = "text"
            id = "pickUpLocation"
            name = "location"
          />
          <label htmlFor="pickUpDate">Pickup Date</label>
          <Field 
            className = "pickUpDate"
            component = "input"
            type = "datetime-local"
            id = "pickUpDate"
            name = "checkIn"
          />
          <h3>Drop Off</h3>
          <label htmlFor="dropOffDate">Drop-off Date</label>
          <Field 
            className = "dropOffDate"
            component = "input"
            type = "datetime-local"
            id = "dropOffDate"
            name = "checkOut"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`}style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'cruise':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Ship Information</h3>
          <label htmlFor="cruiseLine">Cruise Line</label>
          <Field 
            className="cruiseLine"
            component="input"
            type="text"
            id="cruiseLine"
            name="description"
          />
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>Starting Port</h3>
          <label htmlFor="startPortName">Name</label>
          <Field 
            className = "startPortName"
            component = "input"
            type = "text"
            id = "startPortName"
            name = "locationName"
          />
          <label htmlFor="startPort">Address</label>
          <Field 
            className = "startPort"
            component = "input"
            type = "text"
            id = "startPort"
            name = "location"
          />
          <label htmlFor="startDate">Start Date</label>
          <Field 
            className = "startDate"
            component = "input"
            type = "datetime-local"
            id = "startDate"
            name = "checkIn"
          />
          <h3>Ending Port</h3>
          <label htmlFor="endDate">End Date</label>
          <Field 
            className = "endDate"
            component = "input"
            type = "datetime-local"
            id = "endPort"
            name = "checkOut"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'housing':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Confirmation</h3>
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>Where are you staying</h3>
          <label htmlFor="locationName">Name</label>
          <Field 
            className="locationName" 
            component="input"
            type="text"
            id="locationName"
            name="locationName"
          />
          <label htmlFor="location">Address</label>
          <Field 
            className="location" 
            component="textarea"
            type="text"
            id="location"
            name="location"
          />
          <h3>How long are you staying</h3>
          <label htmlFor="checkIn"> Check In</label>
          <Field
            className="checkIn"
            component="input"
            type="datetime-local"
            id="checkIn"
            name="checkIn"
          />
          <label htmlFor="checkOut">Check Out</label>
          <Field
            className="checkOut"
            component="input"
            type="datetime-local"
            id="checkOut"
            name="checkOut"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'dining':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Where are you dining?</h3>
          <label htmlFor="locationName">Restaurant Name</label>
          <Field 
            className="locationName"
            component="input"
            type="text"
            id="locationName"
            name="locationName"
          />
          <label htmlFor="location">Address</label>
          <Field 
            className="location"
            component="textarea"
            type="text"
            id="location"
            name="location"
          />
          <h3>When are you dining?</h3>
          <label htmlFor="checkIn">Date and Time</label>
          <Field 
            className="checkIn"
            component="input"
            type="text"
            id="checkIn"
            name="checkIn"
          />
          <h3>Restaurant Details</h3>
          <label htmlFor="cuisine">Cuisine</label>
          <Field 
            className="cuisine"
            component="input"
            type="text"
            id="cuisine"
            name="description"
          />
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'activity':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>What are you doing?</h3>
          <label htmlFor="activitydesc">Type of Activity</label>
          <Field 
            className="activitydesc"
            component="input"
            type="text"
            id="activitydesc"
            name="description"
          />
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>When is the activity?</h3>
          <label htmlFor="startDate">Start Date</label>
          <Field 
            className = "startDate"
            component = "input"
            type = "datetime-local"
            id = "startDate"
            name = "checkIn"
          />
          <label htmlFor="endDate">End Date</label>
          <Field 
            className = "endDate"
            component = "input"
            type = "datetime-local"
            id = "endDate"
            name = "checkOut"
          />
          <h3>Where is the activity?</h3>
          <label htmlFor="locationName">Name</label>
          <Field 
            className="locationName" 
            component="input"
            type="text"
            id="locationName"
            name="locationName"
          />
          <label htmlFor="location">Address</label>
          <Field 
            className="location" 
            component="textarea"
            type="text"
            id="location"
            name="location"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'meeting':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Meeting Details</h3>
          <label htmlFor="meetDesc">Meeting Description</label>
          <Field
            className="meetDesc"
            component="input"
            type="text"
            id="meetDesc"
            name="description"
          />
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>When is the meeting?</h3>
          <label htmlFor="startDate">Start Date</label>
          <Field 
            className = "startDate"
            component = "input"
            type = "datetime-local"
            id = "startDate"
            name = "checkIn"
          />
          <label htmlFor="endDate">End Date</label>
          <Field 
            className = "endDate"
            component = "input"
            type = "datetime-local"
            id = "eDate"
            name = "checkOut"
          />
          <h3>Where is the meeting?</h3>
          <label htmlFor="locationName">Name</label>
          <Field 
            className="locationName" 
            component="input"
            type="text"
            id="locationName"
            name="locationName"
          />
          <label htmlFor="location">Address</label>
          <Field 
            className="location" 
            component="textarea"
            type="text"
            id="location"
            name="location"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'map':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Where are you going?</h3>
          <label htmlFor="locationName">Name</label>
          <Field 
            className="locationName" 
            component="input"
            type="text"
            id="locationName"
            name="locationName"
          />
          <label htmlFor="location">Address</label>
          <Field 
            className="location" 
            component="textarea"
            type="text"
            id="location"
            name="location"
          />
          <h3>When are you going?</h3>
          <label htmlFor="startDate">Date</label>
          <Field 
            className = "startDate"
            component = "input"
            type = "datetime-local"
            id = "startDate"
            name = "checkIn"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'direction':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Where are you going?</h3>
          <label htmlFor="start">Starting Address</label>
          <Field 
            className="start" 
            component="textarea"
            type="text"
            id="start"
            name="location"
          />
          <label htmlFor="end">Ending Address</label>
          <Field 
            className="end" 
            component="textarea"
            type="end"
            id="end"
            name="endAddress"
          />
          <h3>When are you going?</h3>
          <label htmlFor="startDate">Date</label>
          <Field 
            className = "startDate"
            component = "input"
            type = "datetime-local"
            id = "startDate"
            name = "checkIn"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    case 'other':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <h2>Add {type}</h2>
          <h3>Details</h3>
          <label htmlFor="desc">Description</label>
          <Field
            className="desc"
            component="input"
            type="text"
            id="desc"
            name="description"
          />
          <label htmlFor="confirmation">Confirmation #</label>
          <Field 
            className = "confirmation"
            component = "input"
            type = "text"
            id = "confirmation"
            name = "confirmation"
          />
          <h3>Depature</h3>
          <label htmlFor="locationName">Name</label>
          <Field 
            className="locationName" 
            component="input"
            type="text"
            id="locationName"
            name="locationName"
          />
          <label htmlFor="location">Address</label>
          <Field 
            className="location" 
            component="textarea"
            type="text"
            id="location"
            name="location"
          />
          <Field 
            className = "startDate"
            component = "input"
            type = "datetime-local"
            id = "startDate"
            name = "checkIn"
          />
          <h3>Arrival</h3>
          <label htmlFor="endAddress">End Address</label>
          <Field 
            className="endAddress" 
            component="textarea"
            type="text"
            id="endAddress"
            name="endAddress"
          />
          <label htmlFor="endDate">End Date</label>
          <Field 
            className = "endDate"
            component = "input"
            type = "datetime-local"
            id = "endDate"
            name = "checkOut"
          />
          <h3>Notes</h3>
          <Field
            className = "notes"
            component = "textarea"
            type = "text"
            id = "notes"
            name = "notes"
          />
          <br />
          <Link to={`/trips/${tripId}`} style={{ textDecoration: 'none', paddingRight: 10}}>Cancel</Link>     
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </form>
      );
    default:
      return (
        <div>
          placeholder for now, but you probably broke it 
          {tripId}
          <br />
          {dayId}
          <br />
          {type}
        </div>
      );
    }

  }
}

export default reduxForm({
  form: 'plan',
  // enableReinitialize: true
})(PlanForm);

