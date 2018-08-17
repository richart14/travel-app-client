import React from 'react';
import moment from 'moment';
import './plans.css';

export function SinglePlan(props) {
  const planList = props.planList.map(plan => {
    switch (plan.type) {
    case 'flight':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = '/trips'}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {plan.description}
                <br />
                {`Confirmation #: ${plan.confirmation}`}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.locationName}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
                <br />
                {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'rental':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {plan.locationName}
                <br />
                {plan.description}
                <br />
                {`Confirmation #: ${plan.confirmation}`}
              </div>
              <div className="col s12">
                {`Pick Up ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`Drop Off ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
                <br />
                {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'days')} Day${moment(plan.checkOut).diff(moment(plan.checkIn), 'days') === 1 ? '' : 's'})`}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'cruise':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {plan.description}
                <br />
                {`Confirmation #: ${plan.confirmation}`}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.locationName}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
                <br />
                {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'housing':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {`Arrive ${plan.locationName}`}
                <br />
                {`Confirmation #: ${plan.confirmation}`}
              </div>
              <div className="col s12">
                {`Check In ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`Check Out ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
                <br />
                {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'days')} Night${moment(plan.checkOut).diff(moment(plan.checkIn), 'days') === 1 ? '' : 's'})`}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'dining':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {plan.description}
                <br />
                {`Confirmation #: ${plan.confirmation}`}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.locationName}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'activity':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {plan.description}
                <br />
                {`Confirmation #: ${plan.confirmation ? plan.confirmation : ''}`}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.locationName}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'meeting':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {plan.description}
                <br />
                {`Confirmation #: ${plan.confirmation}`}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.locationName}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
                <br />
                {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'map':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.locationName}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'direction':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.location}
                <br />
                {plan.endAddress}
              </div>
              <div className="col s12">
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    case 'other':
      return (
        <li key={plan.id}>
          <button onClick={() => window.location = `/trips/${props.tripId}/${plan.id}/edit`}>EDIT</button>
          <button>DELETE</button>
          <div className='plans row'>
            <div className="col s12">
              <div className="planType col s6">
                {plan.type}
              </div>
              <div className="col s6">
                {moment(plan.checkIn).format('M/D/YY')}
                <br />
                {plan.description}
                <br />
                {`Confirmation #: ${plan.confirmation}`}
              </div>
              <div className="col s12">
                {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
                <br />
                {plan.locationName}
                <br />
                {plan.location}
              </div>
              <div className="col s12">
                {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
                <br />
                {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
              </div>
              <div>
                {`Notes: ${plan.notes || ''}`}
              </div>
            </div>
          </div>
        </li>
      );
    default:
      return (
        <li key={plan.id}>
          <div>
            {plan.type}
          </div>
        </li>
      );
    }
  });
  return (
    <div>
      <ul>
        {planList}
      </ul>
    </div>
  );
}