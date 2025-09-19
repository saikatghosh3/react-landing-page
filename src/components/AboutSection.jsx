import React from "react";
import aboutImg from "../assets/img/waving.svg"; 
import "../styles/aboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section" id="product">
      <div className="about-container">
        {/* Left section  Image */}
        <div className="about-left">
          <img src={aboutImg} alt="About Illustration" />
        </div>

        {/* Right section  Content */}
        <div className="about-right">
          <h1>
           That's about it!
          </h1>
          <p>
            If you are familiar with React, or SPA frameworks in general,
             there shouldn't be any confusing parts about this template. 
             if not, you can always reach out to me and I'll try me best to answer your questions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
