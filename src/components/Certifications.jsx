import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const basePath = import.meta.env.BASE_URL;
  const getImagePath = (imageName) => `${basePath}images/${imageName}`;

  const certifications = [
    {
      id: 1,
      title: 'Introduction to HTML5',
      issuer: 'University of Michigan',
      image: getImagePath('Introduction to HTML5.jpg'),
      downloadUrl: getImagePath('Introduction to HTML5.jpg'),
      date: '2023',
      description: 'Comprehensive introduction to HTML5 fundamentals and best practices'
    },
    {
      id: 2,
      title: 'Introduction to Front-End Development',
      issuer: 'Meta',
      image: getImagePath('Introduction to Front-End Development.jpg'),
      downloadUrl: getImagePath('Introduction to Front-End Development.jpg'),
      date: '2023',
      description: 'Complete introduction to modern front-end development practices'
    },
    {
      id: 3,
      title: 'HTML, CSS & JavaScript',
      issuer: 'Johns Hopkins University',
      image: getImagePath('HTML,CSS,JS.png'),
      downloadUrl: getImagePath('HTML,CSS,JS.png'),
      date: '2023',
      description: 'Full stack web development with HTML, CSS, and JavaScript'
    },
    {
      id: 4,
      title: 'Server-side JavaScript with Node.js',
      issuer: 'The University of Edinburgh',
      image: getImagePath('Server side JavaScript with Node js.jpg.png'),
      downloadUrl: getImagePath('Server side JavaScript with Node js.jpg.png'),
      date: '2023',
      description: 'Backend development using Node.js'
    },
    {
      id: 5,
      title: 'Building Web Applications in PHP',
      issuer: 'University of Michigan',
      image: getImagePath('PHP moocsBuilding Web Applications in PHP.jpg.png'),
      downloadUrl: getImagePath('PHP moocsBuilding Web Applications in PHP.jpg.png'),
      date: '2023',
      description: 'Full-stack web application development using PHP'
    },
    {
      id: 6,
      title: 'Oracle Database Course',
      issuer: 'Oracle University',
      image: getImagePath('Oracle Database Course Online.jpg'),
      downloadUrl: getImagePath('Oracle Database Course Online.jpg'),
      date: '2023',
      description: 'Oracle DB & SQL programming'
    },
    {
      id: 7,
      title: 'IBM Professional Certificate',
      issuer: 'IBM',
      image: getImagePath('IBM Certificate.jpg'),
      downloadUrl: getImagePath('IBM Certificate.jpg'),
      date: '2024',
      description: 'Professional certification in tech'
    },
    {
      id: 8,
      title: 'Infosys Springboard',
      issuer: 'Infosys Limited',
      image: getImagePath('infosys Springboard.jpg'),
      downloadUrl: getImagePath('infosys Springboard.jpg'),
      date: '2024',
      description: 'Skill development program'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        
        <div className="section-header text-center">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications that validate my skills and expertise
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              
              <div className="card-inner">
                
                {/* Front */}
                <div className="card-front">
                  <div className="cert-icon">🏆</div>
                  <h4 className="cert-title">{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                  <p className="cert-description">{cert.description}</p>

                  <div className="cert-actions">
                    <button
                      onClick={() => window.open(cert.image, '_blank')}
                      className="cert-btn view-btn" >
                      👁️ View
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

                {/* Back */}
                <div className="card-back">
                  <div className="cert-image-container">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="cert-image"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
