import {API_BASE_URL} from '../config';

export const createDay = (tripId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return(
    fetch(`${API_BASE_URL}/day`, {
      method: 'POST',
      body: JSON.stringify({tripId, content:'Add content about this day'}),
      headers: {
        'Content-Type': 'application/json',
        // Provide our auth token as credentials
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
        dispatch(createDaySuccess(data));
      })
      .catch(err => {
        dispatch(createDayError(err));
      })
  );
};

export const deleteDay = (dayId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return(
    fetch(`${API_BASE_URL}/day/${dayId}`, {
      method: 'DELETE',
      headers: {
        // Provide our auth token as credentials
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
        console.log(data);
      })
      .catch(err => {
        dispatch(deleteDayError(err));
      })
  );
};

export const CREATE_DAY_SUCCESS = 'CREATE_DAY_SUCCESS';
export const createDaySuccess = (trip) => ({
  type: CREATE_DAY_SUCCESS,
  trip
});

export const CREATE_DAY_ERROR = 'CREATE_DAY_ERROR';
export const createDayError = (error) => ({
  type: CREATE_DAY_ERROR,
  error
});

export const DELETE_DAY_SUCCESS = 'DELETE_DAY_SUCCESS';
export const deleteDaySuccess = (trip) => ({
  type: DELETE_DAY_SUCCESS,
  trip
});

export const DELETE_DAY_ERROR = 'DELETE_DAY_ERROR';
export const deleteDayError = (error) => ({
  type: DELETE_DAY_ERROR,
  error
});