/* eslint-disable no-unused-vars */
import React from "react";

const FrontEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>

      <div className="skills__icons">

        <div className="skill__item">
          <i className="bx bxl-react skill__icon"></i>
          <p className="skill__text">React.js</p>
          </div>

      <div className="skill__item">
          <i className="bx bxl-bootstrap skill__icon"></i>
          <p className="skill__text">Bootstrap</p>
        </div>

        <div className="skill__item">
          <i className="bx bxl-tailwind-css skill__icon"></i>
          <p className="skill__text">Tailwind CSS</p>
        </div>

        


        <div className="skill__item">
          <i className="bx bxl-html5 skill__icon"></i>
          <p className="skill__text">HTML</p>
        </div>

        <div className="skill__item">
          <i className="bx bxl-css3 skill__icon"></i>
          <p className="skill__text">CSS</p>
        </div>

        
        
      </div>
    </div>
  );
};

export default FrontEnd;
