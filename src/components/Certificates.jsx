import React, { useState } from 'react';
import { certificates as certificatesData } from '../data/personalData';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState(new Set());

  const certificates = certificatesData;

  const onlineLearning = [
    {
      platform: "FreeCodeCamp",
      courses: 3,
      hours: "300+",
      focus: "Web Development"
    },
    {
      platform: "Coursera",
      courses: 2,
      hours: "120+",
      focus: "Computer Science"
    },
    {
      platform: "Udemy",
      courses: 4,
      hours: "200+",
      focus: "Frontend Technologies"
    },
    {
      platform: "YouTube",
      courses: "10+",
      hours: "500+",
      focus: "Practical Tutorials"
    }
  ];

  const featuredCertificates = certificates.filter(cert => cert.featured);

  const handleViewCertificate = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const handleFlipCard = (certificateId) => {
    setFlippedCards(prev => {
      const newFlipped = new Set(prev);
      if (newFlipped.has(certificateId)) {
        newFlipped.delete(certificateId);
      } else {
        newFlipped.add(certificateId);
      }
      return newFlipped;
    });
  };

  const handleDownloadCertificate = (e, certificateFile, certificateTitle) => {
    e.stopPropagation(); // Prevent card flip when downloading
    if (!certificateFile || certificateFile === "/certificates/pdfs/certificate1.pdf") {
      alert("Certificate PDF not available yet. Please add your certificate PDF file.");
      return;
    }
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = certificateFile;
    link.download = `${certificateTitle.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleVerifyCertificate = (e, verifyLink, credentialId) => {
    e.stopPropagation(); // Prevent card flip when verifying
    if (verifyLink && verifyLink !== "#") {
      window.open(verifyLink, '_blank');
    } else {
      alert(`Credential ID: ${credentialId}\nPlease contact the issuing organization to verify this certificate.`);
    }
  };

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title fade-in">Certificates & Learning</h2>
          <p className="section-subtitle fade-in">
            My commitment to continuous learning and professional development
          </p>
        </div>

        {/* Featured Certificates */}
        <div className="featured-certificates">
          <h3 className="subsection-title fade-in">Featured Certifications</h3>
          <div className="featured-grid">
            {featuredCertificates.map((cert) => (
              <div key={cert.id} className="featured-certificate-card slide-in-left">
                <div className="certificate-header">
                  <div className="certificate-logo">{cert.logo}</div>
                  <div className="certificate-meta">
                    <h4 className="certificate-title">{cert.title}</h4>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    <span className="certificate-date">{cert.date}</span>
                  </div>
                </div>
                <div className="certificate-content">
                  <p className="certificate-description">{cert.description}</p>
                  <div className="certificate-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                  <div className="certificate-actions">
                    <button 
                      className="btn btn-outline btn-sm"
                      onClick={() => handleViewCertificate(cert)}
                    >
                      📄 View Certificate
                    </button>
                    <button 
                      className="btn btn-secondary btn-sm"
                      onClick={(e) => handleDownloadCertificate(e, cert.certificateFile, cert.title)}
                    >
                      ⬇️ Download
                    </button>
                    {cert.verifyLink !== '#' && (
                      <a 
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary btn-sm"
                      >
                        ✓ Verify
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Certificates */}
        <div className="all-certificates">
          <h3 className="subsection-title fade-in">All Certifications</h3>
          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className={`certificate-card slide-in-right ${flippedCards.has(cert.id) ? 'flipped' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleFlipCard(cert.id)}
              >
                <div className="certificate-card-inner">
                  {/* Front of the card */}
                  <div className="certificate-card-front">
                    <div className="flip-indicator">Click to view</div>
                    <div className="certificate-badge">
                      <span className="badge-icon">{cert.logo}</span>
                    </div>
                    <div className="certificate-info">
                      <h4 className="cert-title">{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer} • {cert.date}</p>
                      <div className="cert-skills">
                        {cert.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="cert-skill">{skill}</span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="cert-skill">+{cert.skills.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    <div className="certificate-links">
                      <button 
                        className="cert-link" 
                        title="View Full Certificate"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCertificate(cert);
                        }}
                      >
                        📄
                      </button>
                      <button 
                        className="cert-link" 
                        title="Download Certificate"
                        onClick={(e) => handleDownloadCertificate(e, cert.certificateFile, cert.title)}
                      >
                        ⬇️
                      </button>
                      {cert.verifyLink !== '#' && (
                        <a
                          href={cert.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-link" 
                          title="Verify Credential"
                          onClick={(e) => e.stopPropagation()}
                        >
                          ✓
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Back of the card */}
                  <div className="certificate-card-back">
                    <div 
                      className="flip-back-indicator"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFlipCard(cert.id);
                      }}
                    >
                      ← Back
                    </div>
                    
                    <div className="certificate-image-container">
                      <div className="certificate-image-display">
                        {cert.certificateImage ? (
                          <img
                            src={cert.certificateImage}
                            alt={`${cert.title} Certificate`}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div 
                          className="certificate-fallback-mini" 
                          style={{ display: cert.certificateImage ? 'none' : 'flex' }}
                        >
                          <div className="fallback-icon">📜</div>
                          <h4>{cert.title}</h4>
                          <p><strong>{cert.issuer}</strong></p>
                          <p>{cert.completionDate || cert.date}</p>
                          <p style={{ fontSize: '0.75rem', marginTop: '1rem', opacity: 0.7 }}>
                            Certificate image not yet added
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="certificate-back-actions">
                      <button 
                        className="cert-back-btn primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewCertificate(cert);
                        }}
                      >
                        📄 View Details
                      </button>
                      <button 
                        className="cert-back-btn"
                        onClick={(e) => handleDownloadCertificate(e, cert.certificateFile, cert.title)}
                      >
                        ⬇️ Download
                      </button>
                      {cert.verifyLink !== '#' && (
                        <a
                          href={cert.verifyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cert-back-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          ✅ Verify
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="learning-journey fade-in">
          <h3 className="subsection-title text-center">Learning Journey</h3>
          <div className="learning-stats">
            {onlineLearning.map((platform, index) => (
              <div key={index} className="learning-stat-card">
                <div className="stat-header">
                  <h4>{platform.platform}</h4>
                  <p className="stat-focus">{platform.focus}</p>
                </div>
                <div className="stat-numbers">
                  <div className="stat-item">
                    <span className="stat-number">{platform.courses}</span>
                    <span className="stat-label">Courses</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">{platform.hours}</span>
                    <span className="stat-label">Hours</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="learning-goals fade-in">
          <h3 className="subsection-title text-center">Upcoming Learning Goals</h3>
          <div className="goals-content">
            <div className="goal-item">
              <div className="goal-icon">🎯</div>
              <div className="goal-text">
                <h4>Advanced React & TypeScript</h4>
                <p>Deepening knowledge in React patterns, performance optimization, and TypeScript integration</p>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-icon">🚀</div>
              <div className="goal-text">
                <h4>Full-Stack Development</h4>
                <p>Learning Node.js, Express, and database technologies to become a full-stack developer</p>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-icon">☁️</div>
              <div className="goal-text">
                <h4>Cloud Technologies</h4>
                <p>Exploring AWS, deployment strategies, and modern DevOps practices</p>
              </div>
            </div>
            <div className="goal-item">
              <div className="goal-icon">🧪</div>
              <div className="goal-text">
                <h4>Testing & Quality Assurance</h4>
                <p>Learning testing frameworks, TDD practices, and code quality tools</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="certificates-cta fade-in">
          <h3>Always Learning, Always Growing</h3>
          <p>
            I believe in continuous learning and staying updated with the latest technologies. 
            These certificates represent my commitment to professional growth and excellence.
          </p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">
              Discuss Opportunities
            </a>
            <a href="#resume" className="btn btn-outline">
              View Full Resume
            </a>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {isModalOpen && selectedCertificate && (
        <div className="certificate-modal-overlay" onClick={handleCloseModal}>
          <div className="certificate-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedCertificate.title}</h3>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                ✕
              </button>
            </div>
            <div className="modal-content">
              <div className="certificate-preview">
                {selectedCertificate.certificateImage ? (
                  <img
                    src={selectedCertificate.certificateImage}
                    alt={`${selectedCertificate.title} Certificate`}
                    className="certificate-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="certificate-fallback" style={{ display: selectedCertificate.certificateImage ? 'none' : 'flex' }}>
                  <div className="placeholder-content">
                    <div className="placeholder-icon">📜</div>
                    <h3>{selectedCertificate.title}</h3>
                    <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
                    <p><strong>Date:</strong> {selectedCertificate.completionDate || selectedCertificate.date}</p>
                    <p><strong>Duration:</strong> {selectedCertificate.duration}</p>
                    <p><strong>Grade:</strong> {selectedCertificate.grade}</p>
                    <div className="fallback-message">
                      <p>📸 Certificate image will be displayed here</p>
                      <small>Add your certificate image to view it properly</small>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="certificate-info">
                <div className="info-section">
                  <h4>Certificate Details</h4>
                  <div className="detail-grid">
                    <div className="detail-row">
                      <span className="detail-label">Issuer:</span>
                      <span className="detail-value">{selectedCertificate.issuer}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Completion Date:</span>
                      <span className="detail-value">{selectedCertificate.completionDate || selectedCertificate.date}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Credential ID:</span>
                      <span className="detail-value">{selectedCertificate.credentialId}</span>
                    </div>
                    {selectedCertificate.duration && (
                      <div className="detail-row">
                        <span className="detail-label">Duration:</span>
                        <span className="detail-value">{selectedCertificate.duration}</span>
                      </div>
                    )}
                    {selectedCertificate.grade && (
                      <div className="detail-row">
                        <span className="detail-label">Grade/Score:</span>
                        <span className="detail-value">{selectedCertificate.grade}</span>
                      </div>
                    )}
                    {selectedCertificate.validityPeriod && (
                      <div className="detail-row">
                        <span className="detail-label">Validity:</span>
                        <span className="detail-value">{selectedCertificate.validityPeriod}</span>
                      </div>
                    )}
                    {selectedCertificate.instructorName && (
                      <div className="detail-row">
                        <span className="detail-label">Instructor:</span>
                        <span className="detail-value">{selectedCertificate.instructorName}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="info-section">
                  <h4>Skills Acquired</h4>
                  <div className="modal-skills">
                    {selectedCertificate.skills.map((skill, index) => (
                      <span key={index} className="modal-skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleDownloadCertificate(selectedCertificate.certificateFile, selectedCertificate.title)}
                  >
                    📥 Download PDF
                  </button>
                  <button 
                    className="btn btn-outline"
                    onClick={() => handleVerifyCertificate(selectedCertificate.verifyLink, selectedCertificate.credentialId)}
                  >
                    ✅ Verify Credential
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
