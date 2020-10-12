import React from "react";
import "./WeatherCurrent.css";

export default function WeatherCurrent() {
  return (
    <div className="weather-current">
      <div className="row">
        <div className="col-8">
          <br />
          <div className="weather-info">
            <img src="assets/10d.svg" alt="" className="current-icon" />
            <strong id="temperature">26</strong>
            <span className="units">
              <a href=" " className="active">
                °C
              </a>
              |<a href=" ">°F</a>
            </span>
          </div>
        </div>
        <div className="col-4">
          <ul className="weather-details">
            <li className="detail-list">Wind</li>
            <p className="wind">5 km/h</p>
            <li className="detail-list">Humidity</li>
            <p className="humidity">32%</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
