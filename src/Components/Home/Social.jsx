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
        <img src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/in/yashwanth-raju-2a09a42a5/"
        className="home__social-icon"
        target="_blank"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384088.png"  alt="" />
      </a>
      <a
        href="https://github.com/Yashwanth-raju005"
        className="home__social-icon"
        target="_blank"
      >
        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt="" />
      </a>
    </div>
  );
};

export default Social;
