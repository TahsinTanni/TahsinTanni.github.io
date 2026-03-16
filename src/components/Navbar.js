// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Navbar.css';

// const NAV_LINKS = [
//   { id: 'home', label: 'Home' },
//   { id: 'about', label: 'About' },
//   { id: 'experience', label: 'Experience' },
//   { id: 'skills', label: 'Skills' },
//   { id: 'projects', label: 'Projects' },
//   { id: 'achievements', label: 'Achievements' },
//   // { id: 'cv', label: 'CV' },
//   { id: 'contact', label: 'Contact' },
// ];

// function getOffset() {
//   // Adjust this value if your navbar height changes
//   return 70;
// }

// function Navbar({ theme, setTheme, scrollToSection }) {
//   const [active, setActive] = useState('home');
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navRef = useRef();

//   // Scroll spy logic
//   useEffect(() => {
//     const handleScroll = () => {
//       let found = 'home';
//       for (const link of NAV_LINKS) {
//         const el = document.getElementById(link.id);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top - getOffset() <= 0) {
//             found = link.id;
//           }
//         }
//       }
//       setActive(found);
//     };
//     window.addEventListener('scroll', handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Smooth scroll with offset
//   const handleNavClick = (id) => {
//     setActive(id);
//     setMobileOpen(false);
//     const el = document.getElementById(id);
//     if (el) {
//       const y = el.getBoundingClientRect().top + window.scrollY - getOffset();
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   // Close mobile menu on resize
//   useEffect(() => {
//     const closeOnResize = () => {
//       if (window.innerWidth > 700) setMobileOpen(false);
//     };
//     window.addEventListener('resize', closeOnResize);
//     return () => window.removeEventListener('resize', closeOnResize);
//   }, []);

//   return (
//     <nav className={`navbar ${theme}`} ref={navRef}>
//       <div className="navbar-logo">Tahsin Tanni</div>
//       <ul className="navbar-links desktop">
//         {NAV_LINKS.map(link => (
//           <li key={link.id}>
//             <button
//               className={active === link.id ? 'active' : ''}
//               onClick={() => handleNavClick(link.id)}
//             >
//               {link.label}
//             </button>
//           </li>
//         ))}
//       </ul>
//       <button
//         className="theme-toggle"
//         aria-label="Toggle theme"
//         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//       >
//         {theme === 'light' ? '🌙' : '☀️'}
//       </button>
//       <button
//         className="hamburger"
//         aria-label="Open menu"
//         onClick={() => setMobileOpen(v => !v)}
//       >
//         <span />
//         <span />
//         <span />
//       </button>
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             className={`mobile-menu ${theme}`}
//             initial={{ x: '100%' }}
//             animate={{ x: 0 }}
//             exit={{ x: '100%' }}
//             transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//           >
//             <ul>
//               {NAV_LINKS.map(link => (
//                 <li key={link.id}>
//                   <button
//                     className={active === link.id ? 'active' : ''}
//                     onClick={() => handleNavClick(link.id)}
//                   >
//                     {link.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <button
//               className="mobile-menu-close"
//               aria-label="Close menu"
//               onClick={() => setMobileOpen(false)}
//             >
//               {/* Slider/drag icon for close */}
//               <span className="close-icon">
//                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <rect x="8" y="15" width="16" height="2.5" rx="1.25" fill="currentColor"/>
//                 </svg>
//               </span>
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  // { id: 'cv', label: 'CV' },
  { id: 'contact', label: 'Contact' },
];

function getOffset() {
  // Adjust this value if your navbar height changes
  return 70;
}

function Navbar({ theme, setTheme, scrollToSection }) {
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef();

  // Scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      let found = 'home';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - getOffset() <= 0) {
            found = link.id;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with offset
  const handleNavClick = (id) => {
    setActive(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - getOffset();
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Close mobile menu on resize
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 700) setMobileOpen(false);
    };
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <nav className={`navbar ${theme}`} ref={navRef}>
      <div className="navbar-logo">Tahsin Tanni</div>
      <ul className="navbar-links desktop">
        {NAV_LINKS.map(link => (
          <li key={link.id}>
            <button
              className={active === link.id ? 'active' : ''}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="theme-toggle"
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <button
        className="hamburger"
        aria-label="Open menu"
        onClick={() => setMobileOpen(v => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={`mobile-menu ${theme}`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button
                className="mobile-menu-close"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            <ul>
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <button
                    className={active === link.id ? 'active' : ''}
                    onClick={() => handleNavClick(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;