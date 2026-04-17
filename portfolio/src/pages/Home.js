import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StackIcon from 'tech-stack-icons';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Home.css';
import '../styles/About.css';
import '../styles/Experience.css';
import '../styles/Skills.css';
import '../styles/Projects.css';
import '../styles/Contact.css';
import '../styles/Certificates.css';
import profileImg from '../assets/Buwaneka_fernando.jpeg';
import cvFile from '../assets/CV of Buwaneka_Fernando.pdf';
import { workExperience, education } from '../data/experience';
import { projects } from '../data/projects';
import { certificates } from '../data/certificates';
import Section from '../components/Section';

const Home = () => {
  // Stats Calculation
  const totalProjects = projects.length;
  const aiProjects = projects.filter(p => p.tags.some(t => t.toLowerCase().includes('python') || t.toLowerCase().includes('ml') || t.toLowerCase().includes('ai') || t.toLowerCase().includes('tensorflow'))).length;
  const webProjects = projects.filter(p => p.tags.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('node') || t.toLowerCase().includes('web') || t.toLowerCase().includes('html'))).length;
  const problemSolvingProjects = 3; // Hardcoded as per user request context or manually categorized

  const techStackGroups = [
    {
      title: 'Programming Languages',
      description: 'Java, Kotlin, Python, JavaScript, SQL, C++, TypeScript, PHP',
      items: [
        { name: 'java', label: 'Java' },
        { name: 'kotlin', label: 'Kotlin' },
        { name: 'python', label: 'Python' },
        { name: 'js', label: 'JavaScript' },
        { name: 'c++', label: 'C++' },
        { name: 'c#', label: 'C#' },
        { name: 'typescript', label: 'TypeScript' },
        { name: 'php', label: 'PHP' },

      ],
    },
    {
      title: 'Web Development & Frameworks',
      description: 'MERN stack, React.js, Spring Boot, FastAPI, WebSocket, Vue.js, TypeScript',
      items: [
        { name: 'html5', label: 'HTML5' },
        { name: 'css3', label: 'CSS3' },
        { name: 'bootstrap5', label: 'Bootstrap 5' },
        { name: 'tailwindcss', label: 'Tailwind CSS' },
        { name: 'vitejs', label: 'Vite' },
        { name: 'nextjs', label: 'Next.js' },
        { name: 'nodejs', label: 'Node.js' },
        { name: 'expressjs', label: 'Express.js' },
        { name: 'reactnative', label: 'React Native' },
        { name: 'vuejs', label: 'Vue.js' },
        { name: 'tomcat', label: 'Tomcat' },
      ],
    },
    {
      title: 'Databases',
      description: 'MongoDB, MySQL, SQLite, MSSQL, XAMPP, PostgreSQL',
      items: [
        { name: 'mongodb', label: 'MongoDB' },
        { name: 'mysql', label: 'MySQL' },
        { name: 'sqlite', label: 'SQLite' },
        { name: 'oracle', label: 'Oracle' },
        { name: 'postgresql', label: 'PostgreSQL' },
      ],
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'ETL/ELT pipelines, Pandas, NumPy, Scikit-Learn, TensorFlow, NLP,  Random Forest, Regression, LLMs, K-Means, Clustering',
      items: [
        { name: 'analytics', label: 'Analytics' },
        { name: 'pandas', label: 'Pandas' },
        { name: 'tensorflow', label: 'TensorFlow' },
        { name: 'pytorch', label: 'PyTorch' },
        { name: 'huggingface', label: 'Hugging Face' },
        { name: 'colab', label: 'Colab' },
        { name: 'scikitlearn', label: 'Scikit-Learn' },
      ],
    },
    {
      title: 'Tools & Platforms',
      description: 'VS Code, GitHub, Cloudinary, Android Studio, RStudio, Figma, Power BI, Jupyter Notebook, Microsoft SQL Server Management Studio',
      items: [
        { name: 'vscode', label: 'VS Code' },
        { name: 'github', label: 'GitHub' },
        { name: 'git', label: 'Git' },
        { name: 'cloudinary', label: 'Cloudinary' },
        { name: 'postman', label: 'Postman' },
        { name: 'figma', label: 'Figma' },
        { name: 'rstudio', label: 'RStudio' },
        { name: 'netbeans', label: 'NetBeans' },
        { name: 'stackoverflow', label: 'StackOverflow' },


      ],
    },
    {
      title: 'Cloud & APIs',
      description: 'Google Cloud Storage, REST APIs, AWS, Microsoft Azure',
      items: [
        { name: 'gcloud', label: 'Google Cloud' },
        { name: 'aws', label: 'AWS' },
        { name: 'azure', label: 'Azure' },
        { name: 'firebase', label: 'Firebase' },
      ],
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="hero-greeting">Hi, I'm</h2>
            <h1 className="hero-name">Buwaneka <span className="text-gradient">Fernando</span></h1>
            <h3 className="hero-tagline">Data Science Student | Web Developer</h3>
            <p className="hero-intro">
              I build data-driven applications and modern web experiences.
              Currently exploring the intersection of Big Data and Frontend Design.
            </p>
            <div className="hero-btns-wrapper">
              <div className="hero-btns">
                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                <a href={cvFile} download="CV_Buwaneka_Fernando.pdf" className="btn btn-outline">
                  <FaFileDownload /> Download CV
                </a>
              </div>
              <div className="hero-socials">
                <a href="https://github.com/Buwanekafernando" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/buwaneka-fernando-848684237" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="hero-image-outline">
              <div className="image-wrapper">
                <img src={profileImg} alt="Buwaneka Fernando" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="about-section">
        <div className="section-head">
          <p className="section-subtitle">Get To Know</p>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          <div className="underline"></div>
        </div>

        <div className="about-grid">
          <div className="about-img-container">
            <div className="about-img-frame">
              <img src={profileImg} alt="About Me" />
            </div>
          </div>
          <div className="about-content">
            <h3 className="about-subheading">Personal Information</h3>
            <div className="personal-info-grid">
              <div className="info-item"><span>Name:</span> Buwaneka Fernando</div>
              <div className="info-item"><span>Email:</span> fernandobuwaneka@gmail.com</div>
              <div className="info-item"><span>Phone:</span> +94 76 226 5366</div>
              <div className="info-item"><span>Address:</span> Panadura, SL</div>
              <div className="info-item"><span>Zip Code:</span> 12500</div>
              <div className="info-item"><span>Experience:</span> Internship</div>
            </div>

            <a href={cvFile} download className="btn btn-primary mt-2">Hire Me</a>
          </div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume" className="resume-section">
        <div className="section-head">
          <p className="section-subtitle">My Qualification</p>
          <h2 className="section-title">My <span className="text-gradient">Resume</span></h2>
          <div className="underline"></div>
        </div>

        <div className="experience-container">
          <div className="experience-section">
            <h3 className="resume-header">Experience</h3>
            <div className="timeline">
              {workExperience.map((item) => (
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
          </div>

          <div className="experience-section">
            <h3 className="resume-header">Education</h3>
            <div className="timeline">
              {education.map((item) => (
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
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className="skills-section">
        <div className="section-head">
          <p className="section-subtitle">My Technical Level</p>
          <h2 className="section-title">My <span className="text-gradient">Skills</span></h2>
          <div className="underline"></div>
        </div>

        <div className="skills-container-grid">
          {techStackGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="skill-group-title">{group.title}</h3>
              <p className="skill-group-description">{group.description}</p>
              <div className="stack-icons-grid">
                {group.items.map((item) => (
                  <div key={item.name} className="stack-icon-card">
                    <StackIcon name={item.name} className="stack-icon" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <section className="stats-section section-padding">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h2 className="stat-number">{totalProjects}+</h2>
              <p className="stat-label">Total Projects</p>
            </div>
            <div className="stat-card">
              <h2 className="stat-number">{aiProjects}+</h2>
              <p className="stat-label">AI Projects</p>
            </div>
            <div className="stat-card">
              <h2 className="stat-number">{webProjects}+</h2>
              <p className="stat-label">Web Projects</p>
            </div>
            <div className="stat-card">
              <h2 className="stat-number">{problemSolvingProjects}+</h2>
              <p className="stat-label">Problem Solving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Section id="projects" className="portfolio-section">
        <div className="section-head project-head">
          <div>
            <p className="section-subtitle">My Recent Work</p>
            <h2 className="section-title">My <span className="text-gradient">Portfolio</span></h2>
            <div className="underline"></div>
          </div>
          <a href="https://github.com/Buwanekafernando" target="_blank" rel="noopener noreferrer" className="github-section-link">
            <FaGithub /> View Github Profile
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} className="primary-img" />
                <img src={project.hoverImage} alt={project.title} className="secondary-img" />
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

      {/* Certificates Section */}
      <Section id="certificates" className="certificates-section">
        <div className="section-head">
          <p className="section-subtitle">My Achievements</p>
          <h2 className="section-title">Certificates <span className="text-gradient">& Courses</span></h2>
          <div className="underline"></div>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-img">
                <img src={cert.image} alt={cert.title} />
                <div className="certificate-overlay">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-btn">
                    View Certificate
                  </a>
                </div>
              </div>
              <div className="certificate-content">
                <div className="certificate-issuer">{cert.issuer}</div>
                <h3>{cert.title}</h3>
                <div className="certificate-date">{cert.date}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="contact-section">
        <div className="section-head">
          <p className="section-subtitle">Get In Touch</p>
          <h2 className="section-title">Contact <span className="text-gradient">Me</span></h2>
          <div className="underline"></div>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>I'm always open to discussing new projects or creative ideas.</p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div><h4>Email</h4><p>fernandobuwaneka@gmail.com</p></div>
              </div>
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div><h4>LinkedIn</h4><p>linkedin.com/in/buwaneka-fernando-848684237</p></div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div><h4>Location</h4><p>Panadura, Sri Lanka</p></div>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group"><input type="text" placeholder="Your Name" required /></div>
            <div className="form-group"><input type="email" placeholder="Your Email" required /></div>
            <div className="form-group"><textarea placeholder="Your Message" rows="5" required></textarea></div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default Home;
