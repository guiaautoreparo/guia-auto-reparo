import React from 'react';
import './Navigation.css';

const Navigation = ({ mobileMenuOpen }) => {
  const navLinks = [
    { name: 'Início', url: '/' },
    { name: 'Sobre Nós', url: '/sobre' },
    { name: 'Serviços', url: '/servicos' },
    { name: 'Galeria', url: '/galeria' },
    { name: 'Blog', url: '/blog' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Contato', url: '/contato' }
  ];

  return (
    <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <a href={link.url} className="nav-link">{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
