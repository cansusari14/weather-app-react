import React from "react";
import "./Forecast.css";

export default function Forecast() {
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
