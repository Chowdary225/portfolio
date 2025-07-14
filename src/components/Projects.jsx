import React, { useState } from 'react';
import { projects as projectsData } from '../data/personalData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = projectsData;

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">My Projects</h2>
          <p className="section-subtitle fade-in">
            A showcase of my work, from learning projects to creative solutions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-projects">
          <h3 className="subsection-title fade-in">Featured Projects</h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-project-card slide-in-left">
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>📱</span>
                    <p>Project Screenshot</p>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <span>🔗</span> Code
                      </a>
                      {project.liveLink !== '#' && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <span>🚀</span> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="all-projects">
          <h3 className="subsection-title fade-in">All Projects</h3>
          
          {/* Filter Buttons */}
          <div className="project-filters fade-in">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${filter === category.key ? 'active' : ''}`}
                onClick={() => setFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <span>🖥️</span>
                    <p>Project Screenshot</p>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <span>📂</span>
                      </a>
                      {project.liveLink !== '#' && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <span>🔗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="projects-cta fade-in">
          <h3>Interested in working together?</h3>
          <p>I'm always excited to take on new challenges and learn from experienced developers.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Let's Connect
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
