import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../context";
import Godfather from "../logo/godfather.png";
import imbd from "../logo/imbd.png";
import { trim } from "../trim";
import { Img } from "../App";
import { AiOutlineHeart } from "react-icons/ai";
import notFound from "../logo/image404.jpg";

function Results() {
  const { search, setSearch, result, setResult, text, popular, setPopular } =
    useContext(mainContext);
  console.log(result);

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
              <div className="card-heart">
                <AiOutlineHeart />
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
