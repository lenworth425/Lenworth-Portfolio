import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import './ProjectTile.css'; 

export default function Project({ 
  title,
  description,
  technologies,
  imageUrl,
  githubLink 
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-card">
      <img 
        src={imageError ? "/api/placeholder/600/400" : imageUrl} 
        alt={title}
        className="project-image"
        onError={() => setImageError(true)}
      />

      <div className="project-overlay">
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{title}</h3>
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                title="View Code"
              >
                <FaGithub size={24} className="github-icon" />
              </a>
            )}
          </div>

          <p className="project-description">{description}</p>

          <div className="project-technologies">
            {technologies?.map((tech, index) => (
              <span key={index} className="technology-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}