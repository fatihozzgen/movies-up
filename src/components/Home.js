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
import "../styles/card.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
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
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="populer-card">
                <div className="popular-img">
                  <img src={Godfather} />
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

                    <div className="popular-card-name">The Godfather</div>

                    <div className="popular-card-detail">
                      The aging patriarch of an organized crime dynasty
                      transfers control of his clandestine empire to his
                      reluctant son.
                    </div>

                    <div className="detail-btn">
                      <button className="fav-btn">Add To favorites</button>
                      <div>View Details</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
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
            The aging patriarch of an organized crime dynasty transfers control
            of his clandestine empire to his reluctant son.
          </div>
        </div>
      </div>
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
            The aging patriarch of an organized crime dynasty transfers control
            of his clandestine empire to his reluctant son.
          </div>
        </div>
      </div>{" "}
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
            The aging patriarch of an organized crime dynasty transfers control
            of his clandestine empire to his reluctant son.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
