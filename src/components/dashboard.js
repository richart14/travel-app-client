import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {Route, Switch} from 'react-router-dom';
import TripForm from './tripForm';
import TripEdit from './tripEdit';
import TripList from './tripList';
import TripDelete from './tripDelete';
import SingleTrip from './single-trip';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
                    Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          <Route exact path="/dashboard" component={TripForm} />
          <Switch>
            <Route exact path="/trips/:tripId" component={SingleTrip} />
            <Route exact path="/trips/edit/:tripId" component={TripEdit} />
            <Route exact path="/dashboard" component={TripList} />
            <Route path="/trips/delete/:tripId" component={TripDelete} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const {currentUser} = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    token: state.auth.authToken
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));