import React from 'react';
import './Projects.css';

const projects = [
  {
    title: "Blockchain Disaster Recovery Training DApp",
    description: "A decentralized app for disaster recovery training using blockchain smart contracts.",
    tech: ["Solidity", "React", "Ethereum", "Web3"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TahsinTanni/blockchain-dapp"
  },
  {
    title: "Machine Learning Project",
    description: "Advanced ML models for predictive analytics and classification tasks.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TahsinTanni/ml-project"
  },
  {
    title: "Thesis Management System",
    description: "A web platform for managing thesis submissions and reviews.",
    tech: ["MERN", "Node.js", "MongoDB", "React"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/TahsinTanni/thesis-management"
  },
  {
    title: "Future Project",
    description: "Stay tuned for more exciting projects!",
    tech: ["Coming Soon"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "#"
  }
];

function Projects() {
  return (
    <div className="projects-container fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div className="project-card glass-card" key={proj.title}>
            <div className="project-image-wrap">
              <img src={proj.image} alt={proj.title} className="project-image" />
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-badges">
              {proj.tech.map(t => (
                <span className="tech-badge" key={t}>{t}</span>
              ))}
            </div>
            {proj.link !== "#" && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn gradient-btn"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;