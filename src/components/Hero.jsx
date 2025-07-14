import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalData';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Aspiring Front-End Developer',
    'React Enthusiast',
    'Creative Problem Solver',
    'UI/UX Passionate'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseDelay = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      const currentFullText = texts[currentIndex];
      
      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        setCurrentText(prevText => 
          isDeleting 
            ? currentFullText.substring(0, prevText.length - 1)
            : currentFullText.substring(0, prevText.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting fade-in">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            
            <h1 className="hero-name slide-in-left">
              <span className="name-highlight">{personalInfo.name}</span>
            </h1>
            
            <div className="hero-title slide-in-right">
              <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description fade-in">
              Passionate about creating beautiful, functional, and user-friendly web experiences. 
              Currently seeking opportunities to contribute to innovative projects and grow as a developer.
            </p>
            
            <div className="hero-buttons fade-in">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="hero-stats fade-in">
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Technologies Learned</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-container animate-float">
              <div className="profile-placeholder">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9H21ZM12 13C15.31 13 18 15.69 18 19V21H6V19C6 15.69 8.69 13 12 13Z"/>
                </svg>
              </div>
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
