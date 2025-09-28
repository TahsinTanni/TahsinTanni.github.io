import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Blockchain Disaster Recovery Training DApp",
    description: "A decentralized app for disaster recovery training using blockchain technology.",
    tech: ["Solidity", "React", "Ethereum", "Web3"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TahsinTanni/Disaster-Recovery-Training-Smart-Contract"
  },
  {
    title: "Machine Learning Project",
    description: "Advanced ML model for predictive analytics and data visualization.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TahsinTanni/vae-dec-clustering-uncertainty"
  },
  {
    title: "Thesis Management System",
    description: "A web platform for managing academic thesis submissions and reviews.",
    tech: ["MERN Stack", "Redux", "Node.js"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Faishal-Monir/Thesis-Management-System"
  }
];

function Projects({ theme }) {
  return (
    <div className="projects-container fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className={`project-card glass-card ${theme}`} key={proj.title}>
            <img src={proj.image} alt={proj.title} className="project-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-badges">
              {proj.tech.map(t => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn gradient-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;