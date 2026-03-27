import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>BF<span>.</span></h3>
          <p>Data Science Student & Web Developer</p>
        </div>
        <div className="footer-socials">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} BF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
