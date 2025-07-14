import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/personalData';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

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

  // Certification data
  const certifications = [
    {
      id: 1,
      title: 'Introduction to HTML5',
      issuer: 'University of Michigan',
      image: '/images/Introduction to HTML5.jpg',
      downloadUrl: '/images/Introduction to HTML5.jpg',
      date: '2023',
      description: 'Comprehensive introduction to HTML5 fundamentals and best practices'
    },
    {
      id: 2,
      title: 'Introduction to Front-End Development',
      issuer: 'Meta',
      image: '/images/Introduction to Front-End Development.jpg',
      downloadUrl: '/images/Introduction to Front-End Development.jpg',
      date: '2023',
      description: 'Complete introduction to modern front-end development practices'
    },
    {
      id: 3,
      title: 'HTML, CSS & JavaScript',
      issuer: 'Johns Hopkins University',
      image: '/images/HTML,CSS,JS.png',
      downloadUrl: '/images/HTML,CSS,JS.png',
      date: '2023',
      description: 'Full stack web development with HTML, CSS, and JavaScript'
    },
    {
      id: 4,
      title: 'Server-side JavaScript with Node.js',
      issuer: 'The University of Edinburgh',
      image: '/images/Server side JavaScript with Node js.jpg.png',
      downloadUrl: '/images/Server side JavaScript with Node js.jpg.png',
      date: '2023',
      description: 'Backend development using Node.js and server-side JavaScript'
    },
    {
      id: 5,
      title: 'Building Web Applications in PHP',
      issuer: 'University of Michigan',
      image: '/images/PHP moocsBuilding Web Applications in PHP.jpg.png',
      downloadUrl: '/images/PHP moocsBuilding Web Applications in PHP.jpg.png',
      date: '2023',
      description: 'Full-stack web application development using PHP'
    },
    {
      id: 6,
      title: 'Oracle Database Course',
      issuer: 'Oracle University',
      image: '/images/Oracle Database Course Online.jpg',
      downloadUrl: '/images/Oracle Database Course Online.jpg',
      date: '2023',
      description: 'Comprehensive Oracle database management and SQL programming'
    },
    {
      id: 7,
      title: 'IBM Professional Certificate',
      issuer: 'IBM',
      image: '/images/IBM Certificate.jpg',
      downloadUrl: '/images/IBM Certificate.jpg',
      date: '2024',
      description: 'IBM professional certification in technology and development'
    },
    {
      id: 8,
      title: 'Infosys Springboard',
      issuer: 'Infosys Limited',
      image: '/images/infosys Springboard.jpg',
      downloadUrl: '/images/infosys Springboard.jpg',
      date: '2024',
      description: 'Digital learning and skill development program by Infosys'
    }
  ];

  function getSkillIcon(skillName) {
    const icons = {
      'HTML5': '🌐',
      'CSS3': '🎨',
      'JavaScript': '⚡',
      'React': '⚛️',
      'Responsive Design': '�',
      'Git & GitHub': '�',
      'VS Code': '�',
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

          {/* Certifications */}
          <div className="certifications-section fade-in">
            <h3 className="skills-category-title text-center">Certifications</h3>
            <p className="section-subtitle text-center">
              Professional certifications that validate my skills and expertise
            </p>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={cert.id} className="certification-card">
                  <div className="card-inner">
                    {/* Front of card */}
                    <div className="card-front">
                      <div className="cert-icon">🏆</div>
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <p className="cert-date">{cert.date}</p>
                      <div className="cert-description">
                        <p>{cert.description}</p>
                      </div>
                      <div className="cert-actions">
                        <button 
                          onClick={() => window.open(cert.image, '_blank')}
                          className="cert-btn view-btn"
                        >
                          👁️ View Certificate
                        </button>
                        <a 
                          href={cert.downloadUrl}
                          download
                          className="cert-btn download-btn"
                        >
                          ⬇️ Download
                        </a>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="card-back">
                      <div className="cert-preview">
                        <div className="cert-image-container">
                          <img 
                            src={cert.image} 
                            alt={`${cert.title} Certificate`}
                            className="cert-image"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextElementSibling.style.display = 'block';
                            }}
                          />
                          <div className="cert-image-placeholder" style={{display: 'none'}}>
                            <span>📜</span>
                            <p>Certificate Preview</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                <p>Strong eye for design and user experience, creating interfaces that are both beautiful and functional</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">📱</div>
                <h4>Mobile-First</h4>
                <p>Expertise in responsive design ensuring seamless experiences across all devices and screen sizes</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">⚡</div>
                <h4>Performance Minded</h4>
                <p>Focus on writing efficient, optimized code that delivers fast loading times and smooth interactions</p>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon">🔧</div>
                <h4>Modern Workflow</h4>
                <p>Proficient with modern development tools, version control, and collaborative development practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
