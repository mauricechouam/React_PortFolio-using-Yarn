import React from 'react';
import '../styles/Projects.css';  // Importing the component-specific styles for Projects

const Projects = () => {
  const projects = [
    {
      title: "COVID-19 Tracker",
      description: "A web application that provides real-time location-based COVID-19 updates, global news, and local resources. Built using HTML, CSS, JavaScript, jQuery, and multiple APIs.",
      link: "https://github.com/mauricechouam/COVID-19-Tracker"
    },
    {
      title: "Weather Dashboard",
      description: "A dashboard that provides real-time weather data and forecasts for multiple cities using OpenWeather API. Built with jQuery, Moment.js, and REST APIs.",
      link: "https://github.com/mauricechouam/Weather-Dashboard"
    },
    {
      title: "My Portfolio Temaplate",
      description: "This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.",
      link: "https://github.com/mauricechouam/React_PortFolio-using-Yarn"
    },
    {
      title: "Emoji runner",
      description: "A fun twist on the classic runner game featuring a secure user login system. Player profiles and high scores are stored in a database. Built with P5.js, Express, and MySQL.",
      link: "https://github.com/mauricechouam/Emoji-Runner"
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
