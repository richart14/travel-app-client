import { FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR, FETCH_TRIP_SUCCESS, REMOVE_TRIP_SUCCESS, REMOVE_TRIP_ERROR, EDIT_TRIP_SUCCESS, EDIT_TRIP_ERROR} from '../actions/trips';
import { CREATE_DAY_SUCCESS, DELETE_DAY_ERROR, DELETE_DAY_SUCCESS, CREATE_DAY_ERROR } from '../actions/days';
import {FETCH_PLAN_SUCCESS, FETCH_PLAN_ERROR} from '../actions/plans';
const initialState = {
  trips: [],
  trip: undefined,
  plan: undefined
};

export default function tripReducer (state=initialState, action) {
  switch(action.type) {
  case FETCH_TRIPS_SUCCESS:
    return Object.assign({}, state, {
      trips: action.trips
    });
  case FETCH_TRIPS_ERROR: 
    return Object.assign({}, state, {
      error: action.error
    });
  case FETCH_TRIP_SUCCESS: 
    return Object.assign({}, state, {
      trip: action.trip
    });
  case REMOVE_TRIP_SUCCESS:
    return Object.assign({}, state, {
      trips: state.trips.filter(trip => trip.id !== action.tripId ? true : false)
    });
  case REMOVE_TRIP_ERROR: 
    return Object.assign({}, state, {
      error: action.error
    });
  case EDIT_TRIP_SUCCESS:
    return Object.assign({}, state, {
      trips: state.trips.map(trip =>
        trip.id === action.trip.id ? action.trip : trip
      )
    });
  case EDIT_TRIP_ERROR:
    return Object.assign({}, state, {
      error: action.error
    });
  case CREATE_DAY_SUCCESS: 
    return Object.assign({}, state, {
      trip: action.trip
    });
  case CREATE_DAY_ERROR:
    return Object.assign({}, state, {
      error: action.error
    });
  case DELETE_DAY_SUCCESS:
    return Object.assign({}, state, {
      trip: { days: state.trip.days.filter(day => day.id !== action.dayId ? true : false)}
    });
  case DELETE_DAY_ERROR: 
    return Object.assign({}, state, {
      error: action.error
    });
  case FETCH_PLAN_SUCCESS:
    return Object.assign({}, state, {
      plan: action.plan
    });
  case FETCH_PLAN_ERROR:
    return Object.assign({}, state, {
      error: action.error
    });
  default:
    return state;
  }
  
}