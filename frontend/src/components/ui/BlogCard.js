import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, summary, date, image, link }) => {
  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-content">
        <div className="blog-date">{date}</div>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-summary">{summary}</p>
        <a href={link} className="btn-blog">Ler Mais</a>
      </div>
    </div>
  );
};

export default BlogCard;
