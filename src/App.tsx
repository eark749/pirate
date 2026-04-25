import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { label: 'About', num: 'I', href: '#' },
    { label: 'Projects', num: 'II', href: '#' },
    { label: 'Skills', num: 'III', href: '#' },
    { label: 'Work', num: 'IV', href: '#' },
    { label: 'Resume', num: 'V', href: '#' },
    { label: 'Contact', num: 'VI', href: '#' },
  ];

  return (
    <div className="home-container">
      <h1 className="name">
        <span style={{ display: 'block' }}>Vansh</span>
        <span style={{ display: 'block' }}>Soni</span>
      </h1>
      <p className="tagline">AI Engineer</p>

      <nav>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            <span className="label">{link.label}</span>
            <span className="dots"></span>
            <span className="numeral">{link.num}</span>
          </a>
        ))}
      </nav>

      <footer>
        <span className="version">v. XIX</span>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light/dark mode">
          {theme === 'light' ? (
            /* Moon icon (show in light mode to toggle to dark) */
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
            /* Sun icon (show in dark mode to toggle to light) */
            <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="2" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="22" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          )}
        </button>
      </footer>
    </div>
  );
}

export default App;
