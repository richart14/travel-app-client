import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import tripReducer from './reducers';
import {reducer as formReducer} from 'redux-form';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
  combineReducers({
    tripReducer, 
    form: formReducer,
    auth: authReducer
  }), 
  applyMiddleware(thunk));

  // Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;