import React from 'react';
import './About.css';


import visionImg from '../../img/SM891296.png';

import WorkingA from './WorkingA';
import FaqComponent from './FaqComponent';
import MissionVisionIcon from '../svg/MissionVisionIcon';
import Mission from '../svg/Mission';
import { IoCallOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa6";
// import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
    return (
        <>
            {/* Hero Image Section */}
            <div className="about-us-container aboutusbanner">
                {/* <img
                    src={hero}
                    alt="Hero"
                    className="background-image"
                /> */}
                <div className="overlay-text">
                    <h1>Your wellbeing is our priority</h1>
                    <p>Sloane Virtual Hospital delivers comprehensive online healthcare, offering video consultations, digital prescriptions, medication delivery, and diagnostic services, all supported by a strong network of medical professionals.</p>
                    <div className="flex-container">
                        {/* <div className="flex-item"> */}
                        <a href='/' className='support'>
                            <p>Support Line 24/7 <br />
                                <span>  <IoCallOutline className='icons' />887 006 0000</span>
                            </p>
                        </a>


                        {/* </div> */}
                        <div className="line"></div>
                        {/* <div className="flex-item"> */}
                        <a href='/' className='onlineshedule'>
                            <p>Online Schedule <br />
                                <span><FaRegCalendarCheck className='icons' />  Book here</span>
                            </p>
                        </a>
                        {/* </div> */}
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1725628279">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </div>

            {/* Vision Section */}
            {/* <Wave /> */}
            <div className="vision-section">
                <div className="vision-image">
                    <img src={visionImg} alt="Vision" />
                </div>
                <div className="vision-text">
                    <h2>
                        Welcome to Sloane Virtual Hospital, where innovative online healthcare meets convenience and care.
                    </h2>
                    <h3>
                        <Mission /> Our Mission
                    </h3>
                    <p>To revolutionize the healthcare industry by transitioning traditional physical healthcare services to a comprehensive online platform, ensuring that quality medical care is accessible to everyone from the comfort of their homes.</p>
                    <h3>
                        <MissionVisionIcon /> Our Vision
                    </h3>
                    <p>To simplify the patient journey by offering a seamless, virtual healthcare experience that encompasses diagnosis, prescription, medication delivery, and follow-up consultations. Our mission is to eliminate the barriers to healthcare access, reduce patient inconvenience, and provide timely medical interventions.</p>
                </div>
            </div>

            {/* ServiceA Component */}
            {/* <ServiceA/> */}
            {/* <FunA/> */}
            {/* <Partners/> */}
            <WorkingA />
            <FaqComponent />
        </>
    );
};

export default About;