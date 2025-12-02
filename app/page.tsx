"use client";

import React, { useState, useEffect } from "react";
import HeroBackground from "../components/HeroBackground";
import { 
  FaGithub, 
  FaEnvelope, 
  FaCode, 
  FaChess, 
  FaLinkedin,
  FaDownload,
  FaExternalLinkAlt,
  FaPython,
  FaReact,
  FaJs,
  FaDatabase,
  FaChartLine,
  FaCodeBranch,
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaWeightHanging,
  FaArrowUp,
  FaCloud,
  FaServer,
  FaInstagram
} from "react-icons/fa";
import { 
  FcBullish, 
  FcCalculator
} from "react-icons/fc";
import { 
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiJupyter,
  SiStreamlit
} from "react-icons/si";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">TT</div>
        <div className="nav-links">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#achievements" className="nav-link">Achievements</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: FaPython, level: "strong" },
        { name: "TypeScript", icon: SiTypescript, level: "strong" },
        { name: "JavaScript", icon: FaJs, level: "strong" },
        { name: "C++", icon: FaCode, level: "comfortable" },
        { name: "C#", icon: FaCode, level: "comfortable" },
        { name: "R", icon: FaCode, level: "comfortable" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: FaReact, level: "strong" },
        { name: "Next.js", icon: SiNextdotjs, level: "strong" },
        { name: "Node.js", icon: SiNodedotjs, level: "comfortable" },
        { name: "React Native", icon: FaReact, level: "comfortable" },
        { name: "HTML/CSS", icon: FaCode, level: "strong" }
      ]
    },
    {
      title: "Data & AI/ML",
      skills: [
        { name: "SQL", icon: FaDatabase, level: "strong" },
        { name: "PostgreSQL", icon: SiPostgresql, level: "strong" },
        { name: "Supabase", icon: FaDatabase, level: "comfortable" },
        { name: "RAG", icon: FaCode, level: "comfortable" },
        { name: "LangChain", icon: FaCode, level: "learning" },
        { name: "Pandas", icon: SiPandas, level: "strong" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: SiGit, level: "strong" },
        { name: "Linux", icon: SiLinux, level: "comfortable" },
        { name: "Firebase", icon: FaCloud, level: "comfortable" },
        { name: "MySQL", icon: SiMongodb, level: "comfortable" },
        { name: "Oracle", icon: FaDatabase, level: "learning" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <skill.icon className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <div className="skill-tags">
                      <span className={`skill-tag ${skill.level}`}>
                        {skill.level === "strong" ? "Strong" : skill.level === "comfortable" ? "Comfortable" : "Learning"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Dasens AI",
      period: "May 2025 – Present",
      type: "Work",
      description: "Launched two AI SaaS platforms (SmartSRED, InventGenie) serving 10+ business clients; reduced SR&ED claim prep time by 40% and built RAG-based patent drafting engine. Designed React/Next.js dashboards backed by Supabase, improving client data access and onboarding speed.",
      icon: FaBriefcase
    },
    {
      title: "Technical Analyst",
      company: "Ntyam Active Care",
      period: "Jan – Apr 2024; Sep – Dec 2024",
      type: "Work",
      description: "Deployed web portal (HTML/CSS/JS, Firebase) enabling online scheduling and reducing manual booking calls by 30%. Architected PostgreSQL database centralizing client records, improving query latency by 60%. Built React Native mobile app adopted by 200+ active clients.",
      icon: FaBriefcase
    },
    {
      title: "Research Assistant",
      company: "Mount Royal University (Prof. Peter Zizler)",
      period: "Sep 2024 – Present",
      type: "Research",
      description: "Applied SVD and PCA to 50k+ NBA/MLB game records, reducing feature space from 30 to 5 components while retaining 80% variance. Built predictive models and interactive visualizations. Presented findings at YYCDATACON 2025 and International Conference on Statistics and Data Science (SFU).",
      icon: FaChartLine
    },
    {
      title: "BMath (Hons.) Computational Mathematics, Statistics",
      company: "University of Waterloo",
      period: "Sep 2022 – Present",
      type: "Education",
      description: "Co-op program focused on algorithms, numerical methods, and statistical modeling. Completed projects including C compiler in Bash and predictive regression models in R. Intermediate PostgreSQL Certificate from University of Michigan (Nov 2024).",
      icon: FaGraduationCap
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <exp.icon />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <span className="timeline-type">{exp.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [h1Typed, setH1Typed] = useState(false);
  const [h2Typed, setH2Typed] = useState(false);

  useEffect(() => {
    document.title = "Thomas Thangarajah's Portfolio";
  }, []);

  useEffect(() => {
    document.body.className = "dark-mode";
  }, []);

  useEffect(() => {
    const h1Timer = setTimeout(() => setH1Typed(true), 2000);
    return () => clearTimeout(h1Timer);
  }, []);

  useEffect(() => {
    if (h1Typed) {
      const h2Timer = setTimeout(() => setH2Typed(true), 3000);
      return () => clearTimeout(h2Timer);
    }
  }, [h1Typed]);

  return (
    <div>
      <div className="math-pattern"></div>
      <Navigation />
          
          {/* Modern Hero Section */}
          <header className="hero-section relative overflow-hidden">
            <HeroBackground />
            <div className="hero-content relative z-10">
            <h1 className={h1Typed ? "finished" : ""}>Thomas Thangarajah</h1>
            <h2 className={h2Typed ? "finished" : ""}>
                Computational Mathematics & Statistics at University of Waterloo
            </h2>
              <div className="hero-chips">
                <span className="hero-chip">Software Developer</span>
                <span className="hero-chip">Math & Data</span>
                <span className="hero-chip">Powerlifting</span>
              </div>
              <p className="hero-description">
                Building AI tools and data systems at Dasens AI. I like clean dashboards, mathy problems, and gym apps that actually work.
              </p>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-primary">Get In Touch</a>
                <a href="/Thomas__Resume.pdf" className="btn btn-secondary" download>
                  <FaDownload /> Download Resume
                </a>
              </div>
            </div>
          </header>

          {/* About Section */}
          <section id="about" className="about-section">
            <div className="container">
              <h2 className="section-title">About Me</h2>
              <div className="about-content">
                <div className="about-text">
                  <p>
                    I'm a math student at Waterloo who builds things. Right now I'm at Dasens AI working on AI tools and data systems. 
                    I like building stuff that people actually use, whether that's dashboards for clients or apps for tracking training.
                  </p>
                  <p>
                    Most of my work is in AI, data, and backend systems. I've shipped a couple SaaS platforms, built mobile apps, 
                    and done some research that got presented at conferences. I enjoy clean interfaces and problems that need math to solve.
                  </p>
                  <p>
                    When I'm not coding, I'm usually at the gym. I compete in powerlifting and track everything: RPE, meet results, 
                    the works. That same attention to detail shows up in how I build products.
                  </p>
                  <div className="about-highlights">
                    <div className="highlight-item">
                      <FaCode />
                      <span>Full-Stack Development</span>
                    </div>
                    <div className="highlight-item">
                      <FaChartLine />
                      <span>Data Science & ML</span>
                    </div>
                    <div className="highlight-item">
                      <FaWeightHanging />
                      <span>Powerlifting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <SkillsSection />
          <ExperienceSection />

          {/* Achievements Section */}
          <section id="achievements" className="achievements-section">
            <div className="container">
              <h2 className="section-title">Achievements & Certifications</h2>
              <div className="achievements-grid">
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <FaTrophy />
                  </div>
                  <h3>AI SaaS Platform Launch</h3>
                  <p>SmartSRED & InventGenie</p>
                  <span className="achievement-period">May 2025</span>
                </div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <FaCode />
                  </div>
                  <h3>Data Science Hackathon</h3>
                  <p>70% Top-N Accuracy</p>
                  <span className="achievement-period">Feb 2025</span>
                </div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <FaChartLine />
                  </div>
                  <h3>Research Presentations</h3>
                  <p>YYCDATACON 2025 & SFU Conference</p>
                  <span className="achievement-period">2025</span>
                </div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <FaDatabase />
                  </div>
                  <h3>PostgreSQL Certification</h3>
                  <p>University of Michigan</p>
                  <span className="achievement-period">Nov 2024</span>
                </div>
                <div className="achievement-card">
                  <div className="achievement-icon">
                    <FaBriefcase />
                  </div>
                  <h3>Technical Analyst</h3>
                  <p>200+ Active Mobile App Users</p>
                  <span className="achievement-period">2024</span>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Projects Section */}
          <section id="projects" className="projects-section">
            <div className="container">
              <h2 className="section-title">Featured Projects</h2>
              <div className="projects-grid">
                <div className="project-card lift-chill-card">
                  <div className="project-header">
                    <div className="project-header-left">
                      <img 
                        src="/liftandchill.png" 
                        alt="Lift & Chill Logo" 
                        className="project-card-logo"
                      />
                      <h3>Lift & Chill</h3>
                    </div>
                  </div>
                  <p className="project-flavor">Built this because spreadsheets for training were getting annoying.</p>
                  <p className="project-description">
                    Track training, sets, and progress with a simple clean app. Calendar view, progress charts, and full exercise history.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">TypeScript</span>
                    <span className="tech-tag">Supabase</span>
                  </div>
                  <div className="project-links">
                    <a href="https://lift-and-chill.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Site
                    </a>
                    <a href="/projects/lift-and-chill">
                      <FaCode /> View Details
                    </a>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-header">
                    <h3>EMA Crossover Backtest</h3>
                    <FaChartLine className="project-icon" />
                  </div>
                  <p className="project-flavor">Wanted to see if simple moving averages could actually work for trading.</p>
                  <p className="project-description">
                    A trading strategy backtest built in Python that uses fast and slow EMAs to create signals. Includes equity curves, drawdowns, Sharpe ratio, and walk-forward testing.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Pandas</span>
                    <span className="tech-tag">Matplotlib</span>
                    <span className="tech-tag">yfinance</span>
                    <span className="tech-tag">Jupyter</span>
                  </div>
                  <div className="project-links">
                    <a href="/projects/ema-crossover-backtest">
                      <FaCode /> View Project
                    </a>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-header">
                    <h3>CxC Data Hackathon</h3>
                    <FcBullish className="project-icon" />
                  </div>
                  <p className="project-flavor">Markov chains for recommendations - surprisingly effective.</p>
                  <p className="project-description">
                    Built a recommendation engine using Markov chains + ML, achieving 70% top-N accuracy. Delivered insights via a Streamlit dashboard for the University of Waterloo Data Science Club.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">Streamlit</span>
                    <span className="tech-tag">Markov Chains</span>
                    <span className="tech-tag">Machine Learning</span>
                    <span className="tech-tag">Data Visualization</span>
                  </div>
                  <div className="project-links">
                    <a href="https://cxc-federato.streamlit.app/" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    <a href="https://github.com/bigballaband/hackathon-project" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-header">
                    <h3>NBA/MLB Performance Analysis</h3>
                    <FcCalculator className="project-icon" />
                  </div>
                  <p className="project-flavor">PCA on 50k+ game records - math that actually works.</p>
                  <p className="project-description">
                    Applied SVD and PCA to 50k+ NBA/MLB game records, reducing feature space from 30 to 5 components while retaining 80% variance. Built predictive models and interactive visualizations.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Python</span>
                    <span className="tech-tag">NumPy</span>
                    <span className="tech-tag">Pandas</span>
                    <span className="tech-tag">Matplotlib</span>
                    <span className="tech-tag">SVD/PCA</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/bigballaband/ResearchProject" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Research Paper
                    </a>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-header">
                    <h3>SmartSRED & InventGenie</h3>
                    <FaCode className="project-icon" />
                  </div>
                  <p className="project-flavor">Two AI SaaS platforms that clients actually use.</p>
                  <p className="project-description">
                    Launched two AI SaaS platforms serving 10+ business clients. Reduced SR&ED claim prep time by 40% and built RAG-based patent drafting engine. React/Next.js dashboards with 2-minute setup.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Next.js</span>
                    <span className="tech-tag">Supabase</span>
                    <span className="tech-tag">RAG</span>
                    <span className="tech-tag">AI/ML</span>
                  </div>
                  <div className="project-links">
                    <a href="https://smartsred.ca" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> SmartSRED
                    </a>
                    <a href="https://inventgenie.com" target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> InventGenie
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Powerlifting Section */}
          <section id="powerlifting" className="powerlifting-section">
            <div className="container">
              <h2 className="section-title">Powerlifting <FaWeightHanging /></h2>
              <p className="section-description">
                I compete and track everything: RPE, meet results, the works. 
                Follow my training journey on Instagram!
              </p>
              <div className="powerlifting-content">
                <div className="powerlifting-card">
                  <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Competition History</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                    Competing at Nationals in March in 105-jr class. 
                    I track all my training, RPE, and meet results.
                  </p>
                  <div className="powerlifting-stats">
                    <div className="powerlifting-stat">
                      <div className="powerlifting-stat-label">Squat</div>
                      <div className="powerlifting-stat-value">255kg</div>
                    </div>
                    <div className="powerlifting-stat">
                      <div className="powerlifting-stat-label">Bench</div>
                      <div className="powerlifting-stat-value">170kg</div>
                    </div>
                    <div className="powerlifting-stat">
                      <div className="powerlifting-stat-label">Deadlift</div>
                      <div className="powerlifting-stat-value">267.5kg</div>
                    </div>
                  </div>
                  <div className="powerlifting-social">
                    <a href="https://instagram.com/bigballabandlife" target="_blank" rel="noopener noreferrer" className="instagram-link">
                      <FaInstagram />
                      <span>@bigballabandlife</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <div className="container">
              <h2 className="section-title">Let's Connect</h2>
              <p className="contact-description">
                Looking for Summer 2026 internships in software engineering, data science, and machine learning. 
                Always open to new opportunities and interesting projects.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <FaEnvelope />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:tomthaya5@gmail.com">tomthaya5@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaGithub />
                  <div>
                    <h4>GitHub</h4>
                    <a href="https://github.com/bigballaband" target="_blank" rel="noopener noreferrer">github.com/bigballaband</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaLinkedin />
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://linkedin.com/in/thomasthanga" target="_blank" rel="noopener noreferrer">linkedin.com/in/thomasthanga</a>
                  </div>
                </div>
                <div className="contact-item">
                  <FaCode />
                  <div>
                    <h4>LeetCode</h4>
                    <a href="https://leetcode.com/u/bigballaband/" target="_blank" rel="noopener noreferrer">leetcode.com/u/bigballaband</a>
                  </div>
                </div>
              </div>
              <div className="resume-download">
                <a href="/Thomas__Resume.pdf" className="btn btn-primary" download>
                  <FaDownload /> Download Resume
                </a>
              </div>
            </div>
          </section>

          {/* Modern Footer */}
          <footer className="footer">
            <div className="container">
              <div className="footer-content">
                <div className="footer-info">
                  <h3>Thomas Thangarajah</h3>
                  <p>Software Engineer & Data Scientist</p>
                  <div className="footer-contact">
                    <div className="footer-contact-item">
                      <FaEnvelope />
                      <span>tomthaya5@gmail.com</span>
                    </div>
                    <div className="footer-contact-item">
                      <FaGraduationCap />
                      <span>University of Waterloo</span>
                    </div>
                  </div>
                </div>
                <div className="footer-links">
                  <a href="https://github.com/bigballaband" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://linkedin.com/in/thomasthanga" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:tomthaya5@gmail.com" title="Email">
                    <FaEnvelope />
                  </a>
                  <a href="https://leetcode.com/u/bigballaband/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                    <FaCode />
                  </a>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2025 Thomas Thangarajah. Seeking Summer 2026 Internships.</p>
              </div>
            </div>
          </footer>
          
      <ScrollToTop />
    </div>
  );
};

export default Home;