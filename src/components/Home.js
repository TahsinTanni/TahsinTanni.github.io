import React, { useEffect, useState } from 'react';
import './Home.css';
import cvFile from '../assets/CV_Tahsin copy.pdf';
const tagline = "Undergraduate CSE Student | ML Enthusiast & Aspiring Web/Full-Stack Developer";

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
          <img
            src={`${process.env.PUBLIC_URL}/pic.jpg`}
            alt="Tahsin Tanni Profile"
            className="profile-pic"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '20px',
              objectFit: 'cover',
              boxShadow: '0 8px 24px rgba(108, 99, 255, 0.2)',
              border: '3px solid rgba(108, 99, 255, 0.1)'
            }}
            onLoad={() => {
              console.log('Profile image loaded successfully in Home');
            }}
            onError={(e) => {
              console.log('Failed to load image in Home, showing fallback');
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;