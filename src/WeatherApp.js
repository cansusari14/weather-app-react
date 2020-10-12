import React from "react";
import "./WeatherApp.css";
import SearchBar from "./SearchBar";
import CurrentInfo from "./CurrentInfo";
import WeatherCurrent from "./WeatherCurrent";
import Forecast from "./Forecast";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="sections">
      <SearchBar />
      <CurrentInfo />
      <WeatherCurrent />
      <Forecast />
      </div>
       <small class="link">
      <a href="https://github.com/cansusari14/Weather_App_She_Codes"
        >open-source code </a>
       by Cansu Sarikaya
    </small>
    </div>
  );
}
