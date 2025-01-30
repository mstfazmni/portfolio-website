import React from "react";
import myLogo from '../asset/mz-f-w.png';
import gitLogo from '../asset/GitHub_Logo.png';
import linkedinLogo from '../asset/LI-Logo.png';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="left-logo">
                <img src={myLogo} alt="My-Logo"/>
            </div>

            <div className="right-logo">
                <a href="https://github.com/mstfazmni" target="_blank" rel="noopener noreferrer">
                    <img src={gitLogo} alt="Git-Logo"/>
                </a>
                <a href="https://www.linkedin.com/in/mo-zamani" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="Linkedin-Logo"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
