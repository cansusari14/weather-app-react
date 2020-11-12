import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";

export default function SearchBar(props) {
  const [text, setText] = useState("");
  function showPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    props.onLocation(lat, long);
  }
  function handleClick(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSearch(text);
  }

  function handleInputChange(event) {
    setText(event.target.value);
  }

  return (
    <div className="search-bar">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city here"
          autoFocus="on"
          onChange={handleInputChange}
        />
        <button className="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="button" onClick={handleClick}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
      </form>
    </div>
  );
}
