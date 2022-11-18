import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Results from "./components/Results";
import { mainContext } from "./context";

import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/filter.css";
import "./styles/search.css";
import "./styles/favorites.css";
import "./styles/popular.css";
import "./styles/result.css";
import "./styles/detail.css";

import "swiper/css/bundle";
import { useState } from "react";
import { Fetch } from "./components/Fetch";
import Detail from "./components/Detail";

export const Img = "https://image.tmdb.org/t/p/w500/";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const [text, setText] = useState();
  const [popular, setPopular] = useState();
  const [similar, setSimilar] = useState();
  const [favorite, setFavorite] = useState([]);

  const datax = {
    search,
    setSearch,
    result,
    setResult,
    text,
    setText,
    popular,
    setPopular,
    similar,
    setSimilar,
    favorite,
    setFavorite,
  };

  return (
    <mainContext.Provider value={datax}>
      <Fetch />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorite" element={<Favorites />} />
          <Route path="results" element={<Results />} />
          <Route path=":id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </mainContext.Provider>
  );
}

export default App;
