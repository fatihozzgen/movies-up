import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Img } from "../App";
import imbd from "../logo/imbd.png";
import { trim } from "../trim";
import { mainContext, useContext } from "../context";

import { BsFillHeartFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function Detail() {
  const { popular } = useContext(mainContext);
  const [detail, setDetail] = useState(null);

  const { id } = useParams();

  const res = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US`
      )
      .then((res) => setDetail(res.data));
  };

  useEffect(() => {
    res();
  }, [id]);

  console.log(detail);

  return (
    <>
      <div className="line-background">
        <Link to="/">
          <div className="fav-home-btn">Home /</div>
        </Link>
        <div> {detail?.title}</div>
      </div>

      <div className="detail-card">
        <div className="detail-popular-img">
          <img src={Img + detail?.poster_path} />
        </div>

        <div className="detail-right-side">
          <div className="detail-right-top-side">
            <div className="detail-imbd">
              <img src={imbd} />
              <div>{Math.round(detail?.vote_average)}</div>
            </div>
            {/* <button className="fav-btn">Trailer</button> */}
            <button className="fav-btn">
              <BsFillHeartFill />
              Add To favorites
            </button>
          </div>

          <div className="detail-right-bottom-side">
            <div className="detail-card-year">
              {detail?.release_date.slice(0, 4)}
            </div>

            <div className="detail-card-name">{detail?.title}</div>

            <div className="detail-card-detail">{detail?.overview} </div>

            <div className="detail-buttons-cont">
              <button className="filt-btn">{detail?.genres[0].name}</button>
              <button className="filt-btn">{detail?.genres[1].name}</button>
            </div>
          </div>
        </div>
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
                      <div className="popular-card-year">
                        {/* {res?.release_date?.slice(0, 4)} */}
                        2022
                      </div>

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
                        <Link to={`results/${res.id}`}>
                          <div>View Details</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Detail;
