import React from "react";
import { Link } from "react-router-dom";
import Favorite from "../logo/favorites.png";
import Godfather from "../logo/godfather.png";
import imbd from "../logo/imbd.png";

function Favorites() {
  return (
    <div>
      <div className="line-background">
        <Link to="/">
          <div className="fav-home-btn">Home /</div>
        </Link>
        <div> Favorites</div>
      </div>

      <div className="fav-text">
        <img src={Favorite} />
      </div>
    </div>
  );
}

export default Favorites;
