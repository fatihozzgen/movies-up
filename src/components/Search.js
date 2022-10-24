import React from "react";
import Up from "../logo/up.png";
import { RiSearchLine } from "react-icons/ri";

function Search() {
  return (
    <div className="nav-input">
      <input placeholder="Enter movie name here" />
      <RiSearchLine size={25} color={"#A4A4A4"} style={{ cursor: "pointer" }} />
    </div>
  );
}

export default Search;
