import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Project({ 
  title,
  description,
  technologies,
  imageUrl,
  githubLink 
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageUrl || "/api/placeholder/600/400"} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="flex gap-4">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group"
                title="View Code"
              >
                <Github 
                  size={24} 
                  className="text-gray-600 group-hover:text-gray-900 group-hover:scale-110 transition-all duration-300" 
                />
              </a>
            )}
            
          </div>
        </div>

        <p className="text-gray-600 mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies?.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}