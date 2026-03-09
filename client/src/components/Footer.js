import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Magician Parth</h3>
            <p>Creating unforgettable magical experiences for over 10 years.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="YouTube">📹</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Corporate Events</Link></li>
              <li><Link to="/services">Private Parties</Link></li>
              <li><Link to="/services">Wedding Entertainment</Link></li>
              <li><Link to="/services">Virtual Shows</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📧 info@magicianparth.com</li>
              <li>📱 +1 (555) 123-4567</li>
              <li>📍 New York, NY</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Magician Parth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
