import React from 'react';
import './sidebar.css';

export default function Sidebar(props) {


  return (
    <div className="sidebar">
      <nav className="previous-view">
        <ul className="trip-list">
          <li className="trip-list-item">
            First Item
          </li>
          <li className="trip-list-item">
            Second Item
          </li>
          <li className="trip-list-item">
            Third Item
          </li>
          <li className="trip-list-item">
            Fourth Item
          </li>
        </ul>
      </nav>
    </div>
  );

}