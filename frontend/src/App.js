import React from 'react';
import './assets/styles/global.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import GallerySection from './components/sections/GallerySection';
import BlogSection from './components/sections/BlogSection';
import FaqSection from './components/sections/FaqSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <BlogSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
