import React, { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiExpress, SiNextdotjs, SiMysql, SiAssemblyscript } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: "React", icon: <FaReact color="#61DBFB" />, percentage: 95 },
  { name: "Node.js", icon: <FaNodeJs color="#8CC84B" />, percentage: 90 },
  { name: "Python", icon: <FaPython color="#3776AB" />, percentage: 88 },
  { name: "C++", icon: <SiCplusplus color="#00599C" />, percentage: 93 },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" />, percentage: 96 },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, percentage: 94 },
  { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" />, percentage: 91 },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, percentage: 87 },
  { name: "Assembly", icon: <SiAssemblyscript color="#FF6B6B" />, percentage: 85 },
  { name: "Express.js", icon: <SiExpress color="#68D391" />, percentage: 89 },
  { name: "Next.js", icon: <SiNextdotjs color="#000000" />, percentage: 88 },
  { name: "MySQL", icon: <SiMysql color="#E97627" />, percentage: 82 },
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

const CircularProgress = ({ percentage, isVisible }) => {
  const radius = 45;
  const strokeWidth = 6;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`circular-progress ${isVisible ? 'visible' : ''}`}>
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e3f2fd"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#38bdf8"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          style={{
            strokeDashoffset: isVisible ? strokeDashoffset : circumference,
            transition: 'stroke-dashoffset 1s ease-in-out'
          }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="percentage-text">{percentage}%</div>
    </div>
  );
};

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="skill-content">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
              <CircularProgress 
                percentage={skill.percentage} 
                isVisible={hoveredSkill === skill.name}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;