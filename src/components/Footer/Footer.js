import React from 'react';
import './Footer.css';
import BlackBar from './BlackBar';
const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-right">
                    <div className="footer-section">
                        <h4>HELP</h4>
                        <ul>
                            <li><a href="/Login">MEMBERS LOGIN</a></li>
                            <li><a href="/Exchnage">PLACE AN EXCHANGE/RETURN REQUEST</a></li>
                            <li><a href="/Contact">CONTACT US</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>THE COMPANY</h4>
                        <ul>
                            <li><a href="/Story">STORY</a></li>
                            <li><a href="/ExchnagePolicy">EXCHANGE/RETURNS POLICY</a></li>
                            <li><a href="/Shipping">SHIPPING</a></li>
                            <li><a href="/Careers">CAREERS</a></li>
                            <li><a href="/Terms">TERMS</a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <h2 className="footer-logo">ATNATIC</h2>
                <p>© 2024 ATNATIC, ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
        <BlackBar />
        </>
    );
};

export default Footer;
