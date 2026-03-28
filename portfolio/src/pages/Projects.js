import React from 'react';
import Section from '../components/Section';
import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <Section id="projects">
      <div className="section-head">
        <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        <div className="underline"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-img">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn"><FaGithub /></a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-btn"><FaExternalLinkAlt /></a>
              </div>
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
