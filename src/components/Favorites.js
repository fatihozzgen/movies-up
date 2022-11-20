import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Favorite from "../logo/favorites.png";
import imbd from "../logo/imbd.png";
import { mainContext, useContext } from "../context";
import { Img } from "../App";
import { trim } from "../trim";
import { AiFillHeart } from "react-icons/ai";

function Favorites() {
  const { favorite, setFavorite } = useContext(mainContext);

  const removeCard = (id) => {
    setFavorite([...favorite.filter((item) => item.id !== id)]);
  };

  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  console.log(favorite);
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
      <div className="result-container">
        {favorite.map((item) => (
          <div className="card" key={item.id}>
            <div className="img-container">
              <img className="card-image" src={Img + item?.poster} />
              <div className="card-heart" onClick={() => removeCard(item?.id)}>
                <AiFillHeart />
              </div>
            </div>

            <div className="bottom-side">
              <div className="imbd-container">
                <img className="card-imbd" src={imbd} />
                <div className="card-point"> 8.8</div>
              </div>
              {/* <div className="card-year">{res?.Year}</div> */}
              <div className="card-name">{item?.name}</div>
              <div className="card-detail">{trim(item?.overview, 80)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
