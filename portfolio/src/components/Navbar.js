import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`navbar glass-effect ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/" className="nav-logo">
          BF<span className="dot">.</span>
        </NavLink>

        <ul className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
          <li><NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink></li>
          <li><NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          <div className="nav-socials-mobile">
            <a href="https://github.com/Buwanekafernando" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/buwaneka-fernando-848684237" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </ul>

        <div className="nav-right">
          <div className="nav-socials">
            <a href="https://github.com/Buwanekafernando" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/buwaneka-fernando-848684237" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
          <button className="nav-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
