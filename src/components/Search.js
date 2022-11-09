import React, { useState } from "react";
import Up from "../logo/up.png";
import { RiSearchLine } from "react-icons/ri";
import { mainContext, useContext } from "../context";
import axios from "axios";
import { useNavigate } from "react-router";

function Search() {
  const { search, setSearch, result, setResult, text, setText } =
    useContext(mainContext);

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
      .get(`http://www.omdbapi.com/?s=${search}&apikey=6e245fab`)
      .then((res) => setResult(res.data));
  };

  // {
  //   result.Search.map((res) => res.Search.Title);
  // }

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
