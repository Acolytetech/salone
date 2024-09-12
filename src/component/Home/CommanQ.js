import React, { useState } from 'react';
import './CommanQ.css'; // Import your CSS file
 
function CommanQ() {
  // State to track which question is active
  const [activeIndex, setActiveIndex] = useState(null);
 
  // Toggle function for showing answers and switching the icon
  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if the same question is clicked again
    } else {
      setActiveIndex(index); // Open the selected question
    }
  };
 
  const questions = [
    { question: "What causes premature birth?", answer: "Premature birth can be caused by various factors like infections, high blood pressure, or stress." },
    { question: "What is respiratory distress syndrome?", answer: "Respiratory distress syndrome (RDS) is a condition that affects premature newborns due to underdeveloped lungs." },
    { question: "What are 'AB spells'?", answer: "'AB spells' refer to episodes of apnea (pauses in breathing) and bradycardia (slow heart rate) in infants." },
    { question: "What is family-centered care?", answer: "Family-centered care emphasizes collaboration between healthcare providers and families in the care process." }
  ];
 
  return (
    <>
      <div className="commanq-container">
      <div className="bt_bb_image bt_bb_shape_hard-rounded bt_bb_target_self bt_bb_hover_style_simple bt_bb_content_display_always bt_bb_content_align_middle bt_bb_align_inherit">
        <span>
          <img
            loading="lazy"
            decoding="async"
            width="580"
            height="620"
            src="https://cliniq.bold-themes.com/curves/wp-content/uploads/sites/4/2021/10/home_03_image_02.png"
            alt="Neonatal Care"
            className="commanq-image"
          />
        </span>
      </div>
 
      <div className="commanq-content">
        <h1>Common <span className='commanq-span'>Questions</span></h1>
        <div className="questions">
          {questions.map((item, index) => (
            <div key={index} className="question-container">
              <div className="question" onClick={() => toggleAnswer(index)}>
                <p>{item.question}</p>
                <span className="plus">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  
  );
}
 
export default CommanQ;
 