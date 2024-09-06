import React from 'react';
import Image from '../images/photo-1716396484354-e90091645e0b.avif';
import Services from '../services/services';
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
          <p>A full stack developer and ML Engineer in India.I specialize in supervised ML,<br/>
             deep learning and full stack development.</p>
         <br/>
         <div className='git'>GET IN TOUCH</div><div className='vaw'>VIEW ALL WORKS</div>
         <img  src={Image} alt='profile' width="500px" height="500px"/>
       </div>
       <Services />
        </div>

       
    );
}