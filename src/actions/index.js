import {API_BASE_URL} from '../config';

export const fetchAllTrip = () => dispatch => {
  return(
    fetch(`${API_BASE_URL}/trip`, {
      method: 'GET'
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

export const fetchOneTrip = (tripId) => dispatch => {
  return(
    fetch(`${API_BASE_URL}/trip/${tripId}`, {
      method: 'GET'
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



