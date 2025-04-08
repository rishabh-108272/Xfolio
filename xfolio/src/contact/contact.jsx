import React from "react";
import Navbar from '../navbar/navbar';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Mail from "../images/mail.png"
import Phone from "../images/phone.png"
import './contact.css'
import Footer from './../footer/footer';
export default function Contact(){
    return(
        <div className="container">
            <Navbar/>
            <div className="contact">
            <h1><span className='des3'>Get in touch</span></h1>
            <p style={{color:"white"}}>Have a project in mind? Looking to partner or work <br/> together? Reach out through the form and I'll get <br/> back to you in next 48 hours.</p>
            
            <div className="details1">
            <img src={Mail} alt="mail" id="mail" /> <p style={{color:"white"}}>rishabhverma3648@gmail.com</p>
            </div>
             <div className="details2">
             <img src={Phone} alt="phone" id="phone"/> <p style={{color:"white"}}>+91-6290253034</p>
             </div>
             </div>
             {/* FORM STARTS HERE */}
        <form className="custom-form mt-4">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" className="form-control input-dark" />

          <label className="mt-3">Your E-mail</label>
          <input type="email" placeholder="Enter your e-mail" className="form-control input-dark" />

          <label className="mt-3">Tell me a bit more what you are looking for?</label>
          <textarea rows="4" className="form-control input-dark" placeholder="Your message here..."></textarea>

          <button className="submit-button mt-4" type="submit">SUBMIT NOW</button>
        </form>
        <Footer/>
    </div>
    )
}