import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus, SiExpress, SiNextdotjs, SiAssemblyscript, SiTypescript, SiSqlite, SiPytorch, SiSolidity, SiGit } from 'react-icons/si';
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
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Assembly", icon: <SiAssemblyscript color="#FF6B6B" /> },
  { name: "Express.js", icon: <SiExpress color="#68D391" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "SQLite", icon: <SiSqlite color="#0F80CC" /> },
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" /> },
  { name: "Solidity", icon: <SiSolidity color="#8A92B2" /> },
  { name: "Verilog", icon: <SiCplusplus color="#00599C" /> },
  { name: "Git", icon: <SiGit color="#F05032" /> },
];

const half = Math.ceil(skills.length / 2);
const rows = [skills.slice(0, half), skills.slice(half)];

function SkillChip({ skill, hidden }) {
  return (
    <div className="skill-card" aria-hidden={hidden || undefined}>
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">Tech Stack</h2>
      <div className="skills-marquee">
        {rows.map((row, r) => (
          <motion.div
            key={r}
            className={`marquee-row ${r % 2 ? 'reverse' : ''}`}
            initial={{ opacity: 0, x: r % 2 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: r * 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="marquee-track">
              {[0, 1, 2, 3].map(copy =>
                row.map(skill => (
                  <SkillChip key={`${skill.name}-${copy}`} skill={skill} hidden={copy > 0} />
                ))
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
