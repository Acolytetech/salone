import React from 'react';
import avator from '../../img/avator.png'
import { CiCalendar } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card">
      <img src={avator} alt={doctor.name} className="doctor-avatar" />
      <div className="doctor-details">
        <h2>{doctor.name}</h2>
        <p className="doctor-specialization">{doctor.specialization}</p>
        <p className="doctor-qualification">{doctor.qualification}</p>
        <p className="doctor-hospital">{doctor.hospital}</p>
        <p className="doctor-availability">
          Availability: {doctor.availability}
        </p>
      </div>
      <div className="doctor-actions">
        <span>
        <button className="book-button"><CiCalendar className='icon' />
        <span> Book Visit</span></button>

        </span>
      <span>
      <button className="call-button"><IoVideocamOutline className='icon' /><span>Make a Call</span></button>

      </span>
      </div>
    </div>
  );
};

export default DoctorCard;
