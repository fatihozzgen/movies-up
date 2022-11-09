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

import "swiper/css/bundle";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const [text, setText] = useState();

  const datax = {
    search,
    setSearch,
    result,
    setResult,
    text,
    setText,
  };

  return (
    <mainContext.Provider value={datax}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </mainContext.Provider>
  );
}

export default App;
