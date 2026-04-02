import React from 'react';

const SkillCard = ({ name, level, icon, color }) => {
  return (
    <div className="skill-card">
      <div className={`skill-icon-wrapper ${color}`}>
        {icon}
      </div>
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <div className="skill-bar-container">
          <div className="skill-bar-bg">
            <div 
              className={`skill-bar-fill ${color}`} 
              style={{ width: `${level}%` }}
            ></div>
          </div>
          <span className="skill-percentage">{level}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;