import React from "react";
import "./CurrentInfo.css";

export default function CurrentInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.data.date.getDay()];
  let hours = props.data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="current-info">
      <div className="current-location">
        <h1>{props.data.city}</h1>
      </div>
      <p className="current-date">
        Today | {day}, {hours}:{minutes}
      </p>
      <span className="weather-description">{props.data.description}</span>
    </div>
  );
}
