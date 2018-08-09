import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

// import Moment from 'moment';
// import momentLocalizer from 'react-widgets-moment';
// import DateTimePicker from 'react-widgets/lib/DateTimePicker';

// Moment.locale('en');

// momentLocalizer();

ReactDOM.render(
  // <DateTimePicker 
  //   defaultValue={new Date()}
  //   time={false}
  // />,
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
