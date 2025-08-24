import React from 'react';
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <p className="copyright">&copy; Rishabh Verma</p>
      </div>
    </footer>
  );
}