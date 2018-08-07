import React, { Component } from 'react';
import './app.css';
import Sidebar from './sidebar';
import TripList from './tripList';
import TripForm from './tripForm';
import SingleTrip from './single-trip';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Travel App</h1>
          </header>
          <Sidebar />
          <main>
            <TripForm />
            <Switch>
              <Route exact path="/" component={TripList} />
              <Route exact path="/:tripId" component={SingleTrip} />
            </Switch>
          </main>   
        </div>
      </Router>
    );
  }
}
