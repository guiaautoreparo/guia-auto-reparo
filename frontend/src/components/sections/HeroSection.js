import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Guia Auto Reparo</h1>
          <p className="hero-subtitle">
            Conectamos você às melhores oficinas mecânicas com qualidade garantida e preços justos.
          </p>
          <div className="hero-buttons">
            <a href="/servicos" className="btn btn-secondary">Nossos Serviços</a>
            <a href="/contato" className="btn btn-outline">Entre em Contato</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
