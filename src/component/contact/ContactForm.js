import React from 'react';
import './ContactForm.css';
import { FaMapMarkerAlt, FaClock, FaShareAlt } from 'react-icons/fa';

function ContactForm() {
  return (
    <div className="contact-container">
      <div className="left-section">
        <h1>Comprehensive <span className="highlight">Neonatal</span> Care</h1>
        <p>Delivering world-class neonatology care</p>
        
        <div className="info-row">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <h2>Location </h2>
            <p>New York<br />60 East 65th Street<br />NY 10065</p>
        
          </div>
          
          <div className="info-item">
            <FaClock className="icon" />
            <h2>Hours</h2>
            <p>Mon-Wed: 8am – 7pm<br />Thursday: 8am – 9pm<br />Friday: 8am – 5pm</p>
          </div>  
          
          <div className="info-item">
            <FaShareAlt className="icon" />
            <h2>Social</h2>
            <p>Share</p>
          </div>
        </div>
        
        <div className="flex-container">
          <div className="flex-item">
            <p>Support Line 24/7 <br/>
            <span className="bold-text">88 700 600</span>
            </p>
          </div>
          <div className="line"></div>
          <div className="flex-item">
            <p>Online Schedule <br/>
            <a href="#" className="bold-text">Book here</a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="right-section">
        <h2>Send us a message</h2>
        <p>Required fields are marked with an asterisk (*).</p>
        <form>
          <label htmlFor="name">First and Last name*</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />

          <label htmlFor="email">Email address*</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />

          <label htmlFor="condition">Condition*</label>
          <input type="text" id="condition" name="condition" placeholder="Clinical Depression" required />

          <label htmlFor="notes">Additional notes</label>
          <textarea id="notes" name="notes" placeholder="Additional notes"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
