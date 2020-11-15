import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <hr />
        <div className="row weather-forecast">
          {forecast.daily.slice(1, 6).map((day, index) => (
            <div key={index} className="col forecast">
              <h6>{daysShort[new Date(day.dt * 1000).getDay()]}</h6>
              <img
                src={`assets/${day.weather[0].icon}.svg`}
                alt="weather icon"
                className="forecast-images"
              />
              <p>{Math.round(day.temp.max)}°C</p>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    let apiKey = "995d2282655743a8f4d6521ab4e2c0d9";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
  }
  return (
    <div className="forecast">
      <hr />
      <div className="row weather-forecast">
        <div className="col forecast">
          <h6>SUN</h6>
          <img
            src="assets/11n.svg"
            alt="weather icon"
            className="forecast-images"
          />
          <p>18°C</p>
        </div>
        <div className="col forecast">
          <h6>MON</h6>
          <img
            src="assets/04n.svg"
            alt="weather icon"
            className="forecast-images"
          />
          <p>22°C</p>
        </div>
        <div className="col forecast">
          <h6>TUE</h6>
          <img
            src="assets/09d.svg"
            alt="weather icon"
            className="forecast-images"
          />
          <p>16°C</p>
        </div>
        <div className="col forecast">
          <h6>WED</h6>
          <img
            src="assets/10n.svg"
            alt="weather icon"
            className="forecast-images"
          />
          <p>17°C</p>
        </div>
        <div className="col forecast">
          <h6>THU</h6>
          <img
            src="assets/10d.svg"
            alt="weather icon"
            className="forecast-images"
          />
          <p>25°C</p>
        </div>
      </div>
    </div>
  );
}
