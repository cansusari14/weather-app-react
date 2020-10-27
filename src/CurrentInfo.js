import React from "react";
import "./CurrentInfo.css";

export default function CurrentInfo(props) {
  return (
    <div className="current-info">
      <div className="current-location">
        <h1>{props.data.city}</h1>
      </div>
      <p className="current-date">Today | Saturday, 14:50</p>
      <span className="weather-description">{props.data.description}</span>
    </div>
  );
}
