import React from 'react';

const areas = [
  { icon: "🧠", text: "AI/ML research" },
  { icon: "🌐", text: "MERN stack apps" },
  { icon: "📈", text: "Data Science analysis" },
  { icon: "🔌", text: "Embedded Systems prototypes" }
];

function Experience() {
  return (
    <div className="experience-container fade-in">
      <h2 className="section-title">Open to Collaborate</h2>
      <div className="experience-list">
        {areas.map((area, idx) => (
          <div className="experience-card glass-card" key={area.text}>
            <span className="experience-icon">{area.icon}</span>
            <span>{area.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;