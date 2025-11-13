/* eslint-disable no-unused-vars */
import React from "react";
import MYPIC from "../../assets/MYPIC.jpg";
import Resume from '../../../public/Resume.pdf'
import "./about.css";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title ">About Me</h2>
      <span className="section__subtitle">My Intro</span>

      <div className="about__container container grid">
        <img src={MYPIC} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I’m a passionate web developer dedicated to creating responsive,
            user-friendly, and visually appealing websites. With a strong
            foundation in [HTML, CSS, JavaScript], and experience in frameworks
            like [React, D3.js], Backend Technologies [Node.js , Express.js]
            Databases[MongoDB,Jwt Tokens] I specialize in building seamless
            digital experiences tailored to user needs.
          </p>

          <a target="_blank"  href={Resume} className="button button--flex my-btn" >
            Download CV  <img src="https://cdn-icons-png.flaticon.com/128/9797/9797374.png" alt="" className="down-icon"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
