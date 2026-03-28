import React from 'react';
import Section from '../components/Section';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <Section id="contact">
      <div className="section-head">
        <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>

          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <p>fernandobuwaneka@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div>
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/buwaneka-fernando-848684237</p>
              </div>
            </div>
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <div>
                <h4>GitHub</h4>
                <p>github.com/Buwanekafernando</p>
              </div>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <div>
                <h4>Location</h4>
                <p>Panadura,Western Province, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
