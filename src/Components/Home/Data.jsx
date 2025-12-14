/* eslint-disable no-unused-vars */
import React from "react";
import "./home.css";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Yashwanth Raju S <span role="img" aria-label="wave">🧑‍💻</span>
      </h1>

      <h3 className="home__subtitle">
        Full Stack Web Developer (M E R N)
      </h3>

      <p className="home__description">
        I am a results-driven web developer with strong experience in building scalable, high-performance web applications. I specialize in creating
        clean, responsive user interfaces using React, and developing secure,
        efficient backend services with Node.js and modern databases.
      </p>

      <a href="#contact" className="button hell button--flex my-btn">
        Let’s Connect 
        <img
          src="https://cdn-icons-png.flaticon.com/128/2268/2268536.png"
          alt="arrow"
          className="arr-icon"
        />
      </a>
    </div>
  );
};

export default Data;
