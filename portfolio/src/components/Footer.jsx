import React from "react";
import myLogo from '../assest/mz-f-w.png';
import gitLogo from '../assest/GitHub_Logo.png';
import linkedinLogo from '../assest/LI-Logo.png';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="left-logo">
                <img src={myLogo} alt="My-Logo"/>
            </div>

            <div className="right-logo">
                <img src={gitLogo} alt="Git-Logo"/>
                <img src={linkedinLogo} alt="Linkedin-Logo"></img>
            </div>
        </div>
    )
}

export default Footer;