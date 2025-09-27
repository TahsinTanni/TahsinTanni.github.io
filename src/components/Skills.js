import React from 'react';

const skills = [
  {
    category: "Programming",
    icon: "💻",
    items: [
      { name: "C", level: 90 },
      { name: "C++", level: 85 },
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 }
    ]
  },
  {
    category: "AI/ML",
    icon: "🤖",
    items: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Scikit-learn", level: 85 }
    ]
  },
  {
    category: "Data Science",
    icon: "📊",
    items: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Matplotlib", level: 80 }
    ]
  },
  {
    category: "Embedded Systems",
    icon: "🔌",
    items: [
      { name: "Arduino", level: 85 },
      { name: "STM32", level: 70 }
    ]
  },
  {
    category: "MERN Stack",
    icon: "🌐",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "Express", level: 75 },
      { name: "React", level: 90 },
      { name: "Node.js", level: 80 }
    ]
  }
];

function Skills() {
  return (
    <div className="skills-container fade-in">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card glass-card" key={group.category}>
            <h3>
              <span className="skill-icon">{group.icon}</span> {group.category}
            </h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${item.level}%` }}></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;