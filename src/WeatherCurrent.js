import React, { useState } from "react";
import "./WeatherCurrent.css";
import axios from "axios";
import SearchBar from "./SearchBar.js";

export default function WeatherCurrent() {
  const [ready, setReady] = useState(false);
  const [WeatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "assets/03n.svg",
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="weather-current">
        <div className="row">
          <div className="col-8">
            <br />
            <div className="weather-info">
              <img
                src={WeatherData.iconUrl}
                alt={WeatherData.description}
                className="current-icon"
              />
              <strong id="temperature">
                {Math.round(WeatherData.temperature)}
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
              <p className="wind">{WeatherData.wind} km/h</p>
              <li className="detail-list">Humidity</li>
              <p className="humidity">{WeatherData.humidity}%</p>
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
