import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <nav>
    <a href="#about">About Me</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="./images/Resume.pdf" download className="floating-resume">📄</a>
    <a href="#connect">Connect</a>
    <a href="#contact">Contact</a>
  </nav>
);

export default NavBar;
