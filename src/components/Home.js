import React, { useEffect, useState } from 'react';
import profilePic from '../assets/pic.jpg';
import './Home.css';

const introText = "CSE Student | AI/ML | MERN Stack | Data Science | Embedded Systems";

function Typing({ text }) {
  const [typed, setTyped] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);
  return <span>{typed}<span className="cursor">|</span></span>;
}

function Particles() {
  return (
    <div className="particles-bg">
      {[...Array(18)].map((_, i) => (
        <div key={i} className={`particle particle-${i}`} />
      ))}
    </div>
  );
}

function Home({ theme }) {
  return (
    <div className={`home-bg fade-in ${theme}`}>
      <Particles />
      <div className="home-hero">
        <div className="profile-pic-wrap">
          <img
            src={profilePic}
            alt="Tahsin Tanni"
            className="profile-pic"
          />
        </div>
        <div className="hero-text">
          <h1 className="home-title">Hi, I'm Tahsin Tanni</h1>
          <p className="typing"><Typing text={introText} /></p>
        </div>
      </div>
    </div>
  );
}

export default Home;