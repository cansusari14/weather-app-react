import React, { useState } from "react";
import "./WeatherCurrent.css";
import axios from "axios";
import SearchBar from "./SearchBar.js";

export default function WeatherCurrent() {
  console.log("RU");
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setReady(true);
    setTemperature(response.data.main.temp);
  }
  if (ready) {
    return (
      <div className="weather-current">
        <div className="row">
          <div className="col-8">
            <br />
            <div className="weather-info">
              <img src="assets/10d.svg" alt="" className="current-icon" />
              <strong id="temperature">{Math.round(temperature)}</strong>
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
  } else {
    const apiKey = "995d2282655743a8f4d6521ab4e2c0d9";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
