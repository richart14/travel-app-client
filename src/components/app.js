import React, { Component } from 'react';
import './app.css';
import Sidebar from './sidebar';
import TripList from './tripList';
import TripForm from './tripForm';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Travel App</h1>
        </header>
        <Sidebar />
        <main>
          <TripForm />
          <TripList />
        </main>   
      </div>
    );
  }
}
