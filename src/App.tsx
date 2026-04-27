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
    { label: 'Contact', num: 'VI', path: '/contact' },
  ];

  return (
    <div className="home-container">
      <h1 className="name">
        <span style={{ display: 'block' }}>Vansh</span>
        <span style={{ display: 'block' }}>Soni</span>
      </h1>
      <p className="tagline">AI ENGINEER</p>

      <nav>
        {navLinks.map((link) => (
          link.external ? (
            <a key={link.label} href="https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/vansh_soni.pdf" target="_blank" rel="noopener noreferrer">
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
              <span className="drop-cap">A</span>pplied <span className="highlight-text">AI Engineer</span> specializing in developing and deploying end-to-end AI/ML and custom solutions.
              Expertise includes LLMs (RAG, Fine-tuning), Deep Learning (CNN, RNN, Transformers), and cloud platforms like AWS and Azure.
            </p>
          </div>
        </div>
        <div className="block-label">Expertise</div>
        <p>
          Proficient in key agent and orchestration frameworks, including LangChain, LlamaIndex, Multiple Agent Development Kit (ADK), and CrewAI.
          Proven track record of delivering high-impact systems, such as HR automation bots and production-ready RAG Q&A systems,
          utilizing Python and FastAPI for scalable AI agent orchestration.
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
            <span>GPA: 7.5</span>
          </div>
          <div className="edu-details">
            <strong>Courses</strong> AI, Machine Learning, Networking, Cloud Computing, Databases, Operating Systems, Data Structures
          </div>
        </div>
        <div className="block-label">Connect</div>
        <div className="contact-row">
          <span className="contact-label">Email</span>
          <a href="mailto:vanshsoniofficial@gmail.com" className="contact-value">vanshsoniofficial@gmail.com</a>
        </div>
        <div className="contact-row">
          <span className="contact-label">Mobile</span>
          <a href="tel:+919104039861" className="contact-value">+91 910 403 9861</a>
        </div>
        <div className="contact-row">
          <span className="contact-label">GitHub</span>
          <a href="https://github.com/eark749" target="_blank" rel="noopener noreferrer" className="contact-value">github.com/eark749</a>
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
    { company: 'Dealberg', tagline: 'AI Engineering Leadership', date: 'December 2025 - Present', pos: 'Joint AI lead', loc: 'Bangalore, On-Site', ind: 'AI & Automation', desc: 'I design, build, and deploy AI-powered systems and automation tools—handling backend architecture, integrations, and client-facing product delivery end-to-end.' },
    { company: 'Rysysth technologies', tagline: 'Scalable AI Applications', date: 'July 2025 - December 2025', pos: 'Applied AI Engineer', loc: 'Ahmedabad, Hybrid', ind: 'AI Solutions', desc: 'Building end-to-end AI powered application for clients based on their needs.' },
    { company: 'Zensible', tagline: 'Automated AI Agents', date: 'April 2025 - July 2025', pos: 'AI Engineer', loc: 'Bangalore, Hybrid', ind: 'Product Engineering', desc: 'Built AI applications delivering business value; Created HRMS bot for HR automation and employee chat-based queries.' },
    { company: 'Amaze Inc', tagline: 'Strategic AI Architecture', date: 'January 2025 - April 2025', pos: 'AI Consultant', loc: 'Bangalore, On-Site', ind: 'Consultancy', desc: 'Transformed complex datasets into strategic insights and architected custom AI solutions for data-driven decisions.' },
    { company: 'Brand Shark', tagline: 'Data Insight Delivery', date: 'November 2024 - January 2025', pos: 'AI Engineer Intern', loc: 'Bangalore, On-Site', ind: 'Data Engineering', desc: 'Analyzed and visualized data, delivered actionable insights to support business decisions.' }
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
      name: 'Jeddy — Job Form Fillup Co-pilot',
      url: 'github.com/eark749/job-form-copilot',
      href: 'https://github.com/eark749/job-form-copilot',
      video: 'https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/jeddy.mp4',
      desc: 'AI co-pilot that auto-fills job application forms by reading your resume and matching it to job requirements — cutting application time from minutes to seconds.',
    },
    {
      name: 'Rootlayer — CLI-MCP Commands',
      url: 'aethron.pages.dev',
      href: 'https://aethron.pages.dev/',
      video: 'https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/root-layer1.mp4',
      desc: 'CLI tool that exposes MCP commands to drastically reduce LLM context window usage — letting agents navigate codebases efficiently without burning tokens on full file reads.',
    },
    {
      name: 'LiveKit Voice Agents',
      url: 'test-1nv47b.sandbox.livekit.io',
      href: 'https://test-1nv47b.sandbox.livekit.io/',
      video: 'https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/video-agent.mp4',
      desc: 'Production-grade real-time voice AI system built on WebRTC achieving sub-500ms latency using VAD + semantic turn detection, preemptive LLM generation, and optimized STT → LLM → TTS streaming pipeline.',
    },
    {
      name: 'Agent Flowchart',
      url: 'View PDF →',
      href: 'https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/agent-chart.pdf',
      video: 'https://pub-791252e542b34b9b85d72f368c5c362f.r2.dev/agent-flowchart.mp4',
      desc: 'Visual flowchart system mapping a company\'s journey from its current phase to becoming fully AI-native — charting agent deployments, automation layers, and transformation milestones.',
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
                {project.url}
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
    { slot: '01', title: 'Languages', skills: ['Python', 'SQL', 'R', 'C++', 'Rust', 'Cypher Query Language'] },
    { slot: '02', title: 'AI / ML', skills: ['Neural Networks', 'Fine-tuning', 'LLM', 'RAG', 'CNN', 'RNN', 'Transformers'] },
    { slot: '03', title: 'Frameworks', skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'LangChain', 'Hugging Face', 'FastAPI'] },
    { slot: '04', title: 'Data Tools', skills: ['Power BI', 'Tableau', 'RStudio', 'Excel', 'Jupyter', 'WEKA', 'Pandas'] },
    { slot: '05', title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'ChromaDB', 'Vector DB', 'Data Warehouse'] },
    { slot: '06', title: 'DevOps & Cloud', skills: ['Docker', 'Git', 'AWS', 'Azure', 'Apache HTTP Server', 'Postman'] },
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

function App() {
  const [theme, setTheme] = useState('dark');
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
        <Route path="/contact" element={<Contact theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
