import React from "react";
import People from "../logo/people.png";
import Yellow from "../logo/yellow.png";
import Movieup from "../logo/wmovieup.png";
import Circle from "../logo/circle.png";
import Lorem from "../logo/lorem.png";

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
    </div>
  );
}

export default Home;
