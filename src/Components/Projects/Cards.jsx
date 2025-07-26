/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./Project.css";

const Cards = ({ pro }) => {
  return (
    <div className="card-main">
      <div className="card-sub">
        <div className="card-img">
          <img src={pro.projectImage} alt={pro.projectName} />
        </div>

        <div className="card-title">
          <h3>{pro.projectName}</h3>
        </div>

        <div className="card-details">
          <details>
            <summary>View Details</summary>
            <p>{pro.projectDescription}</p>
          </details>
        </div>

        <div className="card-techstacks">
          <div className="tech-name">
            <h4>
              TechStacks Used <i className="uil uil-arrow-right"></i>
            </h4>
          </div>
          <div className="tech-icons">
            <i className="uil uil-react"></i>
            <i className="uil uil-css3-simple"></i>
            <i className="uil uil-java-script"></i>
          </div>
        </div>

        <center>
          <a href={pro.githubLink} target="_blank" rel="noopener noreferrer">
            <button className="card-btn">
              Click Me{" "}
              <img
                src="https://cdn-icons-png.flaticon.com/128/2725/2725783.png"
                alt="icon"
                className="click-pic"
              />
            </button>
          </a>
        </center>
      </div>
    </div>
  );
};

export default Cards;
