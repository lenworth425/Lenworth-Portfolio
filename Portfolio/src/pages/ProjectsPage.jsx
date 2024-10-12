import React from 'react';
import Project from '../components/ProjectTile';
import projects from '../components/UI/projects/ProjectsCard';

const ProjectGallery = () => {
    return (
        <div >
            <div style={{margin: '4rem', display:'flex', flexWrap:'wrap', justifyContent: 'space-between', gap: '40px'}} >
                {projects.map((project) => (
                    <Project 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        technologies={project.technologies} 
                        imageUrl={project.imageUrl} 
                        githubLink={project.githubLink} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectGallery;