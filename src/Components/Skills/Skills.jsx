/* eslint-disable no-unused-vars */
import React from "react";
import FrontEnd from "./FrontEnd";
import Backend from "./Backend";
import Programming from "./Programming";
import './skills.css'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Known TechStacks</span>

        <div className="skills__container container grid">
            <FrontEnd/>

            <Backend/>

            <Programming/>
        </div>


    </section>
  );
};

export default Skills;
