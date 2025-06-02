import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Manutenção Preventiva',
      description: 'Evite problemas futuros com nossa manutenção preventiva completa, realizada por profissionais qualificados.',
      image: '/images/service-maintenance.jpg',
      link: '/servicos/manutencao-preventiva'
    },
    {
      id: 2,
      title: 'Reparo de Motor',
      description: 'Diagnóstico preciso e reparos de alta qualidade para todos os tipos de problemas no motor do seu veículo.',
      image: '/images/service-engine.jpg',
      link: '/servicos/reparo-motor'
    },
    {
      id: 3,
      title: 'Sistema Elétrico',
      description: 'Soluções completas para problemas elétricos, desde bateria até sistemas de computador avançados.',
      image: '/images/service-electrical.jpg',
      link: '/servicos/sistema-eletrico'
    }
  ];

  return (
    <section className="services-section section" id="servicos">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">Conheça os principais serviços oferecidos pela nossa rede de oficinas</p>
        
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-40">
          <a href="/servicos" className="btn">Ver Todos os Serviços</a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
