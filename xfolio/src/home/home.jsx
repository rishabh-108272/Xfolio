import React from 'react';
import Image from '../images/Profile_1.jpg';
import {Link} from "react-router-dom";
import Project from '../Projects/projects';
import About from "../about/about"
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './home.css';

export default function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <div className="text-content">
                        <h1 className="hero-title">
                            <span className="gradient-text">Hello, I'm Rishabh Verma</span>
                            <br />
                            ML Engineer
                            <br />
                            based in India.
                        </h1>
                        
                        <p className="hero-description">
                            AIML Engineer and Web Developer in India. I specialize in Machine Learning,
                            deep learning, NLP and front-end development.
                        </p>
                        
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn-primary">
                                GET IN TOUCH
                            </Link>
                            <Link to="/projects" className="btn-secondary">
                                VIEW ALL WORKS
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hero-image">
                        <img 
                            src={Image} 
                            alt="Profile" 
                            className="profile-img"
                        />
                    </div>
                </div>
            </div>
            
            <Project />
            <About />
        </div>

       
    );
}