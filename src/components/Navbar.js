import React from 'react';
import './Navbar.css';

function Navbar({ theme, setTheme, scrollToSection }) {
  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-logo">Tahsin Tanni</div>
      <ul className="navbar-links">
        <li><button onClick={() => scrollToSection('home')}>Home</button></li>
        <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  );
}

export default Navbar;