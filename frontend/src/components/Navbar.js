import React from "react";
import { Link } from "react-scroll";
import "./navbar.css"; // Add styling for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="Home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
