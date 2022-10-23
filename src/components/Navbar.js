import React from "react";
import { Link } from "react-router-dom";
import Movie from "../logo/movie.png";
import Up from "../logo/up.png";
import { RiSearchLine } from "react-icons/ri";

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

          <div className="nav-input">
            <input placeholder="Enter movie name here" />
            <RiSearchLine size={25} color={"#A4A4A4"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
