import React, { useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function SearchBar(props) {
  function handleCityChange(props) {}
  return (
    <div className="search-bar">
      <form className="search" onSubmit={props.onSearch}>
        <input
          type="text"
          placeholder="Enter a city here"
          autoFocus="on"
          onChange={handleCityChange}
        />
        <button className="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="button">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </button>
      </form>
    </div>
  );
}
