import React from 'react';
import './CommanQ.css'; // Import your CSS file

function CommanQ() {
  return (
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
        <h1>Common <span className='commanq-span'> Questions </span></h1>
        <div className="questions">
          <div className="question">
            <p>What causes premature birth?</p>
            <span className="plus">+</span>
          </div>
          <div className="question">
            <p>What is respiratory distress syndrome?</p>
            <span className="plus">+</span>
          </div>
          <div className="question">
            <p>What are "AB spells"?</p>
            <span className="plus">+</span>
          </div>
          <div className="question">
            <p>What is family-centered care?</p>
            <span className="plus">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommanQ;
