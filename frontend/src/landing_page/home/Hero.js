import React from "react";

function Hero() {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="HomeHero"
          className="mb-5 p-5"></img>
        <h1>Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="btn btn-primary p-2 fs-5 signup-btn">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
