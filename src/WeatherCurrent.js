import React, { useState } from "react";
import "./WeatherCurrent.css";

export default function WeatherCurrent(props) {
  const weatherData = props.data;
  return (
    <div className="weather-current">
      <div className="row">
        <div className="col-8">
          <br />
          <div className="weather-info">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="current-icon"
            />
            <strong id="temperature">
              {Math.round(weatherData.temperature)}
            </strong>
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
            <p className="wind">{weatherData.wind} km/h</p>
            <li className="detail-list">Humidity</li>
            <p className="humidity">{weatherData.humidity}%</p>
          </ul>
        </div>
      </div>
    </div>
  );
}
