import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search">
        <input type="text" placeholder="Enter a city here" />
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
