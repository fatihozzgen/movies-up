import React, { useState, useEffect } from "react";
import Up from "../logo/up.png";
import { RiSearchLine } from "react-icons/ri";
import { mainContext, useContext } from "../context";
import axios from "axios";
import { useNavigate } from "react-router";

function Search() {
  const {
    search,
    setSearch,
    result,
    setResult,
    text,
    setText,
    popular,
    setPopular,
  } = useContext(mainContext);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setText(search);
    setSearch("");
    res();
    navigate("/results");
  };

  const res = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=d9b8b0e16bb5b39ca47b17702d4fd301&language=en-US&language=en-US`
      )
      .then((res) => setPopular(res.data));
  };

  useEffect(() => {
    res();
  }, []);

  console.log(popular);

  return (
    <form className="nav-input" onSubmit={handleSearch}>
      <input
        placeholder="Enter movie name here"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <div className="search-icon">
        <RiSearchLine style={{ cursor: "pointer" }} />
      </div>
    </form>
  );
}

export default Search;
