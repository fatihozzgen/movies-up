import React, { useState, useEffect } from "react";
import { mainContext, useContext } from "../context";
import axios from "axios";

export const Fetch = () => {
  useEffect(() => {
    res();
  }, []);

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

  const res = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=d9b8b0e16bb5b39ca47b17702d4fd301&language=en-US&language=en-US`
      )
      .then((res) => setPopular(res.data));
  };
};
