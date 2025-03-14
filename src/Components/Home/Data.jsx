/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">Yashwanth Raju S 👋</h1>
      <h3 className="home__subtitle">Web Developer</h3>
      <p className="home__description">
        A passionate web developer skilled in building dynamic websites using
        React for front-end development and Node.js for back-end solutions.
      </p>

      <a href="#contact" className="button hell button--flex " >
        Say Hello!&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="uil uil-message z-1000"></i>
      </a>
    </div>
  );
};

export default Data;
