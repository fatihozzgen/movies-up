import React, { useState, useEffect } from "react";
import Up from "../logo/up.png";
import { RiSearchLine } from "react-icons/ri";
import { mainContext, useContext } from "../context";
import axios from "axios";
import { useNavigate } from "react-router";

function Search({ filtred, allChange, searchValue }) {
  const { search, setSearch, setResult, setText } = useContext(mainContext);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setText(search);
    setSearch("");
    navigate("/results");
    res();
  };

  const res = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${searchValue}`
      )
      .then((res) => setResult(res.data));
  };

  return (
    <form className="nav-input" onSubmit={handleSearch}>
      <input
        placeholder="Enter movie name here"
        onChange={(e) => allChange(e, filtred)}
      />

      <div className="search-icon">
        <RiSearchLine style={{ cursor: "pointer" }} />
      </div>
    </form>
  );
}

export default Search;
