import React, { useState } from 'react';
import { personalInfo } from '../data/personalData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual implementation)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: '📱',
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone.replace(/\s+/g, '')}`
    },
    {
      icon: '📍',
      label: 'Location',
      value: personalInfo.location,
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: personalInfo.linkedin.replace('https://', ''),
      link: personalInfo.linkedin
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: personalInfo.github,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: personalInfo.linkedin,
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: personalInfo.twitter,
      color: '#1da1f2'
    },
    {
      name: 'Discord',
      icon: '💬',
      url: '#',
      color: '#7289da'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">Get In Touch</h2>
          <p className="section-subtitle fade-in">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info slide-in-left">
            <div className="contact-intro">
              <h3>Let's Connect!</h3>
              <p>
                I'm excited to hear from you! Whether you have a job opportunity, 
                a project idea, or just want to chat about web development, 
                feel free to reach out.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-method">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.label}</h4>
                    <a 
                      href={item.link}
                      className="contact-link"
                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="availability">
              <div className="availability-status">
                <span className="status-indicator available"></span>
                <span className="status-text">Available for new opportunities</span>
              </div>
              <p>Currently seeking entry-level frontend developer positions</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section slide-in-right">
            <div className="form-container">
              <h3>Send me a message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me more about your project or opportunity..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>📧</span>
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="form-message success">
                    ✅ Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-message error">
                    ❌ Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Resume Download Section */}
        <div id="resume" className="resume-section fade-in">
          <div className="resume-content">
            <div className="resume-info">
              <h3>Download My Resume</h3>
              <p>
                Get a comprehensive overview of my education, skills, projects, and experience. 
                Perfect for HR teams and hiring managers.
              </p>
              <div className="resume-features">
                <div className="feature">
                  <span className="feature-icon">📄</span>
                  <span>Professional Format</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📊</span>
                  <span>Skills & Projects</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎓</span>
                  <span>Education & Certifications</span>
                </div>
              </div>
            </div>
            <div className="resume-actions">
              <a 
                href="/Resumemain.pdf"
                download="Chowdary_Resume.pdf"
                className="btn btn-primary btn-lg"
              >
                <span>⬇️</span>
                Download PDF Resume
              </a>
              <a 
                href="/Resumemain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <span>👁️</span>
                View Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
