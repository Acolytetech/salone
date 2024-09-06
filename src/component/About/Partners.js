import React, { useState, useEffect } from 'react';
import './Partners.css'; 
import partner1 from '../../img/inner_team_06.jpg';
import partner2 from '../../img/inner_team_08.jpg';

function Partners() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [partner1, partner2]; // Array of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="partners-container">
      <div className="carousel">
        <img src={images[currentImage]} alt="carousel" />
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)} // Allow clicking on dots to change image
            ></span>
          ))}
        </div>
      </div>
      <div className="text-content">
        <h1>Meet Our Licensed Providers</h1>
        <p>Our providers are qualified to help with many behavioral health needs, including:</p>
        <div className="partners-list">
          <ul>
            <li>Depression</li>
            <li>Trauma & PTSD</li>
            <li>Anxiety & Stress</li>
          </ul>
          <ul>
            <li>Panic Disorders</li>
            <li>Addictions</li>
            <li>Relationships</li>
          </ul>
          <ul>
            <li>Alcohol</li>
            <li>Work</li>
            <li>Family</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
