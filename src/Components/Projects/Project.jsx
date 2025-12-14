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
    projectName: "Zerodha Trading Platform",
    projectImage: Zerodha,
    projectDescription:
      "A full-stack Zerodha clone with login, charts, real-time stock API, and simulated trading.",
    githubLink: "https://github.com/Yashwanth-raju005/Zerodha_Clone",
  },
  {
    projectName: "Google Gemini Replica",
    projectImage: Gemini,
    projectDescription:
      "AI-powered Gemini clone using React with prompt handling and responsive UI.",
    githubLink: "https://github.com/Yashwanth-raju005/Gemini-AI-Clone",
  },
  {
    projectName: "Employee Task Manager",
    projectImage: Employee,
    projectDescription:
      "Role-based dashboard for admins and employees to manage tasks efficiently.",
    githubLink: "https://github.com/Yashwanth-raju005/Employee-Task-Assigner",
  },
  {
    projectName: "Movie App",
    projectImage: Movie,
    projectDescription:
      "Search movies, explore details, and save favorites to watch later.",
    githubLink: "https://github.com/Yashwanth-raju005/POPCORN-MOVIE-APP",
  },
  {
    projectName: "E-Commerce Site",
    projectImage: Ecom,
    projectDescription:
      "E-commerce app with product listing, search, and cart functionality.",
    githubLink: "https://github.com/Yashwanth-raju005/React-Shopping-Site",
  },
  {
    projectName: "Eat & Split Bill",
    projectImage: EatnSplit,
    projectDescription:
      "Quickly split bills among friends with clean UI and logic.",
    githubLink: "https://github.com/Yashwanth-raju005/Bill-Splitter",
  },
];

const Project = () => {
  return (
    <section className="project section" id="projects">
      <h2 className="pro-head">Projects</h2>
      <p className="pro-sub">Selected Work</p>

      <div className="project-list">
        {details.map((pro) => (
          <Cards key={pro.projectName} pro={pro} />
        ))}
      </div>
    </section>
  );
};

export default Project;
