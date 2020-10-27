import React, { useState } from "react";
import "./WeatherApp.css";
import SearchBar from "./SearchBar";
import CurrentInfo from "./CurrentInfo";
import WeatherCurrent from "./WeatherCurrent";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeatherApp(props) {
  const [ready, setReady] = useState(false);
  const [WeatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
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
  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
    alert(city);
  }

  if (ready) {
    return (
      <div className="WeatherApp">
        <div className="sections">
          <SearchBar />
          <CurrentInfo data={WeatherData} />
          <WeatherCurrent />
          <Forecast />
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
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
