// ProjectCard.jsx

import "../ProjectCard.css";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  number,
  type,
  title,
  description,
  image,
  githubLink,
  tech,
  gradient,
}) {
  return (
    <div className="project-card-group">
      {/* Header */}
      <div className="project-header">
        <div>
          <div className="project-top">
            <span>{number}</span>
            <div className="project-line"></div>
            <span>{type}</span>
          </div>

          <h1 className="project-title">{title}</h1>
        </div>

        {/* Github Button */}
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="github-btn"
        >
          <FaGithub size={16} />
          Github
        </a>
      </div>

      {/* Card */}
      <div className={`project-card ${gradient}`}>
        {/* Description */}
        <p className="project-description">{description}</p>

        {/* Mac Frame */}
        <div className="mac-wrapper">
          <div className="mac-frame">
            {/* Top */}
            <div className="mac-topbar">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>

            {/* Image */}
            <img src={image} alt={title} className="project-image" />
          </div>
        </div>
      </div>

      {/* Tech */}
      <div className="tech-stack">
        {tech.map((item, index) => (
          <span key={index} className="tech-badge">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}