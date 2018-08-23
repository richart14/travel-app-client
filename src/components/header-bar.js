import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header-bar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    window.location = '/';
  }

  homePage() {
    window.location = '/trips';
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    let homeButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button className="header-button" onClick={() => this.logOut()}>Log out</button>
      );
      homeButton = (
        <button className="header-button" onClick={() => this.homePage()}>Home Page</button>
      );
    }
    return (
      <header className="header-bar">
        <div className="left-header">
          <h1>Itinerary Planner</h1>
        </div>
        <div className="right-header">
          {homeButton}
          {logOutButton}
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(HeaderBar);