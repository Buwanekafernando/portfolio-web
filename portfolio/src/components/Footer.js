import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>BF<span>.</span></h3>
          <p>Data Science Student & Web Developer</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/Buwanekafernando"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/buwaneka-fernando-848684237"><FaLinkedin /></a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} BF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
