/* global expect*/

import {
  CREATE_DAY_SUCCESS,
  createDaySuccess,
  CREATE_DAY_ERROR,
  createDayError,
  DELETE_DAY_SUCCESS,
  deleteDaySuccess,
  DELETE_DAY_ERROR,
  deleteDayError
} from './days';

describe('createDay', () => {
  it('Should return the action', () => {
    const trip = {test:'test'};
    const action = createDaySuccess(trip);
    expect(action.type).toEqual(CREATE_DAY_SUCCESS);
    expect(action.trip).toEqual(trip);
  });
});

describe('createDayError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = createDayError(error);
    expect(action.type).toEqual(CREATE_DAY_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe('deleteDay', () => {
  it('Should return the action', () => {
    const dayId = 'Id to delete';
    const action = deleteDaySuccess(dayId);
    expect(action.type).toEqual(DELETE_DAY_SUCCESS);
    expect(action.dayId).toEqual(dayId);
  });
});

describe('deleteDayError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = deleteDayError(error);
    expect(action.type).toEqual(DELETE_DAY_ERROR);
    expect(action.error).toEqual(error);
  });
});