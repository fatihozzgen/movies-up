import React from "react";
import Up from "../logo/up.png";
import { RiSearchLine } from "react-icons/ri";

function Search() {
  return (
    <div className="nav-input">
      <input placeholder="Enter movie name here" />

      <div className="search-icon">
        <RiSearchLine style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Search;
