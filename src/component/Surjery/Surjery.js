import React, { useState } from "react";
import  "./Surgery.css";
import surgery from '../../img/surgery.png'
import { IoSearchCircleSharp } from "react-icons/io5";

 
const Surgery = () => {
  const [searchTerm, setSearchTerm] = useState("");
 
  const surgeries = [
    "Cataract",
    "Gall Bladder Stones",
    "Varicose Veins",
    "Carpal Tunnel Syndrome",
    "Vaginal Cyst/Bartholin Cyst",
  ];
 
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
 
  const filteredSurgeries = surgeries.filter(surgery =>
    surgery.toLowerCase().includes(searchTerm)
  );
 
  return (
    <div className="surgery-container">
      <div className="search-bar">
      <IoSearchCircleSharp className="surgery-research-icon" />
        <input
          type="text"
          placeholder="Search for surgeries"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
 
      <div className="surgery-content">
        <div className="surgeries-list">
          <h2 className="surgery-heading">Popular Surgeries</h2>
          {filteredSurgeries.length > 0 ? (
            <ul>
              {filteredSurgeries.map((surgery, index) => (
                <li key={index} className="surgery-item">
                  <span>{surgery}</span>
                  <button className="submit-button">Submit request</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-results-message">This service is coming soon.</p>
          )}
        </div>
 
        <div className="surgery-image">
          <img
            src={surgery}
            alt="Surgery Illustration"
          />
        </div>
      </div>
    </div>
  );
};
 
export default Surgery;