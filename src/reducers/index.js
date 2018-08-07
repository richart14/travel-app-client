import { FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR, FETCH_TRIP_SUCCESS, REMOVE_TRIP_SUCCESS, REMOVE_TRIP_ERROR} from '../actions';

const initialState = {
  trips: [],
  trip: undefined
};

export default function tripReducer (state=initialState, action) {
  console.log(action.type);
  console.log(state);
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
  default:
    return state;
  }
  
}