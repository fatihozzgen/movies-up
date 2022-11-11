import React, { useEffect } from "react";
import { mainContext, useContext } from "../context";
import axios from "axios";
import People from "../logo/people.png";
import Yellow from "../logo/yellow.png";
import Movieup from "../logo/wmovieup.png";
import Circle from "../logo/circle.png";
import Lorem from "../logo/lorem.png";
import Filter from "./Filter";
import Popular from "../logo/popular.png";
import imbd from "../logo/imbd.png";
import { trim } from "../trim";
import "../styles/card.css";
import { Img } from "../App";
import Search from "./Search";

import { BsFillHeartFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Home() {
  const { search, setSearch, result, setResult, popular } =
    useContext(mainContext);

  return (
    <div className="home">
      <div className="welcome">
        <img className="wbackground" src={People} />
        <img className="wbackground" src={Yellow} />

        <img className="wmovieup  " src={Movieup} />
        <img className="wcircle" src={Circle} />
        <img className="wlorem" src={Lorem} />
      </div>
      <div className="home-filter">
        <Filter />
      </div>
      <div className="popular-text ">
        <img src={Popular} />
      </div>
      <div className="popular-slider2">
        <div className="popular-slider">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {popular?.results?.map((res) => (
              <SwiperSlide key={res.id}>
                <div className="populer-card">
                  <div className="popular-img">
                    <img src={Img + res.poster_path} />
                  </div>

                  <div className="right-side">
                    <div className="right-top-side">
                      <div className="popular-imbd-container">
                        <img className="popular-card-imbd" src={imbd} />
                        <div className="popular-card-point"> 8.8</div>
                      </div>

                      <div className="popular-buttons-cont">
                        <button className="filt-btn">Action</button>
                        <button className="filt-btn">Biography</button>
                      </div>
                    </div>

                    <div className="right-bottom-side">
                      <div className="popular-card-year">2019</div>

                      <div className="popular-card-name">
                        {trim(res.title || res.name, 23)}
                      </div>

                      <div className="popular-card-detail">
                        {trim(res?.overview, 120)}
                      </div>

                      <div className="detail-btn">
                        <button className="fav-btn">
                          <BsFillHeartFill />
                          Add To favorites
                        </button>
                        <div>View Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
