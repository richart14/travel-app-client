/* global expect*/

import {
  FETCH_PLAN_SUCCESS,
  fetchPlanSuccess,
  FETCH_PLAN_ERROR,
  fetchPlanError
} from './plans';

describe('fetchPlan', () => {
  it('Should return the action', () => {
    const plan = {test:'test'};
    const action = fetchPlanSuccess(plan);
    expect(action.type).toEqual(FETCH_PLAN_SUCCESS);
    expect(action.plan).toEqual(plan);
  });
});

describe('fetchPlanError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = fetchPlanError(error);
    expect(action.type).toEqual(FETCH_PLAN_ERROR);
    expect(action.error).toEqual(error);
  });
});