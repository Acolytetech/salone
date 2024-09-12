import React from 'react';
import './Footer.css'; // Ensure your styles are in Footer.css
// import styles from './Fonts.module.css';
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import logo from '../../img/Sloane Virtual Hospital logo transparent 1.png';
import { CiCalendar } from "react-icons/ci";



const Footer = () => {
    return (

        <>
            <footer className="bt-site-footer-main">
            <div class="custom-shape-divider-top-1726048354">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
    </svg>
</div>

<div className="button-container">
      <span className="button-text">Newborn screening Tests</span>
      <button className="book-test-btn">
        {/* <img src={calendarIcon} alt="Calendar Icon" className="icon" /> */}
       
        <CiCalendar   className="icon"/>
        Book screening test
      </button>
    </div>

            </footer>


            <footer className="bt-site-footer">





                <section id="footer-section" className="footer-section">

                    <div className="footer-content">
                        <div className="footer-logo">
                            <img
                                loading="lazy"
                                decoding="async"
                                width="230"
                                height="60"
                                src={logo}
                                alt="Logo Footer"
                            />
                            <p>We bring the years, global experience, and stamina to guide our clients through new and often disruptive realities.</p>
                        </div>

                        <div className="footer-menu">
                            <div className="footer-menu-section">
                                <h6>Services</h6>
                                <ul>
                                    <li><a href="https://cliniq.bold-themes.com/curves/home/home-05/">Business Planning</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/about/" aria-current="page">Feasibility Study</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/blog/">Startup Funding</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/shop/">Business Plan Review</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/about/contact/">Investor Presentation</a></li>
                                </ul>
                            </div>

                            <div className="footer-menu-section">
                                <h6>Pricing & Fees</h6>
                                <ul>
                                    <li><a href="https://cliniq.bold-themes.com/curves/shop/">Compare Insurance Plans</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/shop/">Standard Plan – $499</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/shop/">Plus Plan – $799</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/shop/">Premium Plan – $999</a></li>
                                    <li><a href="https://cliniq.bold-themes.com/curves/shop/">Pro Plan – $1399</a></li>
                                </ul>
                            </div>

                            <div className="footer-menu-section">
                                <h6>Connect</h6>
                                <div className="footer-social-links">
                                    <a href="https://www.facebook.com/boldthemes/" target="_blank" rel="noopener noreferrer" className="social-icon facebook-icon"
                                    >
                                        <CiFacebook className='icon-size' /></a>
                                    <a href="https://twitter.com/bold_themes" target="_blank" rel="noopener noreferrer" className="social-icon twitter-icon">
                                        <BsTwitterX className='icon-size' /> </a>
                                    <a href="https://www.instagram.com/bold_themes/" target="_blank" rel="noopener noreferrer" className="social-icon instagram-icon">
                                        <IoLogoInstagram className='icon-size' /></a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin-icon">
                                        <TiSocialLinkedinCircular className='icon-size' /></a>
                                </div>
                                <div className="contact-info">
                                    <p>1-800-1-900</p>
                                    <p>info@cliniq.com</p>
                                    <p>60 East 65th Street, New York</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>



                <div className="footer-bottom">

                    <div className="footer-policy-links">
                        <div> ©2021 CLINIQ. All rights reserved </div>
                            <div className='privacylink'>
                                <span >
                                    <a href="/privacypolice">Privacy Policy</a>
                                    <a href="https://cliniq.bold-themes.com/curves/about/">Cookie Policy</a>
                                </span>
                            </div>





                        </div>
                    </div>
         

            </footer>

        </>
    );
}

export default Footer;
