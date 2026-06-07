import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


function TopBar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <div className="topbar">
      <Link to="/" className="topbar-home">
        <span className="arrow">←</span> Home
      </Link>
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light/dark mode">
        {theme === 'light' ? (
          <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        ) : (
          <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="2" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="22" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        )}
      </button>
    </div>
  );
}

function Home({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const navLinks = [
    { label: 'About', num: 'I', path: '/about' },
    { label: 'Projects', num: 'II', path: '/projects' },
    { label: 'Skills', num: 'III', path: '/skills' },
    { label: 'Experience', num: 'IV', path: '/experience' },
    { label: 'Resume', num: 'V', path: '/resume', external: true },
    { label: 'llm.txt', num: 'VI', path: '/llm.txt' },
    { label: 'Contact', num: 'VII', path: '/contact' },
  ];

  return (
    <div className="home-container">
      <h1 className="name">
        <span style={{ display: 'block' }}>Vansh</span>
        <span style={{ display: 'block' }}>Soni</span>
      </h1>
      <p className="tagline">SOFTWARE ENGINEER</p>

      <nav>
        {navLinks.map((link) => (
          link.external ? (
            <a key={link.label} href="https://drive.google.com/file/d/1OZiCDJoOHATLRMJhLw8iYr9R6S2iMbFD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <span className="label">{link.label}</span>
              <span className="dots"></span>
              <span className="numeral">{link.num}</span>
            </a>
          ) : (
            <Link key={link.label} to={link.path}>
              <span className="label">{link.label}</span>
              <span className="dots"></span>
              <span className="numeral">{link.num}</span>
            </Link>
          )
        ))}
      </nav>

      <footer>
        <span className="version">v. XIX</span>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle light/dark mode">
          {theme === 'light' ? (
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          ) : (
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

function About({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <div className="page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <header className="section-header">
        <div className="section-numeral">Section I</div>
        <h2 className="section-title">About Me</h2>
        <div className="section-rule"></div>
      </header>
      <div className="content-block">
        <div className="block-label">Introduction</div>
        <div className="bio-intro">
          <div className="profile-frame">
            <img src="https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/samurai.jpg" alt="Vansh Soni" />
          </div>
          <div className="bio-text-primary">
            <p>
              <span className="drop-cap">S</span><span className="highlight-text">oftware Engineer</span> and builder with experience developing scalable products across AI, automation, and developer tooling.
              Since late 2024, I have built enterprise workflow automation systems, agentic platforms, and developer infrastructure that transforms APIs into discoverable command-line tools for both developers and AI agents.
              I enjoy working across the stack, turning complex problems into practical products. Outside of work, I build and launch products, with a Product Hunt launch ranking #68 out of 1,200+ products, while documenting my journey and learnings on YouTube.
            </p>
          </div>
        </div>
        <div className="block-label">Expertise</div>
        <p>
          Specializes in LLM-powered backends, agentic workflows, and API-driven platforms. Comfortable across the full stack — from designing distributed system architecture and REST APIs to shipping production-ready AI features. Drawn to problems where automation can replace repetitive work and where good tooling makes developers faster.
        </p>
        <div className="block-label">Education</div>
        <div className="edu-item">
          <div className="edu-main">
            <span className="edu-org">United Institute of Technology</span>
            <span className="edu-date">Sep 2022 – Apr 2026</span>
          </div>
          <div className="edu-title">Bachelor of Science in AI/ML</div>
          <div className="edu-meta">
            <span>Gandhinagar, India</span>
            <span>GPA: 7.9</span>
          </div>
          <div className="edu-details">
            <strong>Courses</strong> AI, Machine Learning, Networking, Cloud Computing, Databases, Operating Systems, Data Structures
          </div>
        </div>
        <div className="block-label">Connect</div>
        <div className="connect-icons">
          <a href="mailto:vanshsoniofficial@gmail.com" className="connect-icon-link" title="Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a href="https://github.com/eark749" target="_blank" rel="noopener noreferrer" className="connect-icon-link" title="GitHub">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/vansh-soni-7b918524a/" target="_blank" rel="noopener noreferrer" className="connect-icon-link" title="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="https://x.com/_VanshSoni_" target="_blank" rel="noopener noreferrer" className="connect-icon-link" title="X">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16M4 20L20 4"/></svg>
          </a>
        </div>
      </div>
      <footer className="page-footer">Fin. v. XIX</footer>
    </div>
  );
}

function Contact({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [typedText, setTypedText] = useState('');
  const fullText = "THE WARRIOR AWAITS. INITIATE SIGNAL TRANSMISSION...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page fullscreen-page">
      <div className="warrior-duel-container">
        <TopBar theme={theme} toggleTheme={toggleTheme} />

        <div className="duel-interface">
          <div className="duel-header-center">
            <div className="duel-title">SECTION VI // CONTACT</div>
          </div>

          <div className="duel-options">
            <div className="duel-option-item">
              <div className="duel-option-label">Initiate</div>
              <ul className="duel-option-links">
                <li>
                  <a href="mailto:vanshsoniofficial@gmail.com">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    Email Transmission
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/vanshsoniofficial" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            <div className="duel-center-vs">VS</div>

            <div className="duel-option-item">
              <div className="duel-option-label">Explore</div>
              <ul className="duel-option-links">
                <li>
                  <a href="https://github.com/eark749" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    GitHub Scrolls
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/eark749" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                    X Signal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="warrior-status-bar">
          <div className="status-terminal">
            {typedText}<span className="terminal-cursor"></span>
          </div>
        </div>

        <div className="warrior-footer-text">Fin. v. XIX</div>
      </div>
    </div>
  );
}

function Experience({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const experiences = [
    { company: 'Dealberg', tagline: 'AI Engineering Leadership', date: 'December 2025 - Present', pos: 'Joint AI lead', loc: 'Bangalore, On-Site', ind: 'AI & Automation', desc: 'Led the design and development of AI-powered workflow automation systems, transforming manual school operations into automated processes through custom agents, backend services, and API integrations.' },
    { company: 'Rysysth technologies', tagline: 'Scalable AI Applications', date: 'July 2025 - December 2025', pos: 'Applied AI Engineer', loc: 'Ahmedabad, Hybrid', ind: 'AI Solutions', desc: 'Built and deployed end-to-end AI applications for clients, developing agentic workflows, backend APIs, and LLM-powered solutions tailored to business requirements.' },
    { company: 'Zensible', tagline: 'Automated AI Agents', date: 'April 2025 - July 2025', pos: 'AI Engineer - Contract', loc: 'Bangalore, Hybrid', ind: 'Product Engineering', desc: 'Architected core components of an AI-powered HR platform, building agentic workflows that automated employee support, HR operations, and internal knowledge retrieval.' },
    { company: 'Amaze Inc', tagline: 'Strategic AI Architecture', date: 'January 2025 - April 2025', pos: 'AI Consultant', loc: 'Bangalore, On-Site', ind: 'Consultancy', desc: 'Developed a Text-to-SQL platform enabling business users to query enterprise data using natural language, improving accessibility to operational insights across multiple branches.' },
    { company: 'Brand Shark', tagline: 'Data Insight Delivery', date: 'November 2024 - January 2025', pos: 'AI Engineer Intern', loc: 'Bangalore, On-Site', ind: 'Data Engineering', desc: 'Built data analytics dashboards and reporting solutions, transforming raw business data into actionable insights for decision-making.' }
  ];
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) setActiveIndex(index); else if (activeIndex === index) setActiveIndex(-1);
      });
    }, { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' });
    const items = document.querySelectorAll('.experience-item');
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [activeIndex]);
  return (
    <div className="page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <header className="section-header"><div className="section-numeral">Section IV</div><h2 className="section-title">Experience</h2><div className="section-rule"></div></header>
      <div className="timeline">{experiences.map((exp, index) => (
        <div key={index} data-index={index} className={`experience-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="exp-date-range">{exp.date}</div>
          <div className="exp-company">{exp.company}</div>
          <div className="exp-tagline">{exp.tagline}</div>
          <div className="exp-info-grid">
            <div><div className="exp-info-label">Position</div><div className="exp-info-value">{exp.pos}</div></div>
            <div><div className="exp-info-label">Location</div><div className="exp-info-value">{exp.loc}</div></div>
            <div><div className="exp-info-label">Industry</div><div className="exp-info-value">{exp.ind}</div></div>
          </div>
          <p className="exp-desc">{exp.desc}</p>
        </div>
      ))}</div>
      <footer className="page-footer">Fin. v. XIX</footer>
    </div>
  );
}

function ProjectThumb({ project }: { project: { name: string; img?: string; video?: string; desc: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => videoRef.current?.play();
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="project-thumb" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {project.video ? (
        <video ref={videoRef} src={project.video} muted loop playsInline preload="metadata" className="project-thumb-video" onContextMenu={(e) => e.preventDefault()} controlsList="nodownload nofullscreen" disablePictureInPicture />
      ) : (
        <img src={project.img} alt={project.name} />
      )}
    </div>
  );
}

function Projects({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const projectList: { name: string; url: string; href?: string; desc: string; img?: string; video?: string }[] = [
    {
      name: 'Aethron — API-to-CLI Platform',
      url: 'aethron.pages.dev',
      href: 'https://aethron.pages.dev/',
      img: '/aethron.png',
      desc: 'Converts API specifications into installable CLI commands, enabling developers and AI agents to discover, compose, and execute APIs without loading verbose tool definitions. Launched on Product Hunt — ranked #68 among 1,200+ products.',
    },
    {
      name: 'Jeddy — Job Form Fillup Co-pilot',
      url: 'github.com/eark749/job-form-copilot',
      href: 'https://github.com/eark749/job-form-copilot',
      video: 'https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/jeddy.mp4',
      desc: 'AI-powered browser co-pilot that automatically completes job application forms by extracting information from resumes and matching candidate profiles to job requirements.',
    },
    {
      name: 'GenUI Lens — Analytics for AI-Generated UI',
      url: 'genui-lens.pages.dev',
      href: 'https://genui-lens.pages.dev/',
      img: '/genui.png',
      desc: 'Open-source analytics platform for tracking interactions with AI-generated user interfaces. Built a FastAPI backend, Next.js dashboard, and TypeScript SDK capturing user events, conversation flows, and component-level engagement.',
    },
    {
      name: 'Open-Source Smart Waste Management',
      url: 'binthereapp.tech',
      href: 'https://binthereapp.tech/',
      img: '/binthere.png',
      desc: 'Open-source IoT platform combining Edge AI, sensor networks, and real-time analytics for smart waste collection. Built backend services and monitoring dashboards to process sensor data, track bin utilization, and support data-driven municipal operations.',
    },
  ];

  return (
    <div className="page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <header className="section-header">
        <div className="section-numeral">Section II</div>
        <h2 className="section-title">Projects</h2>
        <div className="section-rule"></div>
      </header>
      <div className="projects-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-entry">
            <ProjectThumb project={project} />
            <div className="project-meta">
              <span className="project-meta-name">{project.name}</span>
              <a
                href={project.href ?? `https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="project-meta-url"
              >
                Live →
              </a>
            </div>
            <p className="project-desc">{project.desc}</p>
          </div>
        ))}
      </div>
      <footer className="page-footer">Fin. v. XIX</footer>
    </div>
  );
}


function Skills({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const stats = [
    { label: 'Intellect', value: 96 },
    { label: 'Adaptability', value: 88 },
    { label: 'Strength', value: 82 },
    { label: 'Speed', value: 74 },
  ];

  const skillCategories = [
    { slot: '01', title: 'Languages', skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'Rust', 'Cypher Query Language'] },
    { slot: '02', title: 'AI / ML', skills: ['LLMs', 'RAG', 'Fine-tuning', 'CNNs', 'RNNs', 'Transformers', 'LangChain', 'AutoGen', 'Hugging Face', 'Google SDK', 'Claude SDK'] },
    { slot: '03', title: 'Backend', skills: ['FastAPI', 'REST APIs', 'WebSockets', 'Auth (JWT)', 'Microservices'] },
    { slot: '04', title: 'System Design', skills: ['API Design', 'Distributed Systems', 'Caching', 'Message Queues', 'Scalability', 'Load Balancing', 'Database Design', 'CDN'] },
    { slot: '05', title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'ChromaDB', 'Vector Databases', 'Data Warehousing'] },
    { slot: '06', title: 'DevOps & Cloud', skills: ['Docker', 'Git', 'AWS', 'GCP', 'Apache HTTP Server', 'Postman', 'nginx'] },
  ];

  return (
    <div className="page skills-page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <header className="section-header">
        <div className="section-numeral">Section III</div>
        <h2 className="section-title">Skills</h2>
        <div className="section-rule"></div>
      </header>

      <div className="character-sheet">
        <aside className="char-panel-left">
          <div className="char-panel-label">Warrior Profile</div>
          <div className="char-name">Vansh Soni</div>
          <div className="char-class">Class: AI Engineer</div>
          <div className="char-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="char-stat-row">
                <div className="char-stat-label">{stat.label}</div>
                <div className="char-stat-bar">
                  <div className="char-stat-fill" style={{ width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="char-panel-right">
          <div className="char-skills-grid">
            {skillCategories.map((cat) => (
              <div key={cat.slot} className="char-skill-card">
                <div className="char-skill-card-header">
                  <span className="char-skill-slot">Slot {cat.slot}</span>
                  <h3 className="char-skill-title">{cat.title}</h3>
                </div>
                <ul className="char-skill-list">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="char-skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>

      <div className="char-status-bar">
        <span className="char-status-segment">◈ Status: Optimal</span>
      </div>

      <footer className="page-footer">Fin. v. XIX</footer>
    </div>
  );
}

function LlmsTxt() {
  const content = `# Vansh Soni

## About

Software Engineer and builder with experience developing scalable products across AI, automation, and developer tooling. Since late 2024, built enterprise workflow automation systems, agentic platforms, and developer infrastructure that transforms APIs into discoverable command-line tools for both developers and AI agents. Product Hunt launch ranked #68 among 1,200+ products.

- Email: vanshsoniofficial@gmail.com
- GitHub: https://github.com/eark749
- LinkedIn: https://www.linkedin.com/in/vansh-soni-7b918524a/
- X: https://x.com/_VanshSoni_

## Education

- United Institute of Technology, Gandhinagar — B.Sc. AI/ML, GPA 7.9 (Sep 2022 – Apr 2026)

## Skills

- Languages: Python, TypeScript, JavaScript, SQL, C++, Rust, Cypher Query Language
- Backend: FastAPI, REST APIs, WebSockets, Auth (JWT), Microservices
- AI/ML: LLMs, RAG, Fine-tuning, CNNs, RNNs, Transformers, LangChain, AutoGen, Hugging Face, Google SDK, Claude SDK
- Databases: PostgreSQL, MySQL, ChromaDB, Vector Databases, Data Warehousing
- System Design: API Design, Distributed Systems, Caching, Message Queues, Scalability, Load Balancing, CDN
- DevOps & Cloud: Docker, Git, AWS, GCP, Apache HTTP Server, Postman, nginx

## Experience

- Joint AI Lead @ Dealberg (Dec 2025 – Present): Led design and development of AI-powered workflow automation systems for school operations via custom agents, backend services, and API integrations.
- Applied AI Engineer @ Rysysth Technologies (Jul 2025 – Dec 2025): Built and deployed end-to-end AI applications, agentic workflows, and LLM-powered solutions for clients.
- AI Engineer (Contract) @ Zensible (Apr 2025 – Jul 2025): Architected core components of AI-powered HR platform, building agentic workflows for employee support and internal knowledge retrieval.
- AI Consultant @ Amaze Inc (Jan 2025 – Apr 2025): Developed Text-to-SQL platform enabling business users to query enterprise data using natural language.
- AI Engineer Intern @ Brand Shark (Nov 2024 – Jan 2025): Built data analytics dashboards transforming raw business data into actionable insights.

## Projects

- [Aethron — API-to-CLI Platform](https://aethron.pages.dev): Converts API specifications into installable CLI commands for developers and AI agents. Ranked #68 on Product Hunt among 1,200+ products.
- [Jeddy — Job Form Fillup Co-pilot](https://github.com/eark749/job-form-copilot): AI-powered browser co-pilot that auto-fills job application forms by extracting resume data and matching to job requirements.
- [GenUI Lens — Analytics for AI-Generated UI](https://genui-lens.pages.dev): Open-source analytics platform for tracking interactions with AI-generated UIs. FastAPI backend, Next.js dashboard, TypeScript SDK.
- [Open-Source Smart Waste Management](https://binthereapp.tech): IoT platform combining Edge AI, sensor networks, and real-time analytics for smart waste collection.`;

  return (
    <div className="llms-page">
      <Link to="/" className="llms-back">← Home</Link>
      <pre className="llms-content">{content}</pre>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  const toggleTheme = () => { setTheme(theme === 'dark' ? 'light' : 'dark'); };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<Projects theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/skills" element={<Skills theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/experience" element={<Experience theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/llm.txt" element={<LlmsTxt />} />
        <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
