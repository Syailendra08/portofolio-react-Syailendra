import React, { useState } from 'react';
import './index.css';
import profilePic from './assets/profilePic.jpeg';
import { LuChevronLeft, LuChevronRight, LuMail, LuMapPin, LuPhoneCall } from 'react-icons/lu';
import aboutMe from './assets/about.png';
import SkillCard from './components/SkillCard';
import {  Cpu, Palette, Star, } from 'lucide-react';
import CertificateCard from './components/CertificateCard';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import Contact from './components/Contact';

const LogoS = () => <div className="logo-container">S</div>;
const skillsData = [
  { name: 'HTML & CSS', level: 90, icon: <Palette size={20} />, color: 'orange-pink' },
  { name: 'JavaScript', level: 85, icon: <IoLogoJavascript size={20} />, color: 'yellow-amber' },
  { name: 'React JS', level: 80, icon: <FaReact size={20} />, color: 'cyan-blue' },
  { name: 'Problem Solving', level: 88, icon: <Cpu size={20} />, color: 'purple-violet' },
];

const certData = [
  { id: 1, title: "Web Development Fundamentals", issuer: "IBM Skills Build", date: "Oct 2024", description: "I learned Cascading Style Sheets (CSS) · HTML · JavaScript", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072071_68ca0d076941f.jpeg" },
  { id: 2, title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding Indonesia", date: "26th Oct 2024", description: "Issued Oct 2024. Expires Oct 2027 Credential ID NVP7440J4PRO", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072247_68ca0db7eed1c.png" },
  { id: 3, title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)", issuer: "Dicoding Indonesia", date: "21st Jan 2025", description: "Dicoding Indonesia Issued Jan 2025. Expires Jan 2028 Credential ID 6RPNRDV5RX2M ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072440_68ca0e7819363.jpg" },
  { id: 4, title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", issuer: "Dicoding Indonesia", date: "16th Jan 2025", description: "Dicoding Indonesia Issued Jan 2025. Expires Jan 2028 Credential ID NVP751E4WXRO ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072512_68ca0ec0197fa.png" },
  { id: 5, title: "Belajar Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", date: "6 Jan 2025", description: "Dicoding Indonesia Issued Jan 2025. Expires Jan 2028 Credential ID 81P2L1G5OΖΟΥ ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072613_68ca0f25c7ede.png" },
  { id: 6, title: "Belajar Dasar Git dengan GitHub", issuer: "Dicoding Indonesia", date: "15 Jan 2025", description: "Dicoding Indonesia Issued Jan 2025. Expires Jan 2028 Credential ID 53XEDW3YOPRN ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072665_68ca0f592f202.png" },
  { id: 7, title: "Belajar Dasar AI", issuer: "Dicoding Indonesia", date: "28 Jan 2025", description: "Dicoding Indonesia Issued Jan 2025. Expires Jan 2028 Credential ID MEPJQKL6JX3V ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072730_68ca0f9a0f189.png" },
   { id: 8, title: "Belajar Membuat Front-End Web untuk Pemula", issuer: "Dicoding Indonesia", date: "9 Feb 2025", description: "Dicoding Indonesia Issued Feb 2025. Expires Feb 2028 Credential ID 81P2L3K0JΖΟΥ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072817_68ca0ff195a62.png" },
  { id: 9, title: "Belajar Fundamental Front-End Web Development", issuer: "Dicoding Indonesia", date: "07 Mar 2025", description: "Dicoding Indonesia Issued Mar 2025. Expires Mar 2028 Credential ID 07Z63DEQ2ZQR", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072936_68ca1068a9101.png" },
  { id: 10, title: "Belajar Back-End Pemula dengan JavaScript", issuer: "Dicoding Indonesia", date: "18 Mar 2025", description: "Dicoding Indonesia Issued Mar 2025. Expires Mar 2028 Credential ID KEXL7NJNYXG2", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072991_68ca109fa9190.png" },
  { id: 11, title: "English for Buisness Communication", issuer: "Dicoding X DBS Foundation", date: "25 Mar 2025", description: "Coding Camp powered by DBS Foundation Issued Mar 2025. Expires Mar 2028 Skills: English, Business English English as a Second Language (ESL) ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758072891_68ca103b20683.png" },
  { id: 12, title: "Financial Literacy 101", issuer: "Dicoding Indonesia", date: "25 Apr 2025", description: "Dicoding Indonesia Issued Apr 2025. Expires Apr 2028 Credential ID N9ZO9RJ0DXG5", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758073041_68ca10d160903.png" },
  { id: 13, title: "Cohort Coding Camp 2025 powered by DBS Foundation - Front-End & Back-End Developer", issuer: "Dicoding X DBS Foundation", date: "2 May 2025", description: "Coding Camp powered by DBS Foundation Seasonal Jan 2025 -Apr 2025. 4 mos West Java, Indonesia. Remote", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758074835_68ca17d35b539.jpg" },
  { id: 14, title: "Best Team Capstone Coding Camp 2025 powered by DBS Foundation - Front-End & Back-End Developer", issuer: "Dicoding X DBS Foundation", date: "2 May 2025", description: "Flora AI finished as Top 15th Best Team Cohort Coding Camp powered by DBS Foundation. Jan 2025-Apr 2025. 4 mos West Java, Indonesia, Remote", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1758074941_68ca183d0f98d.jpg" },
    { id: 15, title: "Belajar Dasar Data Science", issuer: "Dicoding Indonesia", date: "22 Jan 2026", description: "Dicoding Indonesia Issued Jan 2026 · Expires Jan 2029 Credential ID MRZM6956RPYQ", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1775322295_69d144b7dbc86.png" },
  { id: 16, title: "Belajar Dasar Structured Query Language (SQL)", issuer: "Dicoding Indonesia", date: "22 Jan 2026", description: "Dicoding Indonesia Issued Jan 2026 · Expires Jan 2029 Credential ID 72ZDKGQMVPYW Skill: SQL", image: "https://is3.cloudhost.id/disk4pps-wk/jurnalku/certificates/certificate_1775322561_69d145c11c200.png" },
 
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = certData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(certData.length / itemsPerPage);
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

    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <div className="about-badge">
             <span className="status-dot"></span>
             <span>My Expertise</span>
          </div>
          <h2 className="skills-title">Skills & <span className="blue-text">Technologies</span></h2>
          <p className="skills-subtitle">
            Here are the technologies and skills I've mastered throughout my learning journey.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>

    <section id="certificates" className="cert-section">
      <div className="container">
        <div className="skills-header">
           <div className="about-badge"><span><Star color="#5294ff" size={15} style={{ marginTop: '2px' }} /> </span><span> Achievements</span></div>
           <h2 className="skills-title">My <span className="blue-text"> Certificates.</span></h2>
           <p className="skills-subtitle">A collection of certifications I've earned from various platforms and institutions.</p>
        </div>

        
        <div className="cert-grid">
          {currentItems.map((cert) => (
            <CertificateCard key={cert.id} {...cert} />
          ))}
        </div>

        
        <div className="pagination">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="pag-btn"
          >
            <LuChevronLeft />
          </button>
          
          <span className="page-info">Pages {currentPage} of {totalPages}</span>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="pag-btn"
          >
            <LuChevronRight />
          </button>
        </div>
      </div>
    </section>

    <section>
      <Contact />
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