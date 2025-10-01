import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import placeholder from '../assets/placeholder.jpg';
import { FiExternalLink, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Disaster Recovery Training Smart Contract",
    image: placeholder,
    description: "Smart contract for managing disaster recovery training programs.",
    tech: ["Solidity", "Ethereum", "Web3.js", "Metamask"],
    code: "https://github.com/TahsinTanni/Disaster-Recovery-Training-Smart-Contract"
  },
  {
    title: "VAE-based Deep Clustering with Uncertainty",
    image: placeholder,
    description: "Research project on deep clustering using Variational Autoencoders.",
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "pyTorch"],
    code: "https://github.com/TahsinTanni/vae-dec-clustering-uncertainty"
  },
  {
    title: "Thesis Management System",
    image: placeholder,
    description: "A web application to manage thesis.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    code: "https://github.com/Faishal-Monir/Thesis-Management-System"
  },
  {
    title: "Property Tracker",
    image: placeholder,
    description: "A web app to track property prices and trends.",
    tech: ["React", "Express", "MongoDB", "Node.js", "Hyperledger Fabric"],
    code: "https://github.com/TahsinTanni/property-tracker-fabric"
  },
  {
    title: "Rush N Dodge Game",
    image: placeholder,
    description: "A simple 2D game built with OpenGL.",
    tech: ["C++", "OpenGL", "GLFW", "GLM"],
    code: "https://github.com/TahsinTanni/rush-n-dodge"
  }
];

function Projects() {
  const carouselRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const cardsPerView = 2;
  const totalCards = projects.length + 1; // +1 for See More card
  const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

  const handleScrollRight = () => {
    let newIndex = scrollIndex + 1;
    if (newIndex > maxIndex) newIndex = maxIndex;
    setScrollIndex(newIndex);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / cardsPerView;
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth * cardsPerView,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollLeft = () => {
    let newIndex = scrollIndex - 1;
    if (newIndex < 0) newIndex = 0;
    setScrollIndex(newIndex);
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth / cardsPerView;
      carouselRef.current.scrollTo({
        left: newIndex * cardWidth * cardsPerView,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <div className="horizontal-carousel-wrapper">
        <button
          className="horizontal-scroll-btn-left"
          onClick={handleScrollLeft}
          disabled={scrollIndex === 0}
          aria-label="Scroll Left"
        >
          <FiChevronLeft size={32} />
        </button>
        <div className="horizontal-carousel" ref={carouselRef}>
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="horizontal-carousel-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="project-img-wrap">
                <img src={proj.image} alt={proj.title} className="project-img" />
              </div>
              <div className="project-info">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map(tag => (
                    <span className="tech-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-btns">
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn github-btn"
                  >
                    <FaGithub className="github-icon" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.a
            href="https://github.com/TahsinTanni?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="horizontal-carousel-card see-more-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="see-more-text">See More</span>
            <FiExternalLink size={32} />
          </motion.a>
        </div>
        <button
          className="horizontal-scroll-btn"
          onClick={handleScrollRight}
          disabled={scrollIndex === maxIndex}
          aria-label="Scroll Right"
        >
          <FiChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}

export default Projects;