import React from 'react';

const CertificateCard = ({ title, issuer, date, image, description }) => {
  return (
    <div className="cert-card">
      <div className="cert-image-container">
        <img src={image} alt={title} className="cert-img" />
      </div>
      <div className="cert-content">
        <h3 className="cert-title">{title}</h3>
        <p className="cert-issuer">{issuer} • {date}</p>
        <p className="cert-desc">{description}</p>
      </div>
    </div>
  );
};

export default CertificateCard;