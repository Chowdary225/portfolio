import React, { useState } from 'react';
import { projects as projectsData, personalInfo } from '../data/personalData';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [brokenImages, setBrokenImages] = useState({});

  const projects = projectsData;
  const basePath = import.meta.env.BASE_URL || '/';

  const getAssetPath = (path) => {
    if (!path || path === '#' || path.startsWith('http')) return path;
    return `${basePath}${path.replace(/^\//, '')}`;
  };

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  const hasLiveLink = (project) =>
    project.liveLink && project.liveLink !== '#';

  const hasGithubLink = (project) =>
    project.githubLink && project.githubLink !== '#' && !project.isPrivate;

  const hasDemoVideo = (project) =>
    Boolean(project.demoVideo) && !project.comingSoon;

  const isExternalVideo = (url) =>
    typeof url === 'string' &&
    (url.includes('youtube.com') ||
      url.includes('youtu.be') ||
      url.includes('vimeo.com'));

  const markImageBroken = (id) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  const renderProjectMedia = (project, icon = '🖥️') => {
    const imageSrc = getAssetPath(project.image);
    const showImage = project.image && !brokenImages[project.id];

    return (
      <div className="project-image">
        {showImage ? (
          <img
            src={imageSrc}
            alt={`${project.title} screenshot`}
            className="project-screenshot"
            onError={() => markImageBroken(project.id)}
          />
        ) : (
          <div className="project-placeholder">
            <span>{project.comingSoon ? '⏳' : icon}</span>
            <p>{project.comingSoon ? 'Media coming soon' : 'Project Screenshot'}</p>
          </div>
        )}

        {project.comingSoon && (
          <span className="project-badge">Coming Soon</span>
        )}
        {project.isPrivate && !project.comingSoon && (
          <span className="project-badge">Private</span>
        )}

        <div className="project-overlay">
          <div className="project-links">
            {hasGithubLink(project) && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>📂</span> Code
              </a>
            )}
            {hasLiveLink(project) && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>🚀</span> Live Demo
              </a>
            )}
            {hasDemoVideo(project) && (
              <a
                href={
                  isExternalVideo(project.demoVideo)
                    ? project.demoVideo
                    : getAssetPath(project.demoVideo)
                }
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <span>▶️</span> Demo
              </a>
            )}
            {project.comingSoon && (
              <span className="project-link project-link-disabled">
                Upload media later
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

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
                {renderProjectMedia(project, '📱')}
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
                className={`project-card slide-in-right${project.comingSoon ? ' coming-soon' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {renderProjectMedia(project)}
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
          <p>I&apos;m always excited to take on new challenges and learn from experienced developers.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Connect
            </a>
            <a
              href={personalInfo.github}
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
