import React, { useState } from "react";
import Mail from "../images/mail.png";
import Phone from "../images/phone.png";
import './contact.css';

export default function Contact() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to manage the submitting status
  const [submitting, setSubmitting] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitting(true);

    
    const API_URL = 'https://sheetdb.io/api/v1/ya8ppzt0a2usf';

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // Add a timestamp and send the form data
        body: JSON.stringify({
            data: {
                ...formData,
                timestamp: new Date().toLocaleString()
            }
        })
    })
    .then((response) => response.json())
    .then((data) => {
      alert("Success! Your message has been sent.");
      // Reset the form
      setFormData({ name: '', email: '', message: '' });
      setSubmitting(false);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert("Error: Something went wrong. Please try again.");
      setSubmitting(false);
    });
  };

  return (
    <div className="contact-page-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h1><span className='des3'>Get in touch</span></h1>
          <p>Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
          <div className="details">
            <img src={Mail} alt="mail" className="contact-icon" /> 
            <p>rishabhverma3648@gmail.com</p>
          </div>
          <div className="details">
            <img src={Phone} alt="phone" className="contact-icon" /> 
            <p>+91-6290253034</p>
          </div>
        </div>

        {/* --- Updated Form --- */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input 
            type="text" 
            name="name" // MUST match Google Sheet header
            placeholder="Enter your name" 
            className="form-control input-dark" 
            value={formData.name}
            onChange={handleChange}
            required 
          />

          <label>Your E-mail</label>
          <input 
            type="email" 
            name="email" // MUST match Google Sheet header
            placeholder="Enter your e-mail" 
            className="form-control input-dark" 
            value={formData.email}
            onChange={handleChange}
            required 
          />

          <label>Tell me a bit more what you are looking for?</label>
          <textarea 
            rows="4" 
            name="message" // MUST match Google Sheet header
            className="form-control input-dark" 
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="submit-button" type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'SUBMIT NOW'}
          </button>
        </form>
      </div>
    </div>
  );
}