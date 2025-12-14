/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Project.css";

const Cards = ({ pro }) => {
  return (
    <div className="project-card">
      <div className="project-card__inner">

        {/* FRONT */}
        <div className="project-card__front">
          <h4 className="text-center text-orange-400 text-1xl">Hover Me</h4>
          <img src={pro.projectImage} alt={pro.projectName} />
          <h3>{pro.projectName}</h3>
          
        </div>

       

        {/* BACK */}
        <div className="project-card__back ">
          <p>{pro.projectDescription}</p>
          <div>

            <div>TechStacks Used : </div>
          <div className="tech-icons">
            <i className="uil uil-react"></i>
            <i className="uil uil-css3-simple"></i>
            <i className="uil uil-java-script"></i>
          </div>

          </div>
          

          <a
            href={pro.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="card-btn">View Code</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Cards;
