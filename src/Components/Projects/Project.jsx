/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import Ecom from "../../assets/E-com.jpg";
import EatnSplit from "../../assets/eat&split.jpg";
import Employee from "../../assets/employee.jpg";
import Gemini from "../../assets/Gemini.jpg";
import Movie from "../../assets/Movie.jpg";
import Recipe from "../../assets/Recipe.jpg";
import Cards from "./Cards";
import "./Project.css";

export const details = [
  {
    projectName: "Google Gemini(Clone)",
    projectImage: Gemini,
    projectDescription:
      "A responsive and dynamic trading platform built with React, featuring real-time updates, efficient state management, and sleek design, replicating Gemini's functionality seamlessly.",
    githubLink: "https://github.com/Yashwanth-raju005/Google-Gemini-Clone",
  },
  {
    projectName: "Employee-Task-Manager",
    projectImage: Employee,
    projectDescription:
      "A task management system with Admin and Employee dashboards. Admins can assign tasks, track progress, and view reports, while employees can manage and update their assigned tasks in real time. Built for efficient task tracking and collaboration.",
    githubLink: "https://github.com/Yashwanth-raju005/Employee-Task-Assigner",
  },
  {
    projectName: "Movie-App",
    projectImage: Movie,
    projectDescription:
      "A sleek app to search for movies, view detailed information (cast, ratings, synopsis), and save favorites to a Watch Later list for easy access. Perfect for movie enthusiasts!",
    githubLink: "https://github.com/Yashwanth-raju005/POPCORN-MOVIE-APP",
  },
  {
    projectName: "E-Commerce Site",
    projectImage: Ecom,
    projectDescription:
      "A user-friendly platform featuring a wide range of products like mobiles, laptops, ACs, and furniture. Includes search functionality, detailed product views, and an (Add to Cart) option for seamless shopping.",
    githubLink: "https://github.com/Yashwanth-raju005/React-Shopping-Site",
  },
  {
    projectName: "Eat & Split Bill",
    projectImage: EatnSplit,
    projectDescription:
      "A simple app to calculate and split bills among friends after a meal. Enter the total amount, number of people, and it divides the cost evenly for hassle-free bill splitting! ",
    githubLink: "https://github.com/Yashwanth-raju005/Bill-Splitter",
  },
  {
    projectName: "Recipe Finder",
    projectImage: Recipe,
    projectDescription:
      "An app that suggests recipes based on your preferences or dietary restrictions. Browse through a variety of dishes, save your favorites, and get inspired to try new meals with ease!",
    githubLink: "https://github.com/Yashwanth-raju005/Simple-Recipe-App",
  },
];

const Project = () => {
  return (
    <>
      <div className="project section" id="projects">
        <center>
          <div className="project-head">
            <h2 className="pro-head">Projects</h2>
            <p>Built Items</p>
          </div>
        </center>

        <div className="main-card">
          {details.map((pro) => {
            return <Cards pro={pro} key={pro.projectName} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
