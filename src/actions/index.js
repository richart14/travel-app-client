import {API_BASE_URL} from '../config';

export const fetchTrip = () => dispatch => {
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
        dispatch(fetchTripSuccess(data));
      })
      .catch(err => {
        dispatch(fetchTripError(err));
      })

  );
};

export const FETCH_TRIP_REQUEST = 'FETCH_TRIP_REQUEST';

export const FETCH_TRIP_SUCCESS = 'FETCH_TRIP_SUCCESS';
export const fetchTripSuccess = trips => ({
  type: FETCH_TRIP_SUCCESS,
  trips
});

export const FETCH_TRIP_ERROR = 'FETCH_TRIP_ERROR';
export const fetchTripError = error => ({
  type: FETCH_TRIP_ERROR,
  error
});

export const CREATE_TRIP = 'CREATE_TRIP';
export const createTrip = (location, date) => ({
  type: CREATE_TRIP,
  location,
  date
});

