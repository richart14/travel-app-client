import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {Link, Redirect} from 'react-router-dom';
import {API_BASE_URL} from '../config';
import {connect} from 'react-redux';


export class PlanForm extends React.Component {
  onSubmit(values) {
    const newBody = Object.assign({}, values, {
      type: this.props.match.params.type,
      dayId: this.props.match.params.dayId
    });

    return fetch(`${API_BASE_URL}/plan` , {
      method: 'POST',
      body: JSON.stringify(newBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.props.token}`
      }
    })
      .then(() => {
        window.location = `/trips/${this.props.match.params.tripId}`;
      })
      .catch(err => Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      ));
  }
  render() {

    if (!this.props.token) {
      return (<Redirect to="/" />);
    }

    let tripId = this.props.match.params.tripId;
    let dayId = this.props.match.params.dayId;
    let type = this.props.match.params.type;
    const {handleSubmit} = this.props;
    
    switch(type) {
    case 'flight':
      return (
        <form
          onSubmit={handleSubmit((values) =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <div className="col s12">
                <h3>How are you flying?</h3>
              </div>
              <div className="col-25">
                <label htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col-25">
                <label htmlFor="airlineDesc">Airline</label>
              </div>
              <div className="col-75">
                <Field
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "airlineDesc"
                  name = "description"
                />
              </div>
              <div className="col-25">
                <label htmlFor="departueDate">Depature Date/Time</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "departureDate"
                  name = "checkIn"
                />
              </div>
              <div className="col-25">
                <label htmlFor="airport">Airport</label>
              </div>
              <div className="col-75">
                <Field
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "airport"
                  name = "locationName"
                />
              </div>
              <div className="col-25">
                <label htmlFor="airportAddress">Airport Address</label>
              </div>
              <div className="col-75">
                <Field
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "airportAddress"
                  name = "location"
                />
              </div>
              <div className="col-25">
                <label htmlFor="landingDate">Landing Date/Time</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "landingDate"
                  name = "checkOut"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'rental':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Provider</h3>
              <div className="col-25">
                <label htmlFor="providerName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="input"
                  type="text"
                  id="providerName"
                  name="description"
                />
              </div>
              <div className="col-25">
                <label htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Pick Up</h3>
            </div>
            <div className="col s12">
              <div className="col-25">
                <label htmlFor="pickUpName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "pickUpName"
                  name = "locationName"
                />
              </div>
              <div className="col-25">
                <label htmlFor="pickUpLocation">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "pickUpLocation"
                  name = "location"
                />
              </div>
              <div className="col-25">
                <label htmlFor="pickUpDate">Pickup Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "pickUpDate"
                  name = "checkIn"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Drop Off</h3>
            </div>
            <div className="col s12">
              <div className="col-25">
                <label htmlFor="dropOffDate">Drop-off Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "dropOffDate"
                  name = "checkOut"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'cruise':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Ship Information</h3>
              <div className="col-25">
                <label  htmlFor="cruiseLine">Cruise Line</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="input"
                  type="text"
                  id="cruiseLine"
                  name="description"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Starting Port</h3>
              <div className="col-25">
                <label  htmlFor="startPortName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "startPortName"
                  name = "locationName"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="startPort">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "startPort"
                  name = "location"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="startDate">Start Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Ending Port</h3>
              <div className="col-25">
                <label  htmlFor="endDate">End Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "endPort"
                  name = "checkOut"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'housing':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Confirmation</h3>
              <div className="col-25">
                <label  htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Where are you staying</h3>
              <div className="col-25">
                <label  htmlFor="locationName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="location">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
            </div>
          </div>
          <div className="col s12">
            <h3>How long are you staying</h3>
            <div className="col-25">
              <label  htmlFor="checkIn"> Check In</label>
            </div>
            <div className="col-75">
              <Field
                className="form-input"
                component="input"
                type="datetime-local"
                id="checkIn"
                name="checkIn"
              />
            </div>
            <div className="col-25">
              <label  htmlFor="checkOut">Check Out</label>
            </div>
            <div className="col-75">
              <Field
                className="form-input"
                component="input"
                type="datetime-local"
                id="checkOut"
                name="checkOut"
              />
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'dining':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Where are you dining?</h3>
              <div className="col-25">
                <label  htmlFor="locationName">Restaurant Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="location">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>When are you dining?</h3>
              <div className="col-25">
                <label  htmlFor="checkIn">Date and Time</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="input"
                  type="datetime-local"
                  id="checkIn"
                  name="checkIn"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Restaurant Details</h3>
              <div className="col-25">
                <label  htmlFor="cuisine">Cuisine</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="input"
                  type="text"
                  id="cuisine"
                  name="description"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'activity':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>What are you doing?</h3>
              <div className="col-25">
                <label  htmlFor="activitydesc">Type of Activity</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="input"
                  type="text"
                  id="activitydesc"
                  name="description"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>When is the activity?</h3>
              <div className="col-25">
                <label  htmlFor="startDate">Start Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="endDate">End Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "endDate"
                  name = "checkOut"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Where is the activity?</h3>
              <div className="col-25">
                <label  htmlFor="locationName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="location">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'meeting':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Meeting Details</h3>
              <div className="col-25">
                <label  htmlFor="meetDesc">Meeting Description</label>
              </div>
              <div className="col-75">
                <Field
                  className="form-input"
                  component="input"
                  type="text"
                  id="meetDesc"
                  name="description"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>When is the meeting?</h3>
              <div className="col-25">
                <label  htmlFor="startDate">Start Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="endDate">End Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "eDate"
                  name = "checkOut"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Where is the meeting?</h3>
              <div className="col-25">
                <label  htmlFor="locationName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="location">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'map':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Where are you going?</h3>
              <div className="col-25">
                <label  htmlFor="locationName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="location">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>When are you going?</h3>
              <div className="col-25">
                <label  htmlFor="startDate">Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'direction':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Where are you going?</h3>
              <div className="col-25">
                <label  htmlFor="start">Starting Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="textarea"
                  type="text"
                  id="start"
                  name="location"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="end">Ending Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="textarea"
                  type="end"
                  id="end"
                  name="endAddress"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>When are you going?</h3>
              <div className="col-25">
                <label  htmlFor="startDate">Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
        </form>
      );
    case 'other':
      return (
        <form
          onSubmit={handleSubmit(values =>
            this.onSubmit(values)
          )}>
          <div className="row">
            <div className="col s12">
              <h2>Add {type}</h2>
            </div>
            <div className="col s12">
              <h3>Details</h3>
              <div className="col-25">
                <label  htmlFor="desc">Description</label>
              </div>
              <div className="col-75">
                <Field
                  className="form-input"
                  component="input"
                  type="text"
                  id="desc"
                  name="description"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="confirmation">Confirmation #</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Depature</h3>
              <div className="col-25">
                <label  htmlFor="locationName">Name</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="location">Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input"
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="startDate">Start Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Arrival</h3>
              <div className="col-25">
                <label  htmlFor="endAddress">End Address</label>
              </div>
              <div className="col-75">
                <Field 
                  className="form-input" 
                  component="textarea"
                  type="text"
                  id="endAddress"
                  name="endAddress"
                />
              </div>
              <div className="col-25">
                <label  htmlFor="endDate">End Date</label>
              </div>
              <div className="col-75">
                <Field 
                  className = "form-input"
                  component = "input"
                  type = "datetime-local"
                  id = "endDate"
                  name = "checkOut"
                />
              </div>
            </div>
            <div className="col s12">
              <h3>Notes</h3>
              <Field
                className = "notes form-input"
                component = "textarea"
                type = "text"
                id = "notes"
                name = "notes"
              />
            </div>
          </div>
          <Link className="buttonLink tripFormButton"to={`/trips/${tripId}`}>Cancel</Link>     
          <button className="tripFormButton" type="submit">Submit</button>
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

const mapStateToProps = (state) => {
  return {
    token: state.auth.authToken,
    loggedIn: state.auth.currentUser
  };
};

let PlanFormRedux = reduxForm({
  form: 'plan',
  enableReinitialize: true
})(PlanForm);

PlanFormRedux = connect(
  mapStateToProps
)(PlanFormRedux);

export default PlanFormRedux;