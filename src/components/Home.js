import React from "react";
import People from "../logo/people.png";
import Yellow from "../logo/yellow.png";
import Movieup from "../logo/wmovieup.png";
import Circle from "../logo/circle.png";
import Lorem from "../logo/lorem.png";
import Filter from "./Filter";
import Popular from "../logo/popular.png";
import Godfather from "../logo/godfather.png";
import imbd from "../logo/imbd.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Home() {
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

      <div className="popular-slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card">
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
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
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
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
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
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
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
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
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
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
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
                  The aging patriarch of an organized crime dynasty transfers
                  control of his clandestine empire to his reluctant son.
                </div>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
