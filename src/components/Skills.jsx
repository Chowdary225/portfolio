import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/personalData';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);
  
  const basePath = import.meta.env.BASE_URL;
  const getImagePath = (imageName) => `${basePath}images/${imageName}`;

  // Group skills by category
  const groupedSkills = skills.technical.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      ...skill,
      icon: getSkillIcon(skill.name)
    });
    return acc;
  }, {});

  function getSkillIcon(skillName) {
    const icons = {
      'HTML5': '🌐',
      'CSS3': '🎨',
      'JavaScript': '⚡',
      'React': '⚛️',
      'Responsive Design': '📱',
      'Git & GitHub': '🔧',
      'VS Code': '💻',
      'Figma': '🎯',
      'npm/yarn': '📦',
      'Chrome DevTools': '🔍'
    };
    return icons[skillName] || '💡';
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section" ref={skillsRef}>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">Skills & Technologies</h2>
          <p className="section-subtitle fade-in">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="skills-content">
          
          {/* Technical Skills */}
          <div className="technical-skills">
            <h3 className="skills-category-title fade-in">Technical Skills</h3>
            <div className="skills-grid">
              {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
                <div key={categoryIndex} className="skill-category card slide-in-left">
                  <h4 className="category-title">{category}</h4>
                  <div className="skills-list">
                    {categorySkills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="soft-skills slide-in-right">
            <h3 className="skills-category-title">Soft Skills</h3>
            <div className="soft-skills-grid">
              {skills.soft.map((skill, index) => (
                <div key={index} className="soft-skill-item">
                  <span className="soft-skill-icon">✨</span>
                  <span className="soft-skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Journey */}
          <div className="learning-section fade-in">
            <h3 className="skills-category-title text-center">Continuous Learning</h3>
            <div className="learning-content">
              <div className="learning-item">
                <div className="learning-icon">📚</div>
                <div className="learning-text">
                  <h4>Currently Learning</h4>
                  <p>Advanced React Patterns, TypeScript, Node.js, and Modern CSS Techniques</p>
                </div>
              </div>
              <div className="learning-item">
                <div className="learning-icon">🎯</div>
                <div className="learning-text">
                  <h4>Next Goals</h4>
                  <p>Full-Stack Development, Cloud Platforms, Testing Frameworks, and DevOps Basics</p>
                </div>
              </div>
              <div className="learning-item">
                <div className="learning-icon">🚀</div>
                <div className="learning-text">
                  <h4>Learning Approach</h4>
                  <p>Hands-on projects, online courses, documentation reading, and community engagement</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Highlights */}
          <div className="skill-highlights fade-in">
            <h3 className="skills-category-title text-center">Key Strengths</h3>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-icon">🎨</div>
                <h4>UI/UX Focused</h4>
                <p>Strong eye for design and user experience</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">📱</div>
                <h4>Mobile-First</h4>
                <p>Responsive design across all devices</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">⚡</div>
                <h4>Performance</h4>
                <p>Optimized and efficient code</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🔧</div>
                <h4>Workflow</h4>
                <p>Modern tools and development practices</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;