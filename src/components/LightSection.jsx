import React from "react";
import mainImg from "../assets/img/graphs.svg"; 
import antdIcon from "../assets/img/notes.svg";       

import "../styles/lightSection.css";

const LightSection = () => {
  return (
    <section className="light-section" id="about">
      <div className="light-top">
       
        <div className="light-left">
          <img src={mainImg} alt="Light Illustration" />
        </div>

       
        <div className="light-right">
        
          <div className="light-right-top">
            <h1>
              Light, fast & <br />
              responsive
            </h1>
            <p>
              This template is ready to use, so you don't need to <br />
              change anything at a component level, unless you <br />
              want to customize the default styling.
            </p>
          </div>

          
          <div className="light-right-bottom">
            <div className="light-card">
              <img src={antdIcon} alt="Ant Design" className="card-icon" />
              <h3>Why Antd?</h3>
              <p>
                Ant Design is a React UI library <br />
                has a lot of easy-to-use components <br />
                for building elegant UI.
              </p>
            </div>

            <div className="light-card">
              <img src={antdIcon} alt="Styled Components" className="card-icon" />
              <h3>Why styled-components?</h3>
              <p>
                Styled Components gives you total <br />
                control over your components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightSection;
