import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

/**
 * Utility to get SVG-based logo for specific skills
 */
const getSkillLogo = (name: string) => {
  const n = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const mapping: Record<string, string> = {
    python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    sql: 'https://www.svgrepo.com/show/374093/sql.svg',
    r: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    cplusplus: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    cpp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
    cypherquerylanguage: 'https://www.svgrepo.com/show/354113/neo4j.svg',
    tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    pytorch: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    keras: 'https://www.svgrepo.com/show/353950/keras.svg',
    scikitlearn: 'https://www.svgrepo.com/show/354323/scikit-learn.svg',
    huggingface: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
    fastapi: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    powerbi: 'https://www.svgrepo.com/show/354211/power-bi.svg',
    tableau: 'https://www.svgrepo.com/show/354425/tableau.svg',
    rstudio: 'https://www.svgrepo.com/show/354291/rstudio.svg',
    excel: 'https://www.svgrepo.com/show/373815/excel.svg',
    jupyter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
    pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    aws: 'https://www.svgrepo.com/show/353393/aws.svg',
    azure: 'https://www.svgrepo.com/show/353457/azure.svg',
    apachehttpserver: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg',
    postman: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
  };
  return mapping[n] || 'https://www.svgrepo.com/show/422204/ai-artificial-intelligence-machine-learning.svg';
};

const Icons = {
  Languages: () => (
    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
    </svg>
  ),
  AI: () => (
    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v10" /><path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  ),
  Frameworks: () => (
    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Data: () => (
    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  ),
  Databases: () => (
    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  Cloud: () => (
    <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19a5.5 5.5 0 0 1-4.7-2.8" /><path d="M20.9 14.1A6.4 6.4 0 0 0 14 8a6 6 0 0 0-11.2 3.6A6 6 0 0 0 6 22h11.5a4.5 4.5 0 0 0 0-9Z" />
    </svg>
  )
};

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
    { label: 'Resume', num: 'V', path: '/resume' },
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

function Experience({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const experiences = [
    {
      company: 'Dealberg',
      tagline: 'AI Engineering Leadership',
      date: 'December 2025 - Present',
      pos: 'Joint AI lead',
      loc: 'Bangalore, On-Site',
      ind: 'AI & Automation',
      desc: 'I design, build, and deploy AI-powered systems and automation tools—handling backend architecture, integrations, and client-facing product delivery end-to-end.'
    },
    {
      company: 'Rysysth technologies',
      tagline: 'Scalable AI Applications',
      date: 'July 2025 - December 2025',
      pos: 'Applied AI Engineer',
      loc: 'Ahmedabad, Hybrid',
      ind: 'AI Solutions',
      desc: 'Building end-to-end AI powered application for clients based on their needs.'
    },
    {
      company: 'Zensible',
      tagline: 'Automated AI Agents',
      date: 'April 2025 - July 2025',
      pos: 'AI Engineer',
      loc: 'Bangalore, Hybrid',
      ind: 'Product Engineering',
      desc: 'Built AI applications delivering business value; Created HRMS bot for HR automation and employee chat-based queries.'
    },
    {
      company: 'Amaze Inc',
      tagline: 'Strategic AI Architecture',
      date: 'January 2025 - April 2025',
      pos: 'AI Consultant',
      loc: 'Bangalore, On-Site',
      ind: 'Consultancy',
      desc: 'Transformed complex datasets into strategic insights and architected custom AI solutions for data-driven decisions.'
    },
    {
      company: 'Brand Shark',
      tagline: 'Data Insight Delivery',
      date: 'November 2024 - January 2025',
      pos: 'AI Engineer Intern',
      loc: 'Bangalore, On-Site',
      ind: 'Data Engineering',
      desc: 'Analyzed and visualized data, delivered actionable insights to support business decisions.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number>(-1);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.getAttribute('data-index') || '0');
        if (entry.isIntersecting) {
          setActiveIndex(index);
        } else if (activeIndex === index) {
          setActiveIndex(-1);
        }
      });
    }, { 
      threshold: 0.5,
      rootMargin: '-20% 0px -20% 0px' 
    });

    const items = document.querySelectorAll('.experience-item');
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <div className="page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <header className="section-header">
        <div className="section-numeral">Section IV</div>
        <h2 className="section-title">Experience</h2>
        <div className="section-rule"></div>
      </header>
      <div className="timeline">
        {experiences.map((exp, index) => (
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
        ))}
      </div>
      <footer className="page-footer">Fin. v. XIX</footer>
    </div>
  );
}

function Resume({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <div className="page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <header className="section-header">
        <div className="section-numeral">Section V</div>
        <h2 className="section-title">Resume</h2>
        <div className="section-rule"></div>
      </header>
      <div className="resume-container">
        <iframe src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0" className="resume-viewer" title="Vansh Soni Resume" />
      </div>
      <div className="resume-actions">
        <a href="/resume.pdf" download="Vansh_Soni_Resume.pdf" className="resume-btn">Download PDF</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">Open Fullscreen</a>
      </div>
      <footer className="page-footer">Fin. v. XIX</footer>
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
            <div className="project-visual"><img src={project.img} alt={project.name} /></div>
            <div className="project-header">
              <span className="project-name">{project.name}</span>
              <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="project-link">{project.url}</a>
            </div>
            <p className="project-description">{project.desc}</p>
            <div className="project-tech">{project.tech.map((t, i) => (<span key={i} className="tech-tag">{t}</span>))}</div>
          </div>
        ))}
      </div>
      <footer className="page-footer">Fin. v. XIX</footer>
    </div>
  );
}

