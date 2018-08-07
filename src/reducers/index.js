import { FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR, FETCH_TRIP_SUCCESS} from '../actions';

const initialState = {
  trips: [],
  trip: undefined,
  days: []
};

export default function tripReducer (state=initialState, action) {
  console.log(action.type);
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
  default:
    return state;
  }
}