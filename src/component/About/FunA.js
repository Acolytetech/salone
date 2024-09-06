import React from 'react';
import './FunA.css'; // Ensure to create and use this CSS file

function FunA() {
  return (
    <div className="funA-container">
      <div className="funA-text">
        <h1>Great Place of Medical Hospital Center</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words.</p>
      </div>
      <div className="funA-cards">
      <div className='funA-card-1'>
      <div className="funA-card">Card 1</div>
      <div className="funA-card">Card 2</div>
      </div>
      <div className='funA-card-2'>
      <div className="funA-card">Card 3</div>
      <div className="funA-card">Card 4</div>
      </div>
       
      </div>
    </div>
  );
}

export default FunA;
