import React from "react";
// import Home from '../home/home';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import {Dropdown, DropdownButton, ButtonGroup} from "bootstrap-react"
import './navbar.css';

export default function Navbar(){
    return(
      
    <div className="navbar">
      <div className="container-fluid">
      <ul>
        <li className="logo">XFOLIO.</li>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Blog</li>
        <li><button>
        <a href="https:/" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#2e2d2c"}}>
          LET'S TALK
        </a>
          </button></li>
    
      </ul>
      </div>
      {/* <Home />  */}
    </div>
    )
}