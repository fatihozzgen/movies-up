import React, { useState } from "react";
import Up from "../logo/up.png";
import { RiSearchLine } from "react-icons/ri";
import { mainContext, useContext } from "../context";

function Search() {
  const { search, setSearch } = useContext(mainContext);
  console.log(search);

  return (
    <div className="nav-input">
      <input
        placeholder="Enter movie name here"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="search-icon">
        <RiSearchLine style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Search;
