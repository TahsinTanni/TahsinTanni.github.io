import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { FiArrowUp, FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import './Footer.css';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const PROFILES = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tahsin-tanni-120156215/' },
  { label: 'GitHub', href: 'https://github.com/TahsinTanni' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=JfVqCU8AAAAJ&hl=en' },
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tahsin-tanni-120156215/', icon: <FaLinkedin /> },
  { label: 'GitHub', href: 'https://github.com/TahsinTanni', icon: <FaGithub /> },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=JfVqCU8AAAAJ&hl=en', icon: <SiGooglescholar /> },
  { label: 'Facebook', href: 'https://www.facebook.com/tahsintanni.tashu/', icon: <FaFacebook /> },
  { label: 'Instagram', href: 'https://www.instagram.com/__.__tashu__/', icon: <FaInstagram /> },
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-name">Tahsin Tanni</h3>
            <a href="mailto:tahsintanni009@gmail.com" className="footer-email">
              <FiMail /> tahsintanni009@gmail.com
            </a>
            <a href="mailto:tahsin.tajwar.tanni@g.bracu.ac.bd" className="footer-email">
              <FiMail /> tahsin.tajwar.tanni@g.bracu.ac.bd
            </a>
            <span className="footer-location">
              <FiMapPin /> Bangladesh
            </span>
          </div>

          <nav className="footer-col" aria-label="Footer navigation">
            <h4 className="footer-col-title">Navigate</h4>
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <button type="button" onClick={() => scrollTo(link.id)}>{link.label}</button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h4 className="footer-col-title">Profiles</h4>
            <ul>
              {PROFILES.map(p => (
                <li key={p.label}>
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    {p.label} <FiArrowUpRight className="footer-ext" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} Tahsin Tanni. All rights reserved.</p>
          <div className="footer-socials">
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-social-link"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <button type="button" className="footer-top-btn" onClick={() => scrollTo('home')}>
            Back to top <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
