import React from 'react';
import './GallerySection.css';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery-1.jpg',
      alt: 'Trabalho 1'
    },
    {
      id: 2,
      image: '/images/gallery-2.jpg',
      alt: 'Trabalho 2'
    },
    {
      id: 3,
      image: '/images/gallery-3.jpg',
      alt: 'Trabalho 3'
    },
    {
      id: 4,
      image: '/images/gallery-4.jpg',
      alt: 'Trabalho 4'
    }
  ];

  return (
    <section className="gallery-section section" id="galeria">
      <div className="container">
        <h2 className="section-title">Galeria de Trabalhos</h2>
        <p className="section-subtitle">Conheça alguns dos trabalhos realizados pelas nossas oficinas parceiras</p>
        
        <div className="gallery-grid">
          {galleryItems.map(item => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-40">
          <a href="/galeria" className="btn">Ver Galeria Completa</a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
