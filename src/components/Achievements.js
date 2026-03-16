import React from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';
import { FaTrophy, FaCertificate, FaAward, FaMedal } from 'react-icons/fa';

const achievements = [

  {
    icon: <FaMedal />,
    title: "2nd Runner-up - CSE471 Project Demonstration",
    description: "Achieved 2nd Runner-up at the CSE471 Project Demonstration with ThesisFlow, a comprehensive Thesis Management System designed to centralize and streamline the entire thesis lifecycle at BRAC University, featuring role-based dashboards, progress tracking, structured feedback, and AI-powered academic guidance.",
  },
  {
    icon: <FaCertificate />,
    title: "Intermediate Web Development Certification",
    description: "Successfully completed an Intermediate Web Development course during the Residential Semester at BRAC University, gaining practical skills in designing responsive websites.",
  },
  {
    icon: <FaCertificate />,
    title: "Intro to Machine Learning - Kaggle",
    description: "Completed the Intro to Machine Learning course on Kaggle, gaining foundational knowledge in data science and machine learning with practical applications to real-world problems.",
  },
  {
    icon: <FaAward />,
    title: "AI Prompt Engineer™ Certification",
    description: "Completed AI Prompt Engineer™ (AI CERTs™) via AgentX Bangladesh (Netcom Learning & Microsoft). Skills: advanced prompt design (zero/few shots, chain of thought), PFSET/PAIPS, IPS, XML steering, agent workflows, and ethical AI use.",
  },
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
  }),
};

function Achievements() {
  return (
    <div className="achievements-container">
      <section id="achievements" className="achievements-section">
        <h2 className="achievements-heading">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, i) => (
            <motion.div
              className="achievement-card"
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(56, 189, 248, 0.3)" }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Achievements;