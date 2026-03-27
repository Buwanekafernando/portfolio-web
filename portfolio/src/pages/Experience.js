import React from 'react';
import Section from '../components/Section';
import { experience } from '../data/experience';
import './Experience.css';

const Experience = () => {
  return (
    <Section id="experience">
      <div className="section-head">
        <h2 className="section-title">Work & <span className="text-gradient">Education</span></h2>
        <div className="underline"></div>
      </div>
      
      <div className="timeline">
        {experience.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.period}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
