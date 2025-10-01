import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

function getInitialTheme() {
  const saved = localStorage.getItem('theme');
  return saved ? saved : 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Smooth scroll handler for Navbar links
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} scrollToSection={scrollToSection} />
      <div className="main-content">
        <section id="home"><Home theme={theme} /></section>
        <section id="about"><About theme={theme} /></section>
        <section id="skills"><Skills theme={theme} /></section>
        <section id="projects"><Projects theme={theme} /></section>
        <section id="experience"><Experience theme={theme} /></section>
        <section id="contact"><Contact theme={theme} /></section>
      </div>
    </>
  );
}

export default App;
