import React, { Component } from 'react';
import './app.css';
import {connect} from 'react-redux';
import Sidebar from './sidebar';
import TripList from './tripList';
import TripForm from './tripForm';
import TripEdit from './tripEdit';
import TripDelete from './tripDelete';
import SingleTrip from './single-trip';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';

import { Route, Switch, Redirect, withRouter} from 'react-router-dom';

export class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
            <h1 className="App-title">Travel App</h1>
          </header> */}
        <Sidebar items={['First Item', 'Second Item', 'Third Item', 'Fourth Item']}/>
        <main>
          <HeaderBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/trips" component={TripForm} />
          <Switch>
            {/* <Redirect exact from="/" to="/trips" /> */}
            <Route exact from="/trips/edit/:tripId" component={TripEdit} />
            <Route exact path="/trips" component={TripList} />
            <Route exact path="/trips/:tripId" component={SingleTrip} />
            <Route path="/trips/delete/:tripId" component={TripDelete} />
          </Switch>
        </main>   
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));