import React, { useRef, useEffect, useState } from 'react';
import './About.css';
import pic from '../assets/pic.jpg';

function About() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const top = ref.current.getBoundingClientRect().top;
      if (top < window.innerHeight - 80) setVisible(true);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section${visible ? ' fade-in-left' : ''}`}
    >
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-heading">About Me</h2>
          <p className="about-paragraph">
            Hi, I'm Tahsin Tanni, an undergraduate CSE student passionate about software development, AI, and building impactful solutions. I love learning, creating, and collaborating on projects that solve real-world problems.
          </p>
        </div>
        <div className="about-illustration">
          <img
            src={pic}
            alt="Tahsin Tanni Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </section>
  );
}

export default About;