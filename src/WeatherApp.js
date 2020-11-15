import React, { useState } from "react";
import "./WeatherApp.css";
import SearchBar from "./SearchBar";
import CurrentInfo from "./CurrentInfo";
import WeatherCurrent from "./WeatherCurrent";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeatherApp(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(props.defaultCity);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      iconUrl: `assets/${response.data.weather[0].icon}.svg`,
    });
    setReady(true);
  }
  function handleLocation(lat, long) {
    setLocation({ lat, long });
    setReady(false);
    setError(null);
  }
  function handleSearch(city) {
    setLocation(null);
    setCity(city);
    setError(null);
    setReady(false);
  }
  function handleError() {
    setError(`Ooops!Look like "${city}" is not a city !`);
    setCity(props.defaultCity);
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <div className="sections">
          <SearchBar
            city={props.city}
            onSearch={handleSearch}
            onLocation={handleLocation}
          />
          <span className="errorText">{error}</span>
          <CurrentInfo data={weatherData} />
          <WeatherCurrent data={weatherData} />
          <Forecast lat={weatherData.lat} lon={weatherData.lon} />
        </div>
        <small className="link">
          <a href="https://github.com/cansusari14/weather-app-react">
            open-source code{" "}
          </a>
          by Cansu Sarikaya
        </small>
      </div>
    );
  } else {
    let apiKey = "995d2282655743a8f4d6521ab4e2c0d9";
    if (location) {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.long}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse).catch(handleError);
    } else {
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse).catch(handleError);
    }

    return null;
  }
}
