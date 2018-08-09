import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's trips
  if (props.loggedIn) {
    return <Redirect to="/trips" />;
  }

  return (
    <div className="home">
      <h2>Richard's Travel App!</h2>
      <LoginForm />
      <Link to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);