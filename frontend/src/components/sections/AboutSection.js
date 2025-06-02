import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section" id="sobre">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Sobre Nós</h2>
            <p className="about-description">
              Nossa rede de oficinas mecânicas nasceu da necessidade de conectar clientes a serviços de qualidade com transparência e confiança. Trabalhamos apenas com oficinas parceiras que passam por rigoroso processo de seleção e validação.
            </p>
            <p className="about-description">
              Com anos de experiência no mercado automotivo, garantimos que cada serviço seja realizado com excelência, utilizando peças de qualidade e mão de obra especializada.
            </p>
            <p className="about-description">
              Nossa missão é proporcionar tranquilidade aos clientes, sabendo que seu veículo está em boas mãos, com preços justos e garantia de serviço.
            </p>
            <a href="/sobre" className="btn">Conheça Nossa História</a>
          </div>
          <div className="about-image">
            <img src="/images/about-image.jpg" alt="Sobre Nossa Rede de Oficinas" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
