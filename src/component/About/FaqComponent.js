import React, { useState } from 'react';
import './FaqComponent.css';

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: ' How does the hospitals virtual consultation service eliminate geographical barriers for patients?',
      answer: 'The hospitals virtual consultation service allows patients to connect with healthcare providers from anywhere, regardless of their location. This service is accessible online, enabling patients from remote or underserved areas to receive medical advice and treatment without the need for travel.',
    },
    {
      question: 'How do virtual consultations reduce wait times for patients?',
      answer: ' Patients can schedule and attend appointments online, which streamlines the process and significantly reduces the time spent waiting for an in-person visit. The convenience of choosing an available time slot and attending the appointment from home or work helps minimize delays.',
    },
    {
      question: 'What cost advantages do patients gain from using the hospital virtual consultation platform?',
      answer:  'The platform offers affordable consultation fees compared to traditional in-person visits. Additionally, it eliminates travel expenses and the costs associated with hospital admissions, making healthcare more accessible and cost-effective for patients.',
    },
    {
      question: 'What options are available for patients in urgent situations through the virtual consultation service?',
      answer: ' In urgent situations, patients can quickly connect with doctors via video calls for immediate advice and initial treatment. This feature allows for prompt medical intervention, helping patients manage emergencies effectively until further care is provided if needed.',
    },
    {
      question: 'How does the hospital ensure consistent monitoring of patients health through its virtual platform?',
      answer: ' Patients can easily schedule follow-up consultations online, which ensures that their health is consistently monitored. The convenience of virtual follow-ups helps maintain regular contact with healthcare providers, allowing for ongoing care and timely adjustments to treatment plans.',
    },
  ];

  return (
    <div className="faq-container">
      <span className="faq-span">Top FAQs</span>
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleQuestion(index)}>
            <span className="faq-question-text">{faq.question}</span>
            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