function Skills({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const skillCategories = [
    { title: 'Languages', icon: <Icons.Languages />, skills: ['Python', 'SQL', 'R', 'C++', 'Rust', 'Cypher Query Language'] },
    { title: 'AI / ML', icon: <Icons.AI />, skills: ['Neural Networks', 'Fine-tuning', 'LLM', 'RAG', 'CNN', 'RNN', 'Transformers'] },
    { title: 'Frameworks', icon: <Icons.Frameworks />, skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'LangChain', 'Hugging Face', 'FastAPI'] },
    { title: 'Data Tools', icon: <Icons.Data />, skills: ['Power BI', 'Tableau', 'RStudio', 'Excel', 'Jupyter', 'WEKA', 'Pandas'] },
    { title: 'Databases', icon: <Icons.Databases />, skills: ['PostgreSQL', 'MySQL', 'ChromaDB', 'Vector DB', 'Data Warehouse'] },
    { title: 'DevOps & Cloud', icon: <Icons.Cloud />, skills: ['Docker', 'Git', 'AWS', 'Azure', 'Apache HTTP Server', 'Postman'] }
  ];
  const softSkills = ['Leadership', 'Communication', 'Critical Thinking', 'Problem Solving', 'Teamwork', 'Time Management'];
  return (
    <div className="page">
      <TopBar theme={theme} toggleTheme={toggleTheme} />
      <header className="section-header">
        <div className="section-numeral">Section III</div>
        <h2 className="section-title">Skills</h2>
        <div className="section-rule"></div>
      </header>
      <div className="skills-grid">
        {skillCategories.map((cat, index) => (
          <div key={index} className="skill-category">
            <div className="skill-category-header">{cat.icon}<span className="skill-category-title">{cat.title}</span></div>
            <div className="skill-list">
              {cat.skills.map((skill, i) => {
                const logo = getSkillLogo(skill);
                return (
                  <span key={i} className="skill-tag">
                    <img src={logo} className="skill-logo" alt={skill} />
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="soft-skills-block">
        <div className="block-label">Soft Skills</div>
        <div className="soft-skills-list">{softSkills.map((skill, index) => (<div key={index} style={{ marginBottom: '0.4rem' }}>{skill}</div>))}</div>
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
        <Route path="/resume" element={<Resume theme={theme} toggleTheme={toggleTheme} />} />
      </Routes>
    </Router>
  );
}

export default App;
