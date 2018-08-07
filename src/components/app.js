import React, { Component } from 'react';
import './app.css';
import Sidebar from './sidebar';
import TripList from './tripList';
import TripForm from './tripForm';
import TripEdit from './tripEdit';
import TripDelete from './tripDelete';
import SingleTrip from './single-trip';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

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
            <Switch>
              <Redirect exact from="/" to="/trips" />
              <Route exact from="/trips/edit/:tripId" component={TripEdit} />
              <Route exact path="/trips/create" component={TripForm} />
              <Route exact path="/trips" component={TripList} />
              <Route exact path="/trips/:tripId" component={SingleTrip} />
              <Route path="/trips/delete/:tripId" component={TripDelete} />
            </Switch>
          </main>   
        </div>
      </Router>
    );
  }
}
