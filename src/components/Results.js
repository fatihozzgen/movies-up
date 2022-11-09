import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { mainContext } from "../context";
import Godfather from "../logo/godfather.png";
import imbd from "../logo/imbd.png";
import { trim } from "../trim";

function Results() {
  const { search, setSearch, result, setResult, text, popular, setPopular } =
    useContext(mainContext);

  return (
    <div>
      <div className="line-background">
        <Link to="/">
          <div className="fav-home-btn">Home /</div>
        </Link>
        <div> Search results </div>
      </div>
      <div className="fav-text">Search result {text}</div>

      {/* <div className="result-container">
        {result?.Search?.map((res) => (
          <div className="card">
            <div>
              <img className="card-image" src={res?.Poster} />
            </div>

            <div className="bottom-side">
              <div className="imbd-container">
                <img className="card-imbd" src={imbd} />
                <div className="card-point"> 8.8</div>
              </div>
              <div className="card-year">{res?.Year}</div>
              <div className="card-name">{trim(res?.Title, 30)}</div>
              <div className="card-detail">
                The aging patriarch of an organized crime dynasty transfers
                control of his clandestine empire to his reluctant son.
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Results;
