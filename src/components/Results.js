import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../context";
import Godfather from "../logo/godfather.png";
import imbd from "../logo/imbd.png";
import { trim } from "../trim";
import { Img } from "../App";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import notFound from "../logo/image404.jpg";

function Results() {
  const {
    search,
    setSearch,
    result,
    setResult,
    text,
    popular,
    setPopular,
    favorite,
    setFavorite,
  } = useContext(mainContext);
  console.log(result);

  const handleFavorite = (res) => {
    if (favorite.find((item) => item.id === res.id)) {
      setFavorite([...favorite.filter((item) => item.id !== res.id)]);
    } else {
      setFavorite([
        ...favorite.filter((item) => item.id !== res.id),
        {
          id: res.id,
          name: res.title || res.name,
          poster: res.poster_path,
          detail: res.overview,
        },
      ]);
    }
  };

  return (
    <div>
      <div className="line-background">
        <Link to="/">
          <div className="fav-home-btn">Home /</div>
        </Link>
        <div> Search results </div>
      </div>
      <div className="fav-text">
        Search result <span>{text}</span>
      </div>

      <div className="result-container">
        {result?.results?.map((res) => (
          <div className="card" key={res.id}>
            <div className="img-container">
              <img
                className="card-image"
                src={
                  res.poster_path === null ? notFound : Img + res.poster_path
                }
              />
              {/* <div className="card-overview"> {res?.genres[0]}</div> */}
              <div className="card-heart" onClick={() => handleFavorite(res)}>
                {favorite.find((item) => item.id === res.id) ? (
                  <AiFillHeart />
                ) : (
                  <AiOutlineHeart />
                )}
              </div>
            </div>

            <div className="bottom-side">
              <div className="imbd-container">
                <img className="card-imbd" src={imbd} />
                <div className="card-point"> 8.8</div>
              </div>
              {/* <div className="card-year">{res?.Year}</div> */}
              <div className="card-name">{trim(res?.title, 20)}</div>
              <div className="card-detail">{trim(res?.overview, 85)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;

{
  /* <AiOutlineHeart /> */
}
