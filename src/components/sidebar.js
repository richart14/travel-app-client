import React from 'react';
import './sidebar.css';

export default function Sidebar(props) {

  const itemList = props.items.map((item, index) => {
    return (
      <li className="trip-list-item" key={index}>
        {item}
      </li>
    );
  });

  return (
    <div className="sidebar">
      <nav className="previous-view">
        <ul className="trip-list">
          {itemList}
        </ul>
      </nav>
    </div>
  );

}