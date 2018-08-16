import React, { Component } from 'react';
import './app.css';
import {connect} from 'react-redux';
import Sidebar from './sidebar';
import HeaderBar from './header-bar';
import LandingPage from './landing-page';
import SingleTrip from './single-trip';
import TripDelete from './tripDelete';
import TripEdit from './tripEdit';
import TripList from './tripList';
import TripForm from './tripForm';
import PlanForm from './planForm';
import PlanEdit from './plan-edit';
import {LocationSearchInput} from './locationSearchInput';
import RegistrationPage from './registration-page';
import {refreshAuthToken} from '../actions/auth';

import { Route, withRouter} from 'react-router-dom';

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
      10 * 60 * 1000 // 10 minutes
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
        <HeaderBar />
        <main>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/trips" component={TripForm} />
          <Route exact path="/trips" component={TripList} />
          <Route exact path="/trips/:tripId" component={SingleTrip} location={this.props.location}/>
          <Route exact path="/trips/edit/:tripId" component={TripEdit} />
          <Route exact path="/trips/delete/:tripId" component={TripDelete} />
          <Route exact path="/trips/:tripId/:dayId/create/:type" component={PlanForm} />
          <Route exact path="/trips/:tripId/:planId/edit" component={PlanEdit} />
          <Route exact path="/test" component={LocationSearchInput} />
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