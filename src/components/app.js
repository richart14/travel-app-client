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
        {/* <Sidebar items={['thing one', 'thing two', 'thing three', 'thing four']} /> */}
        <main>
          <HeaderBar />
          <Route exact path="/trips" component={TripForm} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/trips/:tripId" component={SingleTrip} />
          <Route exact path="/trips/edit/:tripId" component={TripEdit} />
          <Route exact path="/trips" component={TripList} />
          <Route path="/trips/delete/:tripId" component={TripDelete} />
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