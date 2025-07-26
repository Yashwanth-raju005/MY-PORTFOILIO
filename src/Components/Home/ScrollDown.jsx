/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button-flex">
        <div className="mouse">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4713/4713339.png"
            alt=""
            className="ar-icon"
          />
          <span className="home__scroll-name text-white">Scroll Down</span>
        </div>
      </a>
    </div>
  );
};

export default ScrollDown;
