import React from "react";
import { Link } from "react-router-dom";
import Favorite from "../logo/favorites.png";
import Godfather from "../logo/godfather.png";
import imbd from "../logo/imbd.png";

function Favorites() {
  return (
    <div>
      <div className="line-background">
        {/* <img src={Line} /> */}

        <Link to="/">
          <div className="fav-home-btn">Home /</div>
        </Link>
        <div> Favorites</div>
      </div>

      <div className="fav-text">
        <img src={Favorite} />
      </div>

      {/* <div className="card">
        <div>
          <img className="card-image" src={Godfather} />
        </div>

        <div className="bottom-side">
          <div className="imbd-container">
            <img className="card-imbd" src={imbd} />
            <div className="card-point"> 8.8</div>
          </div>
          <div className="card-year">2019</div>
          <div className="card-name">The Godfather</div>
          <div className="card-detail">
            The aging patriarch of an organized crime dynasty transfers control
            of his clandestine empire to his reluctant son.
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Favorites;
