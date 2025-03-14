/* eslint-disable no-unused-vars */
import React from "react";
import './home.css'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button-flex">
        <div className="mouse" >

        <i className="uil uil-mouse-alt"></i>
        <span className="home__scroll-name">Scroll Down 
            <i className="uil uil-arrow-down"></i>
        </span>

        </div>
        
      </a>
    </div>
  );
};

export default ScrollDown;
