import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: "React", icon: <FaReact color="#61DBFB" /> },
  { name: "Node.js", icon: <FaNodeJs color="#8CC84B" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 40 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.13, type: "spring", stiffness: 500, damping: 22 }
  }),
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Tech Stack</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px #6C63FF" }}
            className="skill-card"
          >
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;