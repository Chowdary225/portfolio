import React from 'react';
import { personalInfo } from '../data/personalData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🔗',
      url: personalInfo.github
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: personalInfo.linkedin
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: personalInfo.twitter
    },
    {
      name: 'Email',
      icon: '📧',
      url: `mailto:${personalInfo.email}`
    }
  ];

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    
    const element = document.getElementById(target.replace('#', ''));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            {/* Brand Section */}
            <div className="footer-brand">
              <h3 className="brand-title">{personalInfo.name}</h3>
              <p className="brand-subtitle">{personalInfo.title}</p>
              <p className="brand-description">
                Passionate about creating beautiful, functional web experiences. 
                Always learning, always growing.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul className="links-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="footer-link"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Get In Touch</h4>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>{personalInfo.phone}</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="availability-status">
                <span className="status-dot available"></span>
                <span>Available for opportunities</span>
              </div>
            </div>

            {/* Newsletter/Updates */}
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Follow my journey as I grow as a developer</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">
                  Subscribe
                </button>
              </div>
              <p className="newsletter-note">
                Get notified about new projects and learning milestones
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                © {currentYear} {personalInfo.name}. All rights reserved. 
                Built with ❤️ using React
              </p>
            </div>
            
            <div className="footer-meta">
              <span className="footer-version">Portfolio v2.0</span>
              <button className="scroll-top-btn" onClick={scrollToTop}>
                <span>⬆️</span>
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decoration">
        <div className="decoration-shape shape-1"></div>
        <div className="decoration-shape shape-2"></div>
        <div className="decoration-shape shape-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
