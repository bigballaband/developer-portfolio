"use client";

import React, { useState, useEffect } from "react";
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

const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => (
  <div id="loading-screen" className={isLoading ? "" : "hidden"}>
    <div className="holo-text">Loading... Please Wait</div>
    <div className="holo-progress-container">
      <div className="holo-progress-bar"></div>
    </div>
  </div>
);

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
        { name: "Python", icon: FaPython, level: 95 },
        { name: "TypeScript", icon: SiTypescript, level: 90 },
        { name: "JavaScript", icon: FaJs, level: 90 },
        { name: "C++", icon: FaCode, level: 85 },
        { name: "C#", icon: FaCode, level: 80 },
        { name: "R", icon: FaCode, level: 85 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: FaReact, level: 95 },
        { name: "Next.js", icon: SiNextdotjs, level: 90 },
        { name: "Node.js", icon: SiNodedotjs, level: 85 },
        { name: "React Native", icon: FaReact, level: 85 },
        { name: "HTML/CSS", icon: FaCode, level: 95 }
      ]
    },
    {
      title: "Data & AI/ML",
      skills: [
        { name: "SQL", icon: FaDatabase, level: 95 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 90 },
        { name: "Supabase", icon: FaDatabase, level: 85 },
        { name: "RAG", icon: FaCode, level: 80 },
        { name: "LangChain", icon: FaCode, level: 75 },
        { name: "Pandas", icon: SiPandas, level: 90 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: SiGit, level: 90 },
        { name: "Linux", icon: SiLinux, level: 85 },
        { name: "Firebase", icon: FaCloud, level: 85 },
        { name: "MySQL", icon: SiMongodb, level: 80 },
        { name: "Oracle", icon: FaDatabase, level: 75 }
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
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
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
  const [isLoading, setIsLoading] = useState(true);
  const [h1Typed, setH1Typed] = useState(false);
  const [h2Typed, setH2Typed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

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
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <div>
          <Navigation />
          
          {/* Modern Hero Section */}
          <header className="hero-section">
            <div className="hero-content">
            <h1 className={h1Typed ? "finished" : ""}>Thomas Thangarajah</h1>
            <h2 className={h2Typed ? "finished" : ""}>
                Computational Mathematics & Statistics at University of Waterloo
            </h2>
              <p className="hero-description">
                Software Developer at Dasens AI with expertise in AI/ML, full-stack development, and statistical analysis. 
                Seeking Summer 2026 internship opportunities to further develop my skills in innovative technology solutions.
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
                    I'm a third-year Computational Mathematics and Statistics student at the University of Waterloo, 
                    currently working as a Software Developer at Dasens AI. I have a strong foundation in mathematical 
                    modeling, statistical analysis, and computational methods, with hands-on experience building 
                    AI-powered SaaS platforms and mobile applications.
                  </p>
                  <p>
                    My professional journey combines rigorous mathematical training with real-world experience in machine learning, 
                    full-stack development, and statistical analysis. I've successfully launched AI SaaS platforms serving 10+ 
                    business clients, built React Native mobile apps with 200+ active users, and conducted research 
                    presented at international conferences. I'm actively seeking Summer 2026 internship opportunities 
                    to further expand my technical expertise and contribute to innovative projects.
                  </p>
                  <p>
                    Beyond academics, I'm an active powerlifter and enjoy the discipline and goal-setting that comes with 
                    competitive sports. This mindset translates to my approach to problem-solving and project management.
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
                    <FaWeightHanging />
                  </div>
                  <h3>Powerlifting Competitor</h3>
                  <p>Alberta Provincials Qualifier</p>
                  <span className="achievement-period">December 2024</span>
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
                  <p className="project-description">
                    Track training, sets, and progress with a simple clean app
                  </p>
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
                    <h3>Powerlifter Pro</h3>
                    <FaWeightHanging className="project-icon" />
                  </div>
                  <p className="project-description">
                    Developed a cross-platform app for powerlifters to log lifts, track progress, and receive AI-driven 
                    programming recommendations. Implemented RPE-based autoregulation with Node.js + PostgreSQL backend, 
                    delivering personalized training load suggestions for optimal performance tracking.
                  </p>
                  <div className="project-tech">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">React Native</span>
                    <span className="tech-tag">AI/ML</span>
                    <span className="tech-tag">RPE System</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/bigballaband/powerlifter-pro" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Repository
                    </a>
                  </div>
                </div>

                <div className="project-card">
                  <div className="project-header">
                    <h3>CxC Data Hackathon</h3>
                    <FcBullish className="project-icon" />
                  </div>
                  <p className="project-description">
                    Built a recommendation engine using Markov chains + ML, achieving 70% top-N accuracy. 
                    Delivered insights via a Streamlit dashboard for the University of Waterloo Data Science Club. 
                    Implemented advanced statistical modeling and data visualization techniques.
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
                  <p className="project-description">
                    Applied SVD and PCA to 50k+ NBA/MLB game records, reducing feature space from 30 to 5 components 
                    while retaining 80% variance. Built predictive models and interactive visualizations. 
                    Presented findings at YYCDATACON 2025 and International Conference on Statistics and Data Science (SFU).
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
                  <p className="project-description">
                    Launched two AI SaaS platforms serving 10+ business clients; reduced SR&ED claim prep time by 40% 
                    and built RAG-based patent drafting engine. Designed React/Next.js dashboards backed by Supabase, 
                    improving client data access and onboarding speed with 2-minute setup.
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
              <h2 className="section-title">Powerlifting Journey <FaWeightHanging /></h2>
              <p className="section-description">
                I competed in June at Provincials and I am competing in October for Westerns. 
                Follow my training journey on Instagram!
              </p>
              <div className="powerlifting-content">
                <div className="powerlifting-card">
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
                I'm actively seeking Summer 2026 internship opportunities in software engineering, data science, 
                and machine learning. I'm always interested in new opportunities, collaborations, and challenging projects. 
                Let's discuss how we can work together!
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
                <p>&copy; 2025 Thomas Thangarajah. All rights reserved. | Seeking Summer 2026 Internships</p>
              </div>
            </div>
          </footer>
          
          <ScrollToTop />
        </div>
      )}
    </>
  );
};

export default Home;