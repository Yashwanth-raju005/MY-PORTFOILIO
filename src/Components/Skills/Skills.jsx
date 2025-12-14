/* eslint-disable no-unused-vars */
import React from "react";
import "./skills.css";
import Programming from "./Programming";
import FrontEnd from "./FrontEnd";
import Backend from "./Backend";
import DevOps from "./DevOps";
import Concepts from "./Concepts";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">
        Languages · Technologies · DevOps · Core CS
      </span>

      <div className="skills__container">
        <Programming />
        <FrontEnd />
        <Backend />
        <DevOps />
        <Concepts />
      </div>
    </section>
  );
};

export default Skills;
