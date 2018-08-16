/* global expect*/

import {
  FETCH_TRIP_SUCCESS, 
  fetchOneTripSuccess,
  FETCH_TRIP_ERROR,
  fetchOneTripError, 
  FETCH_TRIPS_SUCCESS,
  fetchAllTripSuccess,
  FETCH_TRIPS_ERROR,
  fetchAllTripError,
  REMOVE_TRIP_SUCCESS,
  removeTripSuccess,
  REMOVE_TRIP_ERROR,
  removeTripError,
  EDIT_TRIP_SUCCESS,
  editTripSuccess,
  EDIT_TRIP_ERROR,
  editTripError
} from './trips';

describe('fetchOneTrip', () => {
  it('Should return the action', () => {
    const trip = {test:'test'};
    const action = fetchOneTripSuccess(trip);
    expect(action.type).toEqual(FETCH_TRIP_SUCCESS);
    expect(action.trip).toEqual(trip);
  });
});

describe('fetchOneTripError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = fetchOneTripError(error);
    expect(action.type).toEqual(FETCH_TRIP_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('fetchAllTrip', () => {
  it('Should return the action', () => {
    const trips = [{test:'test'}];
    const action = fetchAllTripSuccess(trips);
    expect(action.type).toEqual(FETCH_TRIPS_SUCCESS);
    expect(action.trips).toEqual(trips);
  });
});

describe('fetchAllTripError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = fetchAllTripError(error);
    expect(action.type).toEqual(FETCH_TRIPS_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('removeTrip', () => {
  it('Should return the action', () => {
    const tripId = 'some_test_id';
    const action = removeTripSuccess(tripId);
    expect(action.type).toEqual(REMOVE_TRIP_SUCCESS);
    expect(action.tripId).toEqual(tripId);
  });
});

describe('removeTripError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = removeTripError(error);
    expect(action.type).toEqual(REMOVE_TRIP_ERROR);
    expect(action.error).toEqual(error);
  });
});


describe('editTrip', () => {
  it('Should return the action', () => {
    const trip = {test:'test'};
    const action = editTripSuccess(trip);
    expect(action.type).toEqual(EDIT_TRIP_SUCCESS);
    expect(action.trip).toEqual(trip);
  });
});

describe('editTripError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = editTripError(error);
    expect(action.type).toEqual(EDIT_TRIP_ERROR);
    expect(action.error).toEqual(error);
  });
});
