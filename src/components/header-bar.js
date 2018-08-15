import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {Redirect} from 'react-router';
import {clearAuthToken} from '../local-storage';

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
        <button onClick={() => this.logOut()}>Log out</button>
      );
      homeButton = (
        <button onClick={() => this.homePage()}>Home Page</button>
      );
    }
    return (
      <div className="header-bar">
        <h1>Travel App</h1>
        {logOutButton}
        {homeButton}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.currentUser !== null,
  };
};

export default connect(mapStateToProps)(HeaderBar);