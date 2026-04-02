import React from 'react';
import './index.css';
import profilePic from './assets/profilePic.jpeg';
import { LuMail, LuMapPin, LuPhoneCall } from 'react-icons/lu';
import aboutMe from './assets/about.png';

const LogoS = () => <div className="logo-container">S</div>;

function App() {
  return (
    <div className="App">
      <header>
        <div className="container navbar">
          <a href="#" className="navbar-brand">
            <LogoS />
            <span className="brand-name">Syailendra</span>
          </a>
          
          <div className="navbar-menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills & Certificates</a></li>
              <li><a href="#contact">Contact me</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-content-wrapper">
            <article className="hero-text-block">
              <div className="status-badge">
                <span className="status-dot"></span>
                <span className="status-text">Available for freelance</span>
              </div>
              
              <h1 className="hero-title">
                Hi! I’m <span className="name-highlight">Syailendra</span>
              </h1>
              
              <p className="hero-description">
                A passionate <a href="#">Frontend Developer</a> & <a href="#">UI/UX Enthusiast</a> from SMK Wikrama. I create beautiful and functional web experiences.
              </p>
              
              <div className="hero-buttons">
                <a href="#" className="btn btn-primary">Explore More</a>
                <a href="#" className="btn btn-primary">Download CV</a>
              </div>
            </article>
            
            <figure className="hero-profile-block">
              <div className="profile-image-container">
                <img src={profilePic} alt="Syailendra" />
                
                <figcaption className="dev-tag frontend">
                  &lt;/&gt; Frontend Dev
                </figcaption>
                <figcaption className="dev-tag backend">
                  &lt;/&gt; Backend Dev
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            <div className="stats-grid">
              <article className="stat-item">
                <h3>15+</h3>
                <p>Certificates</p>
              </article>
              <article className="stat-item">
                <h3>2+</h3>
                <p>Years Of Experience</p>
              </article>
              <article className="stat-item">
                <h3>8+</h3>
                <p>Projects</p>
              </article>
            </div>
          </div>
        </section>
        
        
        <section id="about" className="about-section">
      <div className="container about-wrapper">
        
        {/* Kolom Gambar (Kiri di Desktop) */}
        <div className="about-image-column">
          <div className="image-box">
            <div className="image-placeholder">
              <img src={aboutMe} alt="Syailendra" /></div> 
            
            <div className="experience-card">
              <h3>2+</h3>
              <p>Years Of Learning</p>
            </div>
          </div>
        </div>

        {/* Kolom Teks (Kanan di Desktop) */}
        <article className="about-text-column">
          <div className="about-badge">
            <span className="status-dot"></span>
            <span>About Me</span>
          </div>
          
          <h2 className="about-title">
            Passionate About Creating <span className="blue-text">Digital Experiences</span>
          </h2>
          
          <p className="about-description">
            I'm a 10th-grade student at SMK Wikrama, majoring in PPLG (Software and Game Development). 
            My journey in tech started with curiosity and has grown into a deep passion for 
            creating beautiful, functional, and user-friendly web applications.
          </p>
          
          <p className="about-description">
            I believe in continuous learning and staying updated with the latest technologies. 
            My goal is to become a full-stack developer who can bring ideas to life through code.
          </p>

          <div className="contact-info-list">
            <div className="contact-item">
              <div className="icon-box">
                <LuPhoneCall size={18} />
              </div>
              <span>+62 823-1345-9758</span>
            </div>
            <div className="contact-item">
              <div className="icon-box">
                <LuMail size={18} />
              </div>
              <span>syailendraanggoromukti@gmail.com</span>
            </div>
            <div className="contact-item">
              <div className="icon-box">
                <LuMapPin size={18} />
              </div>
              <span>Bogor, Indonesia</span>
            </div>
          </div>
        </article>

      </div>
    </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2023 Syailendra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;