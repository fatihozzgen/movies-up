import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Img } from "../App";
import imbd from "../logo/imbd.png";
import { trim } from "../trim";
import { mainContext, useContext } from "../context";
import notFound from "../logo/image404.jpg";
import { BsFillHeartFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function Detail() {
  const { similar, setSimilar, setFavorite, favorite, deneme } =
    useContext(mainContext);
  const [detail, setDetail] = useState(null);

  const { id } = useParams();

  const res = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${deneme}/${id}?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US`
      )
      .then((res) => setDetail(res.data));
  };

  const handleFavorite = (res) => {
    setFavorite([
      ...favorite.filter((item) => item.id !== res.id),
      {
        id: res.id,
        name: res.title || res.name,
        poster: res.poster_path,
        detail: res.overview,
      },
    ]);
  };

  useEffect(() => {
    res();
    sim();
  }, [id]);

  console.log(detail);

  const sim = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=bcc4ff10c2939665232d75d8bf0ec093&language=en-US&page=1`
      )
      .then((sim) => setSimilar(sim.data));
  };
  return (
    <>
      <div className="line-background">
        <Link to="/">
          <div className="fav-home-btn">Home /</div>
        </Link>
        <div> {detail?.title || detail?.name}</div>
      </div>

      <div className="detail-card">
        <div className="detail-popular-img">
          <img
            src={
              detail?.poster_path === null
                ? notFound
                : Img + detail?.poster_path
            }
          />
        </div>

        <div className="detail-right-side">
          <div className="detail-right-top-side">
            <div className="detail-imbd">
              <img src={imbd} />
              <div>{String(detail?.vote_average).slice(0, 3)}</div>
            </div>
            <button className="fav-btn">
              <BsFillHeartFill />
              Add To favorites
            </button>
          </div>

          <div className="detail-right-bottom-side">
            <div className="detail-card-year">
              {detail?.last_air_date?.slice(0, 4) ||
                detail?.release_date?.slice(0, 4)}
            </div>

            <div className="detail-card-name">
              {detail?.title || detail?.name}
            </div>

            <div className="detail-card-detail">{detail?.overview} </div>
            <div className="detail-buttons-cont">
              {detail?.genres?.map((item, i) => (
                <button key={i} className="filt-btn">
                  {item?.name}
                </button>
              ))}
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
            {similar?.results?.map((res) => (
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
                        {res?.release_date?.slice(0, 4)}
                      </div>

                      <div className="popular-card-name">
                        {trim(res.title || res.name, 23)}
                      </div>

                      <div className="popular-card-detail">
                        {trim(res?.overview, 120)}
                      </div>

                      <div className="detail-btn">
                        <button
                          className="fav-btn"
                          onClick={() => handleFavorite(res)}
                        >
                          <BsFillHeartFill />
                          Add To favorites
                        </button>
                        <Link to={`/${res.id}`}>
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
