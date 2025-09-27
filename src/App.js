import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './index.css';

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <span role="img" aria-label="Dark mode">🌙</span>
      ) : (
        <span role="img" aria-label="Light mode">☀️</span>
      )}
    </button>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <nav className={`navbar ${theme}`}>
        <div className="navbar-logo">Tahsin Tanni</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/skills" element={<Skills theme={theme} />} />
          <Route path="/projects" element={<Projects theme={theme} />} />
          <Route path="/experience" element={<Experience theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
