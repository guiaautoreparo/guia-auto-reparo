import React from 'react';
import '../assets/styles/global.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import GallerySection from './sections/GallerySection';
import BlogSection from './sections/BlogSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';

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
