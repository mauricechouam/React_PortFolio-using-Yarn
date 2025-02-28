import React from 'react';
import '../styles/Projects.css';  // Importing the component-specific styles for Projects

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A short description of what Project 1 is about. It could be a React app, a static website, or something else.",
      link: "https://github.com/yourusername/project1"
    },
    {
      title: "Project 2",
      description: "A short description of what Project 2 is about. It could be an API, a full-stack app, etc.",
      link: "https://github.com/yourusername/project2"
    },
    {
      title: "Project 3",
      description: "A short description of what Project 3 is about, highlighting the tools and tech used.",
      link: "https://github.com/yourusername/project3"
    },
    {
      title: "Project 4",
      description: "A short description of Project 4. This project showcases your skills in a specific area.",
      link: "https://github.com/yourusername/project4"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
