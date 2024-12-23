import React from "react";
import '../styles/Header.css'
import myLogo from '../assest/mz-f-b.png';
import mailLogo from '../assest/Contact-me.png';
const Header = () => {
    return(
        <div className="header-div-container">
            <div className="logo-left">
                <img src={myLogo} className="logo-icon" alt="logo"/>
            </div>
            
            <div className="logo-right">
               <a src={"#"}>
                    <img src={mailLogo} className="contact-icon" alt="contact"/>
                </a>
            </div>
        </div>
    );
}

export default Header;