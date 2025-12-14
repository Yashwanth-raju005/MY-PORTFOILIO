/* eslint-disable no-unused-vars */
import React from "react";
import MYPIC from '../../assets/MYPIC.png'
import Resume from '../../../public/Resume.pdf'
import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={MYPIC} alt="Profile" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description text-justify">
            I am a dedicated full stack web developer with a strong foundation in
            HTML, CSS, and JavaScript, and hands-on experience building modern,
            responsive web applications. I work extensively with React on the
            frontend and Node.js with Express on the backend, integrating secure
            APIs and databases such as MongoDB and MySQL. I enjoy transforming
            complex problems into clean, efficient, and user-focused digital
            solutions.
          </p>

          <a
            target="_blank"
            rel="noreferrer"
            href={Resume}
            className="button button--flex my-btn "
          >
            Download CV
            <img
              src="https://cdn-icons-png.flaticon.com/128/9797/9797374.png"
              alt="download"
              className="down-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
