import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/Buwaneka_fernando.jpeg';
import cvFile from '../assets/CV of Buwaneka_Fernando.pdf';


const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hero-greeting">Hi, I'm</h2>
            <h1 className="hero-name">Buwaneka <span className="text-gradient">Fernando</span></h1>
            <h3 className="hero-tagline">Data Science Student | Web Developer | AI Enthusiast</h3>
            <p className="hero-intro">
              I build data-driven applications and modern web experiences. 
              Currently exploring the intersection of Big Data and Frontend Design.
            </p>
            <div className="hero-btns">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <a href={cvFile} download="CV_Buwaneka_Fernando.pdf" className="btn btn-outline">Download CV</a>

            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="image-blob">
              <img src={profileImg} alt="Buwaneka Fernando" />
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
