import React from 'react';
import Image from '../images/photo-1716396484354-e90091645e0b.avif';
import Project from '../Projects/projects';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './home.css';

export default function Home(){
    return (
        <div className="container">
           <div className="home">
          <h1 className='des-1'><prev><span className='des'>Hello, I'm, Rishabh Verma</span><br/>
          ML Engineer <br/> based in India.</prev></h1>
          <br/>
          <p style={{color:"white"}}>AIML Engineer and Web Developer in India.I specialize in Machine Learning,<br/>
             deep learning and front-end development.</p>
         <br/>

         <div className="sp">
         <div className='git'>
         <a href="https://www.linkedin.com/in/rishabh-verma-875214247" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", color:"#f0f2f5"}}>
          GET IN TOUCH
          </a>
          </div>
         
         <div className='vaw'>VIEW ALL WORKS</div>
         <img  src={Image} alt='profile' width="500px" height="500px"/>
       </div>

         </div>
       
       {/* <Services /> */}
       <Project />
        </div>

       
    );
}