import React from 'react';
import './Footer.css';
import logo from './../../Assets/logo.png';
import { FaFacebook, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer_container'>
      <div className="footer">
        <div className="footer-column">
          <div className="footer-row">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className="footer-row social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">How it</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Reporting</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>+ 880 12345678</li>
            <li>youremail@gmail.com</li>
            <li>Pune City</li>
          </ul>
        </div>
      </div>

        <div className="footer footer-terms">
            <div className="footer-column left">
                <a href="#">Copyright & Design By @Learning Exp.</a>
            </div>

            <div className="footer-column-right">
                <div className="right-links">
                    <a href="#">Terms of use</a>
                    <p>|</p>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>

    </footer>
  );
};

export default Footer;
