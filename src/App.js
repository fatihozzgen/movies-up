import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/filter.css";
import "./styles/search.css";
import "./styles/favorites.css";
import "./styles/popular.css";

import "swiper/css/bundle";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
