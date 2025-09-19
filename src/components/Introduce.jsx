import React from "react";
import "../styles/introduce.css";

const Introduce = () => {
  return (
    <section className="introduce">
      <div className="introduce-content">
        <h1>
          Introduce your <br />
          product quickly & <br />
          effectively
        </h1>

        <p>
          Landy comes with multi-lingual support, all of the content is <br />
          stored in the JSON files, so that you can manage the texts <br />
          without having any prior knowledge in developing web <br />
          applications using React.js.
        </p>

        <button className="intro-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Introduce;
