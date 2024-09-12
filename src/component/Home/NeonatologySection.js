import React from 'react';
import './NeonatologySection.css';
import home3 from '../../img/Neonatology banner img.png';
import heart from '../../img/icons/heart-rate.png'
import stra from '../../img/icons/strategic.png'
import fav from '../../img/icons/favorite.png'
import stha from '../../img/icons/stethoscope (1).png'


const NeonatologySection = () => {
  return (
    <div className="neonatology-section">
      <div className="image-section">
        <img src={home3} alt="Neonatal Care" />
      </div>
      <div className="text-section">
        <h1 className="title">
          Why <span>Choose</span> us ?
        </h1>

        <div className="flex-container1">
          <div className="flex-item">
            <img src={heart} alt="Heart Rate" />
            <h3>Values</h3>
            <p>A community in which all their full for health and the lifespan use a team the runway health care.</p>
          </div>
          <div className="flex-item">
            <img src={stra} />
            <h3>Approach</h3>
            <p>
              Provide patient-centered with excellence in quality, service, and a the best way a deep dive on the person’s health.
            </p>
          </div>
          <div className="flex-item">
            <img src={heart} alt="Heart Rate" />
            <h3>Values</h3>
            <p>A community in which all their full for health and the lifespan use a team the runway health care.</p>
          </div>
        
        </div>
        <div className="flex-container1">
          <div className="flex-item">
            <img src={heart} alt="Heart Rate" />
            <h3>Values</h3>
            <p>A community in which all their full for health and the lifespan use a team the runway health care.</p>
          </div>
          <div className="flex-item">
            <img src={stra} />
            <h3>Approach</h3>
            <p>
              Provide patient-centered with excellence in quality, service, and a the best way a deep dive on the person’s health.
            </p>
          </div>
          <div className="flex-item">
            <img src={heart} alt="Heart Rate" />
            <h3>Values</h3>
            <p>A community in which all their full for health and the lifespan use a team the runway health care.</p>
          </div>
        
        </div>



      </div>
    </div>
  );
};

export default NeonatologySection;
