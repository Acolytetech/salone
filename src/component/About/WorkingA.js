import React from 'react';
import './WorkingA.css'; // Import the custom CSS
import Aerodown from '../svg/Aerodown'; // Import the Aerodown SVG component
import AerodUp from '../svg/AeroUp';
import one from '../../img/Image-9 (2).png'
import two from '../../img/filling-medical-history-1 (2).png'
import three from '../../img/successful-medical-team-2-2 (2).png'
 
function WorkingA() {
  // Sample data for each card
  const cardData = [
    {
      imageSrc: one,
      heading: 'Select Expert Doctor',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
    {
      imageSrc: two,
      heading: 'Make Appointment',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
    {
      imageSrc: three,
      heading: 'Get Consultation',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
    {
      imageSrc: two,
      heading: 'Get Care & Relief',
      text: 'There are many variations of passage of available, but the majority have suffered.',
    },
  ];
 
  return (
    <div className="workingA-container">
      <span className="custom-span">How Does It Work?</span>
      <h2 className="custom-heading">Our Working Process</h2>
 
      <div className="card-container">
        {cardData.map((card, index) => (
          <React.Fragment key={index}>
            <div className="custom-card">
              <div className="card-image">
                <img src={card.imageSrc} alt={`Card ${index + 1}`} />
              </div>
              <h3 className="card-heading">{card.heading}</h3>
              <p className="card-text">{card.text}</p>
            </div>
            {/* Conditionally render Aerodown and AerodUp alternately based on screen size */}
            {index < cardData.length - 1 && (
              <>
                {/* Show arrows only on desktop screens */}
                <div className="arrow-container">
                  {index % 2 === 0 ? <Aerodown className="aerodown" /> : <AerodUp className="aeroup" />}
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
 
export default WorkingA;