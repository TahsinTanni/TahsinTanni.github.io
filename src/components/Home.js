import React, { useEffect, useState } from 'react';
import './Home.css';
import cvFile from '../assets/CV_Tahsin copy.pdf';

const tagline = "CSE Student | Future Software Engineer";

function Typing({ text }) {
  const [typed, setTyped] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{typed}<span className="cursor">|</span></span>;
}

function handleScrollToProjects() {
  const el = document.getElementById('projects');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function Home() {
  return (
    <section className="hero-bg fade-in">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm Tahsin Tanni</h1>
          <p className="typing"><Typing text={tagline} /></p>
          <div className="hero-btns">
            <button
              className="gradient-btn"
              onClick={handleScrollToProjects}
              aria-label="Scroll to projects section"
            >
              View Projects
            </button>
            <a
              className="gradient-btn"
              href={cvFile}
              download="Tahsin_Tanni_CV.pdf"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="hero-illustration">
          {/* Simple developer SVG illustration */}
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
            <rect x="20" y="40" width="140" height="100" rx="18" fill="url(#devGradient)" />
            <rect x="40" y="60" width="100" height="60" rx="12" fill="#fff" />
            <rect x="55" y="75" width="70" height="10" rx="5" fill="#6C63FF" />
            <rect x="55" y="95" width="40" height="10" rx="5" fill="#8A79FF" />
            <circle cx="150" cy="50" r="12" fill="#6C63FF" opacity="0.18" />
            <circle cx="30" cy="130" r="8" fill="#8A79FF" opacity="0.18" />
            <defs>
              <linearGradient id="devGradient" x1="20" y1="40" x2="160" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6C63FF"/>
                <stop offset="1" stopColor="#8A79FF"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Home;