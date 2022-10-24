import React from "react";
import { Link } from "react-router-dom";
import Movie from "../logo/movie.png";
import Search from "./Search";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <div className="movie-logo">
            <img src={Movie} />
            {/* <img className="up-logo" src={Up} /> */}
          </div>

          <div className="navigation">
            <Link to="/">
              <div> Home </div>{" "}
            </Link>

            <Link to="/favorite">
              <div className="button-fav">Favorite</div>
            </Link>
          </div>
          <div className="navbar-search">
            <Search />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
