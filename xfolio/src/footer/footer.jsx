import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    // Use a semantic <footer> tag
    <footer className="footer-container">
      <div className="line"></div>
      
      {/* This div will be our flex container */}
      <div className="footer-content">
        <p className='logo'>XFOLIO.</p>
        
        <ul className="footer-links">
         <Link to="/home"><li>Home</li></Link> 
         <Link to="/about"><li>About</li></Link> 
         <Link to="/contact"><li>Contact</li></Link> 
        </ul>

        <p className="copyright">&copy; Rishabh Verma</p>
      </div>
    </footer>
  );
}