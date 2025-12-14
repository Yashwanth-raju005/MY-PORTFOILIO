/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        {/* LOGO (DESKTOP ONLY) */}
        <a href="#home" className="nav__logo">
          Yashwanth<span>.</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="nav__menu desktop-menu">
          <ul className="nav__list">
            <li><a href="#home" className="nav__link">Home</a></li>
            <li><a href="#about" className="nav__link">About</a></li>
            <li><a href="#skills" className="nav__link">Skills</a></li>
            <li><a href="#projects" className="nav__link">Projects</a></li>
            <li><a href="#qualification" className="nav__link">Qualification</a></li>
            <li><a href="#contact" className="nav__link contact-btn">Contact</a></li>
          </ul>
        </div>

        {/* MOBILE BOTTOM NAV */}
        <div className="mobile-nav">
          <a href="#home" className="mobile-nav__item">
            <i className="uil uil-estate"></i>
            <span>Home</span>
          </a>
          <a href="#about" className="mobile-nav__item">
            <i className="uil uil-user"></i>
            <span>About</span>
          </a>
          <a href="#skills" className="mobile-nav__item">
            <i className="uil uil-file-alt"></i>
            <span>Skills</span>
          </a>
          <a href="#projects" className="mobile-nav__item">
            <i className="uil uil-scenery"></i>
            <span>Projects</span>
          </a>
          <a href="#contact" className="mobile-nav__item active">
            <i className="uil uil-message"></i>
            <span>Contact</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
