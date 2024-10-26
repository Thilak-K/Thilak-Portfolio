import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="custom-header">
      <div className="container-nav">
        
        {/* Left section - Name and navigation links */}
        <div className="left-section">
          <div className="title-font">
            <Link to="/profile" className="profile-nav">
              K Thilak Raj
            </Link>
          </div>
          
          <nav className={`nav ${isOpen ? "open" : ""}`}>
            <Link to="#home" className="nav-a">
              Home
            </Link>
            <Link to="#experience" className="nav-a">
              Experience
            </Link>
            <Link to="#skills" className="nav-a">
              Skills
            </Link>
            <Link to="#project" className="nav-a">
              Projects
            </Link>
            <Link to="#contact" className="nav-a">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right section - Social media and Hire Me link */}
        <div className="right-section">
          <a
            href="https://www.linkedin.com/in/thilakraj-k/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-nav"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={25} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Thilak-K"
            target="_blank"
            rel="noopener noreferrer"
            className="github-nav"
            aria-label="GitHub Profile"
          >
            <FaGithub size={25} />
            <span>Github</span>
          </a>
          <Link to="/hireMe" className="hireme-nav">
            Hire Me
            <ArrowRightIcon className="arrow-icon" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
