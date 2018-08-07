import {CREATE_TRIP, FETCH_TRIP_SUCCESS, FETCH_TRIP_ERROR, FETCH_DAY_SUCCESS} from '../actions';

const initialState = {
  trips: [],
  trip: null,
  // temp for now till I get it working correctly for days
  days: []
};

export default function tripReducer (state=initialState, action) {
  console.log(action.type);
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
  case FETCH_DAY_SUCCESS: 
    return Object.assign({}, state, {
      trip: action.trip
      // days: action.days,
      // name: action.name,
      // startDate: action.startDate
    });
  default:
    return state;
  }
}