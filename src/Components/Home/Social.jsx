/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/_._yashu7_._/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/yashwanth-raju-2a09a42a5/"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/Yashwanth-raju005"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
