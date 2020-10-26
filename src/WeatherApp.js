import React from "react";
import "./WeatherApp.css";
import SearchBar from "./SearchBar";
import CurrentInfo from "./CurrentInfo";
import WeatherCurrent from "./WeatherCurrent";
import Forecast from "./Forecast";
import axios from "axios";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="sections">
        <SearchBar />
        <CurrentInfo />
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
}
