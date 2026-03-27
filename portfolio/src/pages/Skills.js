import React from 'react';
import Section from '../components/Section';
import { skills } from '../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <Section id="skills">
      <div className="section-head">
        <h2 className="section-title">Technical <span className="text-gradient">Skills</span></h2>
        <div className="underline"></div>
      </div>
      
      <div className="skills-grid">
        {skills.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-category">{category.category}</h3>
            <div className="skill-list">
              {category.items.map((skill, sIndex) => (
                <span key={sIndex} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
