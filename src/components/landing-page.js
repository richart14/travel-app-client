import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import './landing-page.css';

import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's trips
  if (props.loggedIn) {
    return <Redirect to="/trips" />;
  }

  return (
    <div className="home">
      <h2>Make plans for any and all your trips!</h2>
      <p>Build your itineraries and make sure you have a plan no matter where you are!</p>
      <p><u>Demo User:</u></p>
      <p><strong>Username:</strong> testuser</p>
      <p><strong>Password:</strong> helloworld</p>
      <LoginForm />
      <Link className="buttonLink" to="/register">Register</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);