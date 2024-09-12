import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookAppointment.css';
import g from '../../img/png/general-physician.svg';
import Pediatrician from '../../img/png/child-infant.svg';
import Dentist from '../../img/png/dentistry.svg';
import Cardiologist from '../../img/png/cardiac.svg';
import ent from '../../img/png/ent.svg';
import women from '../../img/png/women-issues.svg';
import skin from '../../img/png/skin-probs.svg';
 
const BookAppointment = () => {
    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    const navigate = useNavigate();
 
    const specialties = [
        { id: 1, name: 'General Physician', image: g },
        { id: 2, name: 'Pediatrician', image: Pediatrician },
        { id: 3, name: 'Dentist', image: Dentist },
        { id: 4, name: 'Cardiologist', image: Cardiologist },
        { id: 5, name: 'Ent', image: ent },
        { id: 6, name: 'Women-issues', image: women },
        { id: 7, name: 'Skin-Problem', image: skin },
    ];
 
    const handleSpecialityClick = (id) => {
        setSelectedSpeciality(id);
    };
 
    const handleConfirmClick = () => {
        if (selectedSpeciality) {
            const selected = specialties.find(spec => spec.id === selectedSpeciality);
            navigate('/doctors', { state: { selectedSpeciality: selected } });
        } else {
            alert('Please select a specialty!');
        }
    };
 
    return (
        <div className="book-appointment-container">
            <h2>Choose Speciality</h2>
            <div className="speciality-grid">
                {specialties.map(speciality => (
                    <div
                        key={speciality.id}
                        className={`speciality-card ${selectedSpeciality === speciality.id ? 'selected' : ''}`}
                        onClick={() => handleSpecialityClick(speciality.id)}
                    >
                        {selectedSpeciality === speciality.id && (
                            <div className="checkbox">
                                <input type="checkbox" checked readOnly />
                            </div>
                        )}
                        <img src={speciality.image} alt={speciality.name} />
                        <p>{speciality.name}</p>
                    </div>
                ))}
            </div>
            <button className="confirm-button" onClick={handleConfirmClick}>Confirm →</button>
        </div>
    );
};
 
export default BookAppointment;