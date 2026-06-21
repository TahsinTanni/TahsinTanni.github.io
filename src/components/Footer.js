import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const currentYear = 2026; // Set to the current year
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-copyright">
          © {currentYear} Tahsin Tanni. All rights reserved.
        </p>
        <div className="footer-socials">
          <a 
            href="https://www.facebook.com/tahsintanni.tashu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Facebook"
            className="footer-social-link"
          >
            <FaFacebook size={18} />
          </a>
          <a 
            href="https://www.instagram.com/__.__tashu__/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
            className="footer-social-link"
          >
            <FaInstagram size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/tahsin-tanni-120156215/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
            className="footer-social-link"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="https://github.com/TahsinTanni" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
            className="footer-social-link"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
