import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';
import { FaCertificate, FaAward, FaMedal } from 'react-icons/fa';
import cse471Certificate from '../assets/certificates/cse471-project-showcase.jpg';
import eliteResearchCertificate from '../assets/certificates/elite-research-training.jpg';
import webDevelopmentCertificate from '../assets/certificates/intermediate-web-development.jpg';
import kaggleCertificate from '../assets/certificates/kaggle-intro-ml.jpg';
import promptEngineerCertificate from '../assets/certificates/ai-prompt-engineer.jpg';

const achievements = [

  {
    icon: <FaMedal />,
    title: "2nd Runner-up - CSE471 Project Demonstration",
    description: "Achieved 2nd Runner-up at the CSE471 Project Demonstration with ThesisFlow, a comprehensive Thesis Management System designed to centralize and streamline the entire thesis lifecycle at BRAC University, featuring role-based dashboards, progress tracking, structured feedback, and AI-powered academic guidance.",
    certificate: cse471Certificate,
    certificateAlt: "Certificate of appreciation for CSE471 Project Showcase",
  },
  {
    icon: <FaCertificate />,
    title: "Certificate of Training — Research Training & Competition 2026",
    description: "Completed the ELITE Research Lab Research Training programme (held September 2–6, 2026) and contributed as a leader of Team 13 to a research paper submitted to the lab's research competition.",
    certificate: eliteResearchCertificate,
    certificateAlt: "Certificate of training from ELITE Research Lab",
  },
  {
    icon: <FaCertificate />,
    title: "Intermediate Web Development Certification",
    description: "Successfully completed an Intermediate Web Development course during the Residential Semester at BRAC University, gaining practical skills in designing responsive websites.",
    certificate: webDevelopmentCertificate,
    certificateAlt: "Intermediate web development certification from BRAC University",
  },
  {
    icon: <FaCertificate />,
    title: "Intro to Machine Learning - Kaggle",
    description: "Completed the Intro to Machine Learning course on Kaggle, gaining foundational knowledge in data science and machine learning with practical applications to real-world problems.",
    certificate: kaggleCertificate,
    certificateAlt: "Kaggle certificate of completion for Intro to Machine Learning",
  },
  {
    icon: <FaAward />,
    title: "AI Prompt Engineer™ Certification",
    description: "Completed AI Prompt Engineer™ (AI CERTs™) via AgentX Bangladesh (Netcom Learning & Microsoft). Skills: advanced prompt design (zero/few shots, chain of thought), PFSET/PAIPS, IPS, XML steering, agent workflows, and ethical AI use.",
    certificate: promptEngineerCertificate,
    certificateAlt: "AI Prompt Engineer certification",
  },
  
];

const AUTO_ROTATE_DELAY = 2000;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" }
  }),
};

function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isAutoPaused || prefersReducedMotion) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex(currentIndex => (currentIndex + 1) % achievements.length);
    }, AUTO_ROTATE_DELAY);

    return () => clearInterval(timer);
  }, [isAutoPaused]);

  return (
    <div className="achievements-container">
      <section id="achievements" className="achievements-section">
        <h2 className="achievements-heading">Achievements</h2>
        <div
          className="achievements-gallery"
          onMouseEnter={() => setIsAutoPaused(true)}
          onMouseLeave={() => setIsAutoPaused(false)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsAutoPaused(false);
            }
          }}
        >
          {achievements.map((achievement, i) => (
            <motion.a
              href={achievement.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className={`achievement-card ${activeIndex === i ? 'active' : ''}`}
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              animate={{ flexGrow: activeIndex === i ? 5 : 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 24 }}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => {
                setIsAutoPaused(true);
                setActiveIndex(i);
              }}
              onClick={(event) => {
                if (activeIndex !== i) {
                  event.preventDefault();
                  setIsAutoPaused(true);
                  setActiveIndex(i);
                }
              }}
              aria-label={`View certificate for ${achievement.title}`}
            >
              <img
                src={achievement.certificate}
                alt={achievement.certificateAlt}
                className="achievement-image"
                loading="lazy"
              />
              <div className="achievement-shade" />
              <div className="achievement-content">
                <div className="achievement-meta">
                  <span className="achievement-icon">{achievement.icon}</span>
                  <h3 className="achievement-title">{achievement.title}</h3>
                </div>
                <motion.p
                  className="achievement-description"
                  animate={{
                    opacity: activeIndex === i ? 1 : 0,
                    y: activeIndex === i ? 0 : 10
                  }}
                  transition={{ duration: 0.25 }}
                >
                  {achievement.description}
                </motion.p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Achievements;
