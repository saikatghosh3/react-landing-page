import React from "react";
import readyImg from "../assets/img/product-launch.svg"; 
import "../styles/readyMadeSection.css";

const ReadyMadeSection = () => {
  return (
    <section className="ready-section" id="mission">
      <div className="ready-container">
        {/*  This is Left Content */}
        <div className="ready-left">
          <h1>
            Ready made <br />
            sections
          </h1>
          <p>
            Landy comes with a set of ready to use sections <br />
            to help you easily create a landing page for your own <br />
            brand, with all the content your startup desires. <br />
            In order to replace any dummy elements (text, image, <br />
            etc..) all you need to do is go to content folder <br />
            and input your real content.
          </p>
        </div>

        {/* This is Right Image */}
        <div className="ready-right">
          <img src={readyImg} alt="Ready Made Illustration" />
        </div>
      </div>
    </section>
  );
};

export default ReadyMadeSection;
