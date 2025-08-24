import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./navbar.css";

export default function Navbar() {
  
  const [isNavOpen, setIsNavOpen] = useState(false);

  
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/home" className="logo-link">
          <span className="logo">XFOLIO.</span>
        </Link>

        
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        
        <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
          <Link to="/home" className="nav-item" onClick={toggleNav}>
            <li>Home</li>
          </Link>
          <Link to="/projects" className="nav-item" onClick={toggleNav}>
            <li>Projects</li>
          </Link>
          <Link to="/about" className="nav-item" onClick={toggleNav}>
            <li>About</li>
          </Link>
          <Link to="/blog" className="nav-item" onClick={toggleNav}>
            <li>Blog</li>
          </Link>
          <li className="talk-button-li">
            <Link to="/contact" onClick={toggleNav}>
              <button>LET'S TALK</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}