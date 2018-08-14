import React from 'react';
import moment from 'moment';
import './plans.css';

export default function SinglePlan(props) {
  const planList = props.planList.map(plan => {
    switch(plan.type) {
    case 'flight':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {plan.description}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.locationName}
              <br />
              {plan.location}
            </div>
            <div>
              {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
              <br />
              {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'rental':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {plan.locationName}
            <br />
            {plan.description}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Pick Up ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.location}
            </div>
            <div>
              {`Drop Off ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
              <br />
              {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'days')} Day${moment(plan.checkOut).diff(moment(plan.checkIn), 'days') === 1 ? '' : 's'})`}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'cruise':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {plan.description}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.locationName}
              <br />
              {plan.location}
            </div>
            <div>
              {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
              <br />
              {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'housing':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {`Arrive ${plan.locationName}`}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Check In ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.location}
            </div>
            <div>
              {`Check Out ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
              <br />
              {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'days')} Night${moment(plan.checkOut).diff(moment(plan.checkIn), 'days') === 1 ? '' : 's'})`}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'dining':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {plan.description}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.locationName}
              <br />
              {plan.location}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'activity':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {plan.description}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.locationName}
              <br />
              {plan.location}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'meeting':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {plan.description}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.locationName}
              <br />
              {plan.location}
            </div>
            <div>
              {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
              <br />
              {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'map':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.locationName}
              <br />
              {plan.location}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'direction':
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.location}
              <br />
              {plan.endAddress}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
            </div>
          </div>
        </li>
      );
    case 'other': 
      return (
        <li key={plan.id}>
          <div className='plans'>
            {plan.type}
            <br />
            {moment(plan.checkIn).format('M/D/YY')}
            <br />
            {plan.description}
            <br />
            {`Confirmation #: ${plan.confirmation}`}
            <div>
              {`Start: ${moment(plan.checkIn).format('H:mm A')}`}
              <br />
              {plan.locationName}
              <br />
              {plan.location}
            </div>
            <div>
              {`End: ${moment(plan.checkOut).format('M/D/YY H:mm A')}`}
              <br />
              {`(${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours')} Hour${moment(plan.checkOut).diff(moment(plan.checkIn), 'hours') === 1 ? '' : 's'})`}
            </div>
            <div>
              {`Notes: ${plan.notes || ''}`}
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