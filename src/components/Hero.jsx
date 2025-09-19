import React from "react";
import developer from "../assets/img/developer.svg"; 
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* This is  Left Column */}
        <div className="hero-left">
          <h1>Landing Page</h1>
          <h1>Template for</h1>
          <h1>Developers & Startups</h1>

          <p>
            Beautifully designed templates using React.js, Ant Design and
            styled-components! Save weeks of time and build your landing page in
            minutes.
          </p>

          <div className="hero-buttons">
            <button className="btn explore">Explore</button>
            <button className="btn learn">Learn More</button>
          </div>
        </div>

        {/*  This is Right Column */}
        <div className="hero-right">
          <img src={developer} alt="Developer Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
