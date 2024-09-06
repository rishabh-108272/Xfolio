import React from "react";
import Home from '../home/home';
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
        <li>Services</li>
        <li>Projects</li>
        <li>About</li>
        <li>Blog</li>
        <li><button>LET'S TALK</button></li>
      </ul>
      </div>
      <Home /> 
    </div>
    )
}