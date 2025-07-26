/* eslint-disable no-unused-vars */
// Project.jsx
import React from "react";
import Cards from "./Cards";
import "./Project.css";
import Zerodha from "../../assets/Zerodha.png";
import Gemini from "../../assets/Gemini.jpg";
import Employee from "../../assets/employee.jpg";
import Movie from "../../assets/Movie.jpg";
import Ecom from "../../assets/E-com.jpg";
import EatnSplit from "../../assets/eat&split.jpg";

export const details = [
  {
    projectName: "Zerodha Clone",
    projectImage: Zerodha,
    projectDescription:
      "A full-stack Zerodha clone with login, charts, real-time stock API, and simulated trading.",
    githubLink: "https://github.com/Yashwanth-raju005/Zerodha_Clone",
  },
  {
    projectName: "Google Gemini(Clone)",
    projectImage: Gemini,
    projectDescription:
      "Gemini AI clone using React, responsive UI with prompt handling.",
    githubLink: "https://github.com/Yashwanth-raju005/Gemini-AI-Clone",
  },
  {
    projectName: "Employee Task Manager",
    projectImage: Employee,
    projectDescription:
      "Dashboard-based task management app for admins and employees.",
    githubLink: "https://github.com/Yashwanth-raju005/Employee-Task-Assigner",
  },
  {
    projectName: "Movie App",
    projectImage: Movie,
    projectDescription:
      "Search movies, view details, and save to watch later.",
    githubLink: "https://github.com/Yashwanth-raju005/POPCORN-MOVIE-APP",
  },
  {
    projectName: "E-Commerce Site",
    projectImage: Ecom,
    projectDescription:
      "Shopping app with product view, search and cart features.",
    githubLink: "https://github.com/Yashwanth-raju005/React-Shopping-Site",
  },
  {
    projectName: "Eat & Split Bill",
    projectImage: EatnSplit,
    projectDescription:
      "Split your meal bills quickly among friends.",
    githubLink: "https://github.com/Yashwanth-raju005/Bill-Splitter",
  },
];

const Project = () => {
  return (
    <div className="project section" id="projects">
      <div className="project-head">
        <h2 className="pro-head">Projects</h2>
        <p>Built Items</p>
      </div>
      <div className="main-card">
        {details.map((pro) => (
          <Cards key={pro.projectName} pro={pro} />
        ))}
      </div>
    </div>
  );
};

export default Project;