import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container p-5 mb-5 home-hero">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="hero-image mb-5"
        />

        <h1 className="mt-4 hero-title">Invest in everything</h1>

        <p className="hero-subtitle">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>

        <button className="btn btn-primary hero-btn">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
