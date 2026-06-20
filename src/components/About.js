import React, { useRef, useEffect, useState } from 'react';
import './About.css';

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
            I'm a Computer Science and Engineering graduate from BRAC University with experience spanning AI automation, machine learning research, and full-stack web development. I enjoy building intelligent systems and transforming complex ideas into practical, user-focused solutions.
          </p>
          <p className="about-paragraph">
            Currently, I work as an AI Automation Trainee at 180 RE, where I design LLM-powered workflows using n8n and third-party integrations. Alongside industry work, I have conducted research on improving the robustness of large language models against weight noise and quantization attacks.
          </p>
          <p className="about-paragraph">
            My interests lie in artificial intelligence, machine learning, agentic systems, full-stack development, blockchain, and building impactful technologies that solve real-world problems.
          </p>
        </div>
        <div className="about-illustration">
          {/* Profile picture moved to Home section */}
        </div>
      </div>
    </section>
  );
}

export default About;