/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import Qualification from "./Components/Qualification/Qualification";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Project />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default App;
