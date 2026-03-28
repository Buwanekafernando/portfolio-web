import React from 'react';
import Section from '../components/Section';
import '../styles/About.css';

const About = () => {
  return (
    <Section id="about" className="about-section">
      <div className="section-head">
        <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        <div className="underline"></div>
      </div>
      
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I'm Buwaneka, a passionate student specializing in <strong>Data Science</strong> and 
            an enthusiastic <strong>Web Developer</strong>. I love turning complex data into actionable 
            insights and building beautiful, user-centric web applications.
          </p>
          <p>
            My journey into the world of tech started with a curiosity for how data shapes our decisions 
            and how the web connects us all. Since then, I've been honing my skills in Python, 
            React, and various machine learning frameworks.
          </p>
          <p>
            My goal is to bridge the gap between technical complexity and intuitive user experiences. 
            I'm always eager to learn new technologies and collaborate on innovative projects that 
            push the boundaries of what's possible.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">5+</span>
              <span className="stat-label">Tech Certs</span>
            </div>
          </div>
        </div>
        
        <div className="about-info">
          <div className="info-card">
            <h3>Quick Facts</h3>
            <ul>
              <li><strong>Based in:</strong> Colombo, Sri Lanka</li>
              <li><strong>Email:</strong> buwaneka@example.com</li>
              <li><strong>Degree:</strong> B.Sc. in Data Science</li>
              <li><strong>Interests:</strong> AI, Web Dev, UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
