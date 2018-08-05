import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import tripReducer from './reducers';
import {reducer as formReducer} from 'redux-form';

export default createStore(
  combineReducers({
    tripReducer, 
    form: formReducer
  }), 
  applyMiddleware(thunk));