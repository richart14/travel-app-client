import { FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR, FETCH_TRIP_SUCCESS, REMOVE_TRIP_SUCCESS, REMOVE_TRIP_ERROR, EDIT_TRIP_SUCCESS, EDIT_TRIP_ERROR} from '../actions/trips';
const initialState = {
  trips: [],
  trip: undefined
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
  default:
    return state;
  }
  
}