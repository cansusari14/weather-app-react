import React, { useState } from "react";
import "./WeatherCurrent.css";

export default function WeatherCurrent(props) {
  const [unit, setUnit] = useState("celsius");
  const weatherData = props.data;
  const fahrenheit = (weatherData.temperature * 9) / 5 + 32;

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
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
                °C |{""}
                <a href="/" onClick={convertToFahrenheit}>
                  °F
                </a>
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
  } else {
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
              <strong id="temperature">{Math.round(fahrenheit)}</strong>
              <span className="units">
                <a href="/" onClick={convertToCelsius}>
                  °C
                </a>{" "}
                | °F
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
}
