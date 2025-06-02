import React from 'react';
import BlogCard from '../ui/BlogCard';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Como aumentar a vida útil do seu motor',
      summary: 'Descubra dicas essenciais para manter seu motor funcionando perfeitamente por mais tempo e evitar reparos caros.',
      date: '12 de Maio, 2025',
      image: '/images/blog-motor.jpg',
      link: '/blog/vida-util-motor'
    },
    {
      id: 2,
      title: 'Entendendo os sinais de problemas na suspensão',
      summary: 'Aprenda a identificar os sinais de que sua suspensão precisa de manutenção antes que o problema se agrave.',
      date: '5 de Maio, 2025',
      image: '/images/blog-suspensao.jpg',
      link: '/blog/sinais-suspensao'
    },
    {
      id: 3,
      title: 'Mitos e verdades sobre troca de óleo',
      summary: 'Esclarecemos as dúvidas mais comuns sobre troca de óleo e desmistificamos conceitos equivocados.',
      date: '28 de Abril, 2025',
      image: '/images/blog-oleo.jpg',
      link: '/blog/mitos-troca-oleo'
    }
  ];

  return (
    <section className="blog-section section" id="blog">
      <div className="container">
        <h2 className="section-title">Blog e Notícias</h2>
        <p className="section-subtitle">Fique por dentro das novidades do mundo automotivo</p>
        
        <div className="blog-grid">
          {blogPosts.map(post => (
            <BlogCard 
              key={post.id}
              title={post.title}
              summary={post.summary}
              date={post.date}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
        
        <div className="text-center mt-40">
          <a href="/blog" className="btn">Ver Todos os Artigos</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
