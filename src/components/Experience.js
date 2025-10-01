import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    role: "Python tutor",
    company: "Zentorra",
    duration: "February 2025 - May 2025",
    description: "Tutored high school students in Python programming, covering basics to advanced topics. Helped students with coding assignments and projects.",
  },
  {
    role: "AI Research Assistant",
    company: "University CSE Lab",
    duration: "Jan 2025 - Present",
    description: "Assisted in research on machine learning models for healthcare data. Implemented Python scripts for data preprocessing and model evaluation.",
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.25, duration: 0.8, type: "spring" }
  }),
};

function Experience() {
  return (
    <div className="experience-container">
      <section id="experience" className="experience-section">
        <h2 className="experience-heading">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              className="timeline-card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={cardVariants}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="role">{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <span className="duration">{exp.duration}</span>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Experience;