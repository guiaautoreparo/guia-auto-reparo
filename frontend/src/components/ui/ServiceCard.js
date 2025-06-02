import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, image, link }) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        <a href={link} className="btn-service">Saiba Mais</a>
      </div>
    </div>
  );
};

export default ServiceCard;
