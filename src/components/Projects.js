import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import placeholder from '../assets/placeholder.jpg';
import { FiExternalLink, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "ThesisFlow - Thesis Management System",
    image: placeholder,
    description: "A web application to manage thesis submissions, reviews, and approvals. Features include student-supervisor collaboration, document management, progress tracking, and automated workflow for thesis evaluation and defense scheduling.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    code: "https://github.com/Faishal-Monir/Thesis-Management-System",
    live: "https://thesis-flow-delta.vercel.app/"
  },
  {
    title: "DataSynthis Job Task — Hugging Face Space",
    image: placeholder,
    description: "Developed an interactive Hugging Face Space demonstrating data synthesis using generative AI techniques for job-related analytics. Enabled dynamic user interaction for synthetic data generation and visualization through a web-based interface.",
    tech: ["pandas", "numpy", "matplotlib", "statsmodels", "scikit-learn", "prophet", "tensorflow", "gradio", "Hugging Face Hub"],  
    live: "https://huggingface.co/spaces/tahsintajwar/DataSynthis_Job_task"
  },
  {
    title: "Realtime Collaborative Playlist",
    image: placeholder,
    description: "Built a real-time collaborative music playlist application with Server-Sent Events (SSE) for live synchronization, drag-and-drop reordering using fractional indexing, voting system, and now playing simulation.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Prisma ORM", "SQLite", "Tailwind CSS 4", "Framer Motion"],
    code: "https://github.com/Nafiz68/Realtime-Collaborative-Playlist",
    live: "https://realtime-collaborative-playlist.vercel.app/"
  },
  
  {
    title: "CineMetrics – MLproject",
    image: placeholder,
    description: "A machine learning project designed to empower film producers and stakeholders with predictive insights into audience response.",
    tech: ["pandas", "NumPy", "scikit-learn", "matplotlib", "seaborn"],
    code: "https://github.com/TahsinTanni/CineMetrics_MLproject"
  },
  {
    title: "VAE-based Deep Clustering with Uncertainty",
    image: placeholder,
    description: "Research project on deep clustering using Variational Autoencoders with uncertainty quantification. Implements advanced neural network architectures for unsupervised learning and cluster analysis with probabilistic modeling.",
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "pyTorch"],
    code: "https://github.com/TahsinTanni/vae-dec-clustering-uncertainty"
  },
  {
    title: "Disaster Recovery Training Smart Contract",
    image: placeholder,
    description: "Smart contract for managing disaster recovery training programs on the Ethereum blockchain. Enables transparent tracking of training sessions, certification issuance, and participant verification with decentralized record-keeping.",
    tech: ["Solidity", "Ethereum", "Web3.js", "Metamask"],
    code: "https://github.com/TahsinTanni/Disaster-Recovery-Training-Smart-Contract"
  },
  
  {
    title: "Property Tracker",
    image: placeholder,
    description: "A web application to track property prices, market trends, and real estate analytics. Built on Hyperledger Fabric blockchain for secure and immutable property transaction records and ownership history.",
    tech: ["React", "Express", "MongoDB", "Node.js", "Hyperledger Fabric"],
    code: "https://github.com/TahsinTanni/property-tracker-fabric"
  },
  
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
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn live-btn"
                    >
                      <FiExternalLink className="live-icon" />
                    </a>
                  )}
                  {proj.code && (
                    <a
                      href={proj.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github-btn"
                    >
                      <FaGithub className="github-icon" />
                    </a>
                  )}
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