import {API_BASE_URL} from '../config';

export const fetchAllTrip = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return(
    fetch(`${API_BASE_URL}/trip`, {
      method: 'GET',
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
        dispatch(fetchAllTripSuccess(data));
      })
      .catch(err => {
        dispatch(fetchAllTripError(err));
      })
  );
};

export const fetchOneTrip = (tripId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  console.log(authToken);
  return(
    fetch(`${API_BASE_URL}/trip/${tripId}`, {
      method: 'GET',
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
        dispatch(fetchOneTripSuccess(data));
      })
      .catch(err => {
        dispatch(fetchOneTripError(err));
      })
  );
};

export const deleteTrip = (tripId) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return(
    fetch(`${API_BASE_URL}/trip/${tripId}`, {
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
      })
      .then(() => {
        dispatch(removeTripSuccess(tripId));
      })
      .catch(err => {
        dispatch(removeTripError(err));
      })
  );
};

export const FETCH_TRIP_SUCCESS = 'FETCH_TRIP_SUCCESS';
export const fetchOneTripSuccess = (trip) => ({
  type: FETCH_TRIP_SUCCESS,
  trip
});

export const FETCH_TRIP_ERROR = 'FETCH_TRIP_ERROR';
export const fetchOneTripError = error => ({
  type: FETCH_TRIP_ERROR,
  error
});

export const FETCH_TRIPS_REQUEST = 'FETCH_TRIPS_REQUEST';

export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const fetchAllTripSuccess = trips => ({
  type: FETCH_TRIPS_SUCCESS,
  trips
});

export const FETCH_TRIPS_ERROR = 'FETCH_TRIP_ERROR';
export const fetchAllTripError = error => ({
  type: FETCH_TRIPS_ERROR,
  error
});

export const REMOVE_TRIP_SUCCESS = 'REMOVE_TRIP_SUCCESS';
export const removeTripSuccess = (tripId) => ({
  type: REMOVE_TRIP_SUCCESS,
  tripId
});

export const REMOVE_TRIP_ERROR = 'REMOVE_TRIP_ERROR';
export const removeTripError = (error) => ({
  type: REMOVE_TRIP_ERROR,
  error
});

export const EDIT_TRIP_SUCCESS = 'EDIT_TRIP_SUCCESS';
export const editTripSuccess = (trip) => ({
  type: EDIT_TRIP_SUCCESS,
  trip
});

export const EDIT_TRIP_ERROR = 'EDIT_TRIP_ERROR';
export const editTripError = (error) => ({
  type: EDIT_TRIP_SUCCESS,
  error
});

