/* eslint-disable no-unused-vars */
import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend & Databases</h3>

      <div className="skills__icons">
        <div className="skill__item">
          <i className="bx bxl-nodejs skill__icon"></i>
          <p className="skill__text">Node.js</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-server skill__icon"></i>
          <p className="skill__text">Express.js</p>
        </div>

        <div className="skill__item">
          <i className="bx bxl-mongodb skill__icon"></i>
          <p className="skill__text">MongoDB</p>
        </div>

        <div className="skill__item">
          <i className="bx bxs-data skill__icon"></i>
          <p className="skill__text">MySQL</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-plug skill__icon"></i>
          <p className="skill__text">API Design</p>
        </div>
      </div>
    </div>
  );
};

export default Backend;
