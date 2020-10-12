import React from "react";
import "./WeatherApp.css";
import SearchBar from "./SearchBar";
import CurrentInfo from "./CurrentInfo";
import WeatherCurrent from "./WeatherCurrent";
import Forecast from "./Forecast";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <SearchBar />
      <CurrentInfo />
      <WeatherCurrent />
      <Forecast />
    </div>
  );
}
