import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const App: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="nav-content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="logo"
            >
              Portfolio
            </motion.div>
            <div className="nav-links">
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="hero-greeting">Hi, my name is</p>
            <h1 className="hero-title">Vishwas M Bharadwaj</h1>
            <h2 className="hero-subtitle">
              3rd Year Computer Science Engineering Student
              <span className="college-name">at Malnad College of Engineering</span>
            </h2>
            <p className="hero-description">
              I'm passionate about building innovative solutions and exploring new technologies.
              Currently pursuing my degree in Computer Science Engineering at Malnad College of Engineering.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">Get in Touch</a>
              <a href="#projects" className="btn">View Projects</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Computer Science Engineering student with a strong passion for technology and innovation.
                My journey in tech has equipped me with skills in various programming languages and frameworks.
              </p>
              <p>
                I enjoy solving complex problems and building applications that make a difference.
                When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <h3 className="skill-title">Programming</h3>
                <p className="skill-description">Java, Python, C</p>
              </div>
              <div className="skill-card">
                <h3 className="skill-title">Tools</h3>
                <p className="skill-description">Git, GitHub, VSCode, IntelliJ IDEA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-content">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  A full-stack e-commerce platform built with React and Node.js.
                  Features include user authentication, product management, and payment integration.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">Task Management App</h3>
                <p className="project-description">
                  A collaborative task management application with real-time updates.
                  Built using React, Firebase, and Material-UI.
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Firebase</span>
                  <span>Material-UI</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-info">
                <h3 className="project-title">AI Image Generator</h3>
                <p className="project-description">
                  An AI-powered image generation tool using OpenAI's DALL-E API.
                  Features include image generation, editing, and sharing capabilities.
                </p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>OpenAI API</span>
                  <span>Flask</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="social-links">
            <a href="https://github.com/Vishwasmb10" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vishwas-m-bharadwaj-729b89267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:vishwasmb.hassan@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>Designed & Built by Vishwas M Bharadwaj</p>
        </div>
      </footer>
    </div>
  )
}

export default App 
