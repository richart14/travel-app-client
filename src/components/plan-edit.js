import React from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import { connect } from 'react-redux';
import { fetchPlan } from '../actions/plans';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { API_BASE_URL } from '../config';

export class PlanEdit extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPlan(this.props.match.params.planId));
  }
  onSubmit(values) {
    return fetch(`${API_BASE_URL}/plan/${this.props.match.params.planId}`, {
      method: 'PUT',
      body: JSON.stringify({...values, type: this.props.type}),
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
    .then(()=> window.location = `/trips/${this.props.match.params.tripId}`)
      .catch(err => Promise.reject(
        new SubmissionError({
          _error: 'Error submitting message'
        })
      ));
  }
  render() {
    console.log(this.props);
    let tripId = this.props.match.params.tripId;
    let type = this.props.type;
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
                <h3>Provider</h3>
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s4"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>Notes</h3>
                <Field
                  className = "notes col s12"
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
                <label className="col" htmlFor="providerName">Name</label>
                <Field 
                  className="providerName col s4"
                  component="input"
                  type="text"
                  id="providerName"
                  name="description"
                />
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s4"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>Pick Up</h3>
                <label className="col" htmlFor="pickUpName">Name</label>
                <Field 
                  className = "pickUpName col s3"
                  component = "input"
                  type = "text"
                  id = "pickUpName"
                  name = "locationName"
                />
                <label className="col" htmlFor="pickUpLocation">Address</label>
                <Field 
                  className = "pickUpLocation col s3"
                  component = "input"
                  type = "text"
                  id = "pickUpLocation"
                  name = "location"
                />
                <label className="col" htmlFor="pickUpDate">Pickup Date</label>
                <Field 
                  className = "pickUpDate col s2"
                  component = "input"
                  type = "datetime-local"
                  id = "pickUpDate"
                  name = "checkIn"
                />
              </div>
              <div className="col s4">
                <h3>Drop Off</h3>
                <label className="col" htmlFor="dropOffDate">Drop-off Date</label>
                <Field 
                  className = "dropOffDate col s6"
                  component = "input"
                  type = "datetime-local"
                  id = "dropOffDate"
                  name = "checkOut"
                />
              </div>
              <div className="col s6">
                <h3>Notes</h3>
                <Field
                  className = "notes col s12"
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
                <label className="col" htmlFor="cruiseLine">Cruise Line</label>
                <Field 
                  className="cruiseLine col s4"
                  component="input"
                  type="text"
                  id="cruiseLine"
                  name="description"
                />
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s4"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>Starting Port</h3>
                <label className="col" htmlFor="startPortName">Name</label>
                <Field 
                  className = "startPortName col s3"
                  component = "input"
                  type = "text"
                  id = "startPortName"
                  name = "locationName"
                />
                <label className="col" htmlFor="startPort">Address</label>
                <Field 
                  className = "startPort col s3"
                  component = "input"
                  type = "text"
                  id = "startPort"
                  name = "location"
                />
                <label className="col" htmlFor="startDate">Start Date</label>
                <Field 
                  className = "startDate col s2"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
              <div className="col s6">
                <h3>Ending Port</h3>
                <label className="col" htmlFor="endDate">End Date</label>
                <Field 
                  className = "endDate col s4"
                  component = "input"
                  type = "datetime-local"
                  id = "endPort"
                  name = "checkOut"
                />
              </div>
              <div className="col s6">
                <h3>Notes</h3>
                <Field
                  className = "notes col s12"
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
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s5"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>Where are you staying</h3>
                <label className="col" htmlFor="locationName">Name</label>
                <Field 
                  className="locationName col s3" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
                <label className="col" htmlFor="location">Address</label>
                <Field 
                  className="location col s5" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
              <div className="col s12">
                <h3>How long are you staying</h3>
                <label className="col" htmlFor="checkIn"> Check In</label>
                <Field
                  className="checkIn col s4"
                  component="input"
                  type="datetime-local"
                  id="checkIn"
                  name="checkIn"
                />
                <label className="col" htmlFor="checkOut">Check Out</label>
                <Field
                  className="checkOut col s4"
                  component="input"
                  type="datetime-local"
                  id="checkOut"
                  name="checkOut"
                />
              </div>
              <div className="col s12">
                <h3>Notes</h3>
                <Field
                  className = "notes col s8"
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
                <label className="col" htmlFor="locationName">Restaurant Name</label>
                <Field 
                  className="locationName col s3"
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
                <label className="col" htmlFor="location">Address</label>
                <Field 
                  className="location col s5"
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
              <div className="col s12">
                <h3>When are you dining?</h3>
                <label className="col" htmlFor="checkIn">Date and Time</label>
                <Field 
                  className="checkIn col s4"
                  component="input"
                  type="datetime-local"
                  id="checkIn"
                  name="checkIn"
                />
              </div>
              <div className="col s12">
                <h3>Restaurant Details</h3>
                <label className="col" htmlFor="cuisine">Cuisine</label>
                <Field 
                  className="cuisine col s3"
                  component="input"
                  type="text"
                  id="cuisine"
                  name="description"
                />
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s3"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>Notes</h3>
                <Field
                  className = "notes col s8"
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
                <label className="col" htmlFor="activitydesc">Type of Activity</label>
                <Field 
                  className="activitydesc col s3"
                  component="input"
                  type="text"
                  id="activitydesc"
                  name="description"
                />
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s3"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>When is the activity?</h3>
                <label className="col" htmlFor="startDate">Start Date</label>
                <Field 
                  className = "startDate col s3"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
                <label className="col" htmlFor="endDate">End Date</label>
                <Field 
                  className = "endDate col s3"
                  component = "input"
                  type = "datetime-local"
                  id = "endDate"
                  name = "checkOut"
                />
              </div>
              <div className="col s12">
                <h3>Where is the activity?</h3>
                <label className="col" htmlFor="locationName">Name</label>
                <Field 
                  className="locationName col s3" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
                <label className="col" htmlFor="location">Address</label>
                <Field 
                  className="location col s5" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
              <div className="col s12">
                <h3>Notes</h3>
                <Field
                  className = "notes col s8"
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
                <label className="col" htmlFor="meetDesc">Meeting Description</label>
                <Field
                  className="meetDesc col s3"
                  component="input"
                  type="text"
                  id="meetDesc"
                  name="description"
                />
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s4"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>When is the meeting?</h3>
                <label className="col" htmlFor="startDate">Start Date</label>
                <Field 
                  className = "startDate col s3"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
                <label className="col" htmlFor="endDate">End Date</label>
                <Field 
                  className = "endDate col s3"
                  component = "input"
                  type = "datetime-local"
                  id = "eDate"
                  name = "checkOut"
                />
              </div>
              <div className="col s12">
                <h3>Where is the meeting?</h3>
                <label className="col" htmlFor="locationName">Name</label>
                <Field 
                  className="locationName col s3" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
                <label className="col" htmlFor="location">Address</label>
                <Field 
                  className="location col s5" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
              <div className="col s12">
                <h3>Notes</h3>
                <Field
                  className = "notes col s8"
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
                <label className="col" htmlFor="locationName">Name</label>
                <Field 
                  className="locationName col s3" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
                <label className="col" htmlFor="location">Address</label>
                <Field 
                  className="location col s5" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
              </div>
              <div className="col s12">
                <h3>When are you going?</h3>
                <label className="col" htmlFor="startDate">Date</label>
                <Field 
                  className = "startDate col s4"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
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
                <label className="col" htmlFor="start">Starting Address</label>
                <Field 
                  className="start col s3" 
                  component="textarea"
                  type="text"
                  id="start"
                  name="location"
                />
                <label className="col" htmlFor="end">Ending Address</label>
                <Field 
                  className="end col s3" 
                  component="textarea"
                  type="end"
                  id="end"
                  name="endAddress"
                />
              </div>
              <div className="col s12">
                <h3>When are you going?</h3>
                <label className="col" htmlFor="startDate">Date</label>
                <Field 
                  className = "startDate col s4"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
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
                <label className="col" htmlFor="desc">Description</label>
                <Field
                  className="desc col s4"
                  component="input"
                  type="text"
                  id="desc"
                  name="description"
                />
                <label className="col" htmlFor="confirmation">Confirmation #</label>
                <Field 
                  className = "confirmation col s4"
                  component = "input"
                  type = "text"
                  id = "confirmation"
                  name = "confirmation"
                />
              </div>
              <div className="col s12">
                <h3>Depature</h3>
                <label className="col" htmlFor="locationName">Name</label>
                <Field 
                  className="locationName col s2" 
                  component="input"
                  type="text"
                  id="locationName"
                  name="locationName"
                />
                <label className="col" htmlFor="location">Address</label>
                <Field 
                  className="location col s3" 
                  component="textarea"
                  type="text"
                  id="location"
                  name="location"
                />
                <label className="col" htmlFor="startDate">Start Date</label>
                <Field 
                  className = "startDate col s3"
                  component = "input"
                  type = "datetime-local"
                  id = "startDate"
                  name = "checkIn"
                />
              </div>
              <div className="col s12">
                <h3>Arrival</h3>
                <label className="col" htmlFor="endAddress">End Address</label>
                <Field 
                  className="endAddress col s4" 
                  component="textarea"
                  type="text"
                  id="endAddress"
                  name="endAddress"
                />
                <label className="col" htmlFor="endDate">End Date</label>
                <Field 
                  className = "endDate col s3"
                  component = "input"
                  type = "datetime-local"
                  id = "endDate"
                  name = "checkOut"
                />
              </div>
              <div className="col s12">
                <h3>Notes</h3>
                <Field
                  className = "notes col s8"
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
          {type}
        </div>
      );
    }

  }
}

const mapStateToProps = (state) => {
  console.log(state);
  if (state.tripReducer.plan) {
    return {
      token: state.auth.authToken,
      type: state.tripReducer.plan ? state.tripReducer.plan.type : null,
      initialValues: Object.assign({}, state.tripReducer.plan, {
        checkIn: moment(state.tripReducer.plan.checkIn).format('YYYY-MM-DDThh:mm'),
        checkOut: moment(state.tripReducer.plan.checkOut).format('YYYY-MM-DDThh:mm')
      })
    };
  } else {
    return {token: state.auth.authToken};
  }
};

let PlanEditRedux = reduxForm({
  form: 'plan-edit',
  enableReinitialize: true
})(PlanEdit);

PlanEditRedux = connect(
  mapStateToProps
)(PlanEditRedux);

export default PlanEditRedux;