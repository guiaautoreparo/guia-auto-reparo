import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">Guia Auto Reparo</h3>
            <p>
              Conectando você às melhores oficinas mecânicas com qualidade garantida e preços justos.
            </p>
          </div>
          
          <div className="footer-section links">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-links">
              <li><a href="/">Início</a></li>
              <li><a href="/sobre">Sobre Nós</a></li>
              <li><a href="/servicos">Serviços</a></li>
              <li><a href="/galeria">Galeria</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-section services">
            <h3 className="footer-title">Serviços</h3>
            <ul className="footer-links">
              <li><a href="/servicos/manutencao-preventiva">Manutenção Preventiva</a></li>
              <li><a href="/servicos/reparo-motor">Reparo de Motor</a></li>
              <li><a href="/servicos/sistema-eletrico">Sistema Elétrico</a></li>
              <li><a href="/servicos/suspensao">Suspensão</a></li>
              <li><a href="/servicos/freios">Freios</a></li>
            </ul>
          </div>
          
          <div className="footer-section contact">
            <h3 className="footer-title">Contato</h3>
            <ul className="contact-info">
              <li><a href="tel:+551199999999">(11) 9999-9999</a></li>
              <li><a href="mailto:contato@guiaautoreparo.com.br">contato@guiaautoreparo.com.br</a></li>
              <li><a href="https://maps.google.com">Av. Paulista, 1000 - São Paulo, SP</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Guia Auto Reparo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
