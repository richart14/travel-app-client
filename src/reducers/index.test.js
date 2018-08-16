/* global expect*/

import tripReducer from '../reducers';
import { createDaySuccess, deleteDaySuccess } from '../actions/days';
import { fetchPlan, fetchPlanSuccess } from '../actions/plans';
import { fetchOneTripSuccess, fetchAllTrip, fetchAllTripSuccess, removeTripSuccess, editTripSuccess } from '../actions/trips';

describe('tripReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const initialState = {
      trips: [],
      trip: undefined,
      plan: undefined
    };
    const state = tripReducer(undefined, {type: '@@UNKNOWN'});
    expect(state).toEqual(initialState);
  });

  it('Should handle fetchTrip action', () => {
    const testTrip = {foo:'bar'};
    const oldState = {
      trip: undefined
    };
    const newState = {
      trip: testTrip
    };

    const state = tripReducer(oldState, fetchOneTripSuccess(testTrip));
    expect(state.trip).toEqual(newState.trip);
  });

  it('Should handle fetchAllTrips action', () => {
    const testTrips = [{foo:'bar'}, {foo:'qux'}, {foo:'zub'}];
    const oldState = {
      trips: []
    };
    const newState = {
      trips: testTrips
    };

    const state = tripReducer(oldState, fetchAllTripSuccess(testTrips));
    expect(state.trips).toEqual(newState.trips);
  });

  it('Should handle removeTrip action', () => {
    const testTripId = 2;
    const oldState = {
      trips: [{id:1},{id:2},{id:3},{id:4}]
    };
    const newState = {
      trips: [{id:1},{id:3},{id:4}]
    };

    const state = tripReducer(oldState, removeTripSuccess(testTripId));
    expect(state.trips).toEqual(newState.trips);
  });

  it('Should handle editTrip action', () => {
    const testTrip = {id:3, foo:'bar'};
    const oldState = {
      trips: [
        {id:1, foo:'no'},
        {id:2, foo:'no'},
        {id:3, foo:'no'},
        {id:4, foo:'no'}
      ]
    };
    const newState = {
      trips: [
        {id:1, foo:'no'},
        {id:2, foo:'no'},
        {id:3, foo:'bar'},
        {id:4, foo:'no'}
      ]
    };

    const state = tripReducer(oldState, editTripSuccess(testTrip));
    expect(state.trips).toEqual(newState.trips);
  });

  it('Should handle createDay action for trips', () => {
    const testTrip = {foo:'bar'};
    const oldState = {
      trip: undefined
    };
    const newState = {
      trip:testTrip
    };

    const state = tripReducer(oldState, createDaySuccess(testTrip));
    expect(state.trip).toEqual(newState.trip);
  });
  
  it('Should handle deleteDay action', () => {
    const dayId = 2;
    const oldState = {
      trip: {days :[{id:1},{id:2},{id:3},{id:4}]}
    };
    const newState = {
      trip: {days:[{id:1},{id:3},{id:4}]}
    };

    const state = tripReducer(oldState, deleteDaySuccess(dayId));
    expect(state.trip.days).toEqual(newState.trip.days);
  });

  it('Should handle fetchPlan action', () => {
    const testPlan = {foo:'bar'};
    const oldState = {
      plan: undefined
    };
    const newState = {
      plan: testPlan
    };

    const state = tripReducer(oldState, fetchPlanSuccess(testPlan));
    expect(state.plan).toEqual(newState.plan);
  });
});



