import React from 'react';
import { education, personalInfo } from '../data/personalData';
import './About.css';

const About = () => {
  const interests = [
    "Web Development",
    "User Experience Design", 
    "Problem Solving",
    "Continuous Learning",
    "Open Source Contribution",
    "Technology Innovation"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">About Me</h2>
          <p className="section-subtitle fade-in">
            Get to know more about who I am and what drives my passion for development
          </p>
        </div>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <div className="about-intro">
              <h3>Hello! I'm an aspiring front-end developer</h3>
              <p>
                I'm a recent computer science graduate with a passion for creating beautiful, 
                functional, and user-friendly web applications. While I may be new to the professional 
                world, I bring fresh perspectives, strong foundational knowledge, and an eagerness 
                to learn and grow.
              </p>
              <p>
                My journey into web development started during my college years when I discovered 
                the power of turning ideas into interactive digital experiences. Since then, I've 
                been dedicated to mastering modern web technologies and best practices.
              </p>
            </div>

            <div className="career-goals">
              <h4>Career Goals</h4>
              <ul>
                <li>Contribute to meaningful projects that make a positive impact</li>
                <li>Continuously learn and adapt to new technologies</li>
                <li>Collaborate with talented teams to create exceptional user experiences</li>
                <li>Develop expertise in full-stack development</li>
                <li>Eventually mentor other aspiring developers</li>
              </ul>
            </div>

            <div className="personal-values">
              <h4>What Drives Me</h4>
              <p>
                I believe in writing clean, maintainable code and creating solutions that are 
                not just functional, but delightful to use. I'm committed to accessibility, 
                performance, and user-centered design principles.
              </p>
            </div>
          </div>

          <div className="about-details slide-in-right">
            <div className="education-section">
              <h4>Education</h4>
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item card">
                    <div className="education-content">
                      <h5>{edu.degree}</h5>
                      <p className="institution">{edu.institution}</p>
                      <div className="education-meta">
                        <span className="year">{edu.year}</span>
                        <span className="grade">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="interests-section">
              <h4>Interests & Passions</h4>
              <div className="interests-grid">
                {interests.map((interest, index) => (
                  <div key={index} className="interest-tag">
                    {interest}
                  </div>
                ))}
              </div>
            </div>

            <div className="fun-facts">
              <h4>Fun Facts</h4>
              <ul className="facts-list">
                <li>🎯 I can spend hours perfecting a single CSS animation</li>
                <li>📚 Always have 3+ programming tutorials bookmarked</li>
                <li>☕ Coffee is my debugging companion</li>
                <li>🎮 Love problem-solving in code and in puzzle games</li>
                <li>🌱 Currently exploring React ecosystem deeply</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-cta fade-in">
          <p>
            I'm excited about the opportunity to bring fresh ideas and enthusiasm to a development team. 
            Let's create something amazing together!
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
            <a href="#resume" className="btn btn-outline">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
