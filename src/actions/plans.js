import {API_BASE_URL} from '../config';


export const fetchPlan = (planId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return(
    fetch(`${API_BASE_URL}/plan/${planId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject('Unable to reach server');
        }
        return res.json();
      })
      .then(data => {
        dispatch(fetchPlanSuccess(data));
      })
      .catch(err => {
        dispatch(fetchPlanError(err));
      })
  );
};

export const FETCH_PLAN_SUCCESS = 'FETCH_PLAN_SUCCESS';
export const fetchPlanSuccess = plan => ({
  type: FETCH_PLAN_SUCCESS,
  plan
});
export const FETCH_PLAN_ERROR = 'FETCH_PLAN_ERROR';
export const fetchPlanError = error => ({
  type: FETCH_PLAN_ERROR,
  error
});