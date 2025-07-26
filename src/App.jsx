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
import HeroBgAnimation from "./Components/HeroBg/HeroBgAnimation"; // ✅ Correct relative path
import HeroBgAnimation2 from "./Components/HeroBg/HeroBgAnimation2";

function App() {
  return (
    <>
      {/* Animated background layer */}

      {/* Foreground content */}
      <Header />

      <main className="main">
      <HeroBgAnimation />
      
        <Home />
        <About />
        <Skills />
        <Project />
        <HeroBgAnimation2/>
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default App;
