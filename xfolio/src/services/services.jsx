import React from 'react';
import Image1 from '../images/image1.png'
import Image2 from '../images/image2.png'
import Image3 from '../images/image3.png'

import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './services.css';


export default function Services(){
    return(
        <div className="container">
            <div className="services">
            <h1>My <span className='des'>Services</span></h1>
             <br/>
             <br/>
             <br/>
             <h2>Web Design</h2>
             <br/>
             <p>Lorem ipsum dolor cortica ipsum dolor lartus concertus ipsum de <br/> 
             lorem lartus cortus surtus dorem lupsum nulla de marius de at <br/>
             ulam carpur ac lorem ipsum.
             </p>
             <br/>
             <div className="bttn">HIRE ME</div>
             <img src={Image1} alt="img-1" id="img-1" width="300px" height="300px"/>
             <br/>
             <img src={Image2} alt="img-2" id="img-2" width="300px" height="300px" />
             <div className="gd">
             <h2 >Graphic Design</h2>
             <br/>
             <p>Lorem ipsum dolor cortica ipsum dolor lartus concertus ipsum de <br/> 
             lorem lartus cortus surtus dorem lupsum nulla de marius de at <br/>
             ulam carpur ac lorem ipsum.
             </p>
             <div className="bttn">HIRE ME</div>
             </div>
            <br/>
            <div className="ui">
            <h2>UI/UX Design</h2>
            <br/>
            <p>Lorem ipsum dolor cortica ipsum dolor lartus concertus ipsum de <br/> 
             lorem lartus cortus surtus dorem lupsum nulla de marius de at <br/>
             ulam carpur ac lorem ipsum.</p>
             <div className="bttn">HIRE ME</div>
            </div>
           
            <img src={Image3} alt="img-3" id="img-3" width="300px" height="300px"/>
            </div>
            <br/>
            <br/>
           
        </div>
    )
}