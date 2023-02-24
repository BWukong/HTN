import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTiktok, faInstagram, faTwitter, faBlackTie } from '@fortawesome/free-brands-svg-icons'
import background from '../img/logo.png'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="logo"><img src={background} alt="Logo" width="50" height="50"></img></div>
                <strong>HTN 2023</strong>
                <ul className="links">
                    <li><a href="https://www.facebook.com/hackthenorth/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://www.instagram.com/hackthenorth/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li><a href="https://twitter.com/hackthenorth"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://www.linkedin.com/company/hack-the-north/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    <li><a href="https://www.tiktok.com/@hackthenorth"><FontAwesomeIcon icon={faTiktok} /></a></li>
                    <li><a><FontAwesomeIcon icon={faBlackTie} /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;