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
import Zerodha from "../../assets/Zerodha.png";
import "./Project.css";

export const details = [
  {
    projectName: "Zerodha Clone",
    projectImage: Zerodha,
    projectDescription:
      "I developed a full-stack Zerodha clone featuring a secure login system, a modern and responsive user dashboard, and real-time stock data integration using market APIs. The platform includes dynamic, interactive stock charts (line and candlestick) powered by Chart.js or TradingView, allowing users to track live market trends. Additional features include a stock search, personalized watchlist, and simulated portfolio tracking. Built with React, Node.js, Express, and MongoDB, the app offers a seamless and intuitive stock trading experience.",
    githubLink: "https://github.com/Yashwanth-raju005/Zerodha_Clone",
  },
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
