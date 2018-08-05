import {CREATE_TRIP, FETCH_TRIP_SUCCESS, FETCH_TRIP_ERROR} from '../actions';

const initialState = {
  trips: []
};

export default function tripReducer (state=initialState, action) {
  switch(action.type) {
  case CREATE_TRIP:  
    return Object.assign({}, state, {
      location: action.location
    });
  case FETCH_TRIP_SUCCESS: 
    return Object.assign({}, state, {
      trips: action.trips
    });
  case FETCH_TRIP_ERROR: 
    return Object.assign({}, state, {
      error: action.error
    });
  default:
    return state;
  }
}