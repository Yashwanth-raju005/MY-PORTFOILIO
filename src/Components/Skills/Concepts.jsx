/* eslint-disable no-unused-vars */
import React from "react";

const Concepts = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Core Concepts</h3>

      <div className="skills__icons">
        <div className="skill__item">
          <i className="bx bx-chip skill__icon"></i>
          <p className="skill__text">Operating Systems</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-data skill__icon"></i>
          <p className="skill__text">DBMS</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-lock skill__icon"></i>
          <p className="skill__text">Encryption & Decryption</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-brain skill__icon"></i>
          <p className="skill__text">Machine Learning</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-network-chart skill__icon"></i>
          <p className="skill__text">Computer Networks</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-layer skill__icon"></i>
          <p className="skill__text">OOP</p>
        </div>

        <div className="skill__item">
          <i className="bx bx-refresh skill__icon"></i>
          <p className="skill__text">Agile Methodology</p>
        </div>
      </div>
    </div>
  );
};

export default Concepts;
