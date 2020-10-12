import React from "react";
import "./CurrentInfo.css";

export default function CurrentInfo() {
  return (
    <div className="current-info">
      <div className="current-location">
        <h1>Berlin</h1>
      </div>
      <p className="current-date">Today | Saturday, 14:50</p>
      <span className="weather-description">Partly Cloudy</span>
    </div>
  );
}
