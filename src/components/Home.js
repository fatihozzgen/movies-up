import React from "react";
import People from "../logo/people.png";
import Yellow from "../logo/yellow.png";

function Home() {
  return (
    <div className="home">
      <div className="welcome">
        <img src={People} />
        <img src={Yellow} />
      </div>
    </div>
  );
}

export default Home;
