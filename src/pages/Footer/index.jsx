import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social icons from react-icons library
import './style.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <h1>ToolsWebsite</h1>
            {/* <img src="/path/to/logo.png" alt="Logo" /> */}
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            {/* Add more social icons as needed */}
          </div>
        </div>
        <p className="footer-text">© 2024 Your Website Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
