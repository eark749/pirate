import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

/**
 * Common TopBar component for internal pages
 */
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
    { label: 'Skills', num: 'III', path: '#' },
    { label: 'Work', num: 'IV', path: '#' },
    { label: 'Resume', num: 'V', path: '#' },
    { label: 'Contact', num: 'VI', path: '#' },
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
          <Link key={link.label} to={link.path}>
            <span className="label">{link.label}</span>
            <span className="dots"></span>
            <span className="numeral">{link.num}</span>
          </Link>
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
        <div className="block-label">Biography</div>
        
        <div className="bio-intro">
          <div className="profile-frame">
            <img src="/profile.png" alt="Vansh Soni" />
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

      <footer className="page-footer">
        Fin. v. XIX
      </footer>
    </div>
  );
}

function Projects({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const projectList = [
    {
      name: 'LiveKit Voice Agents',
      url: 'github.com/eark749/voice-agents',
      img: '/proj-voice.png',
      desc: 'Production-grade real-time voice AI system built on WebRTC (UDP) achieving sub-500ms latency using VAD + semantic turn detection, preemptive LLM generation, and optimized STT → LLM → TTS streaming pipeline.',
      tech: ['WebRTC', 'Python', 'FastAPI', 'LLM', 'VAD']
    },
    {
      name: 'SmartAssist',
      url: 'github.com/eark749/smartassist',
      img: '/proj-rag.png',
      desc: 'Enterprise-scale RAG system on AWS leveraging Textract, OpenSearch embeddings, and Bedrock (Nova Pro), with ECS auto-scaling, CI/CD pipelines, and IAM-secured microservices architecture.',
      tech: ['AWS', 'Bedrock', 'OpenSearch', 'Docker', 'RAG']
    },
    {
      name: 'HR AI',
      url: 'github.com/eark749/hr-ai',
      img: '/proj-hr.png',
      desc: 'Full-stack AI-powered HR platform with context-aware chatbot, multi-session memory, and real-time WebSocket streaming, enabling personalized employee workflows like leave, attendance, and payroll queries.',
      tech: ['React', 'WebSocket', 'FastAPI', 'PostgreSQL', 'LangChain']
    },
    {
      name: 'Medi',
      url: 'github.com/eark749/medi',
      img: '/proj-medi.png',
      desc: 'Scalable medical AI backend integrating LLM-driven QA agents, secure document pipelines, and Azure services (Cognitive, Blob, DB) for compliant healthcare data handling and intelligent retrieval.',
      tech: ['Azure', 'Medical AI', 'Python', 'LLM Agents', 'HIPAA']
    }
  ];

  return (
    <div className="page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      
      <header className="section-header">
        <div className="section-numeral">Section II</div>
        <h2 className="section-title">Projects</h2>
        <div className="section-rule"></div>
      </header>

      <div className="content-block">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-visual">
              <img src={project.img} alt={project.name} />
            </div>
            <div className="project-header">
              <span className="project-name">{project.name}</span>
              <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="project-link">{project.url}</a>
            </div>
            <p className="project-description">{project.desc}</p>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="page-footer">
        Fin. v. XIX
      </footer>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/about" element={<About theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/projects" element={<Projects theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
