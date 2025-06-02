import React, { useState } from 'react';
import Navigation from './Navigation';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="/">Guia Auto Reparo</a>
          </div>
          
          <div className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <Navigation mobileMenuOpen={mobileMenuOpen} />
          
          <div className="header-cta">
            <a href="/login" className="btn">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
