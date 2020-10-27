import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp defaultCity="Istanbul" />
    </div>
  );
}

export default App;
