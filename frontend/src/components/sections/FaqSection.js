import React, { useState } from 'react';
import './FaqSection.css';
import FaqItem from '../ui/FaqItem';

const FaqSection = () => {
  const faqItems = [
    {
      id: 1,
      question: 'Como funciona a rede de oficinas?',
      answer: 'Nossa rede conecta você às melhores oficinas mecânicas da sua região. Todas as oficinas parceiras passam por um rigoroso processo de seleção e avaliação contínua para garantir a qualidade dos serviços prestados.'
    },
    {
      id: 2,
      question: 'Como se tornar uma oficina parceira?',
      answer: 'Para se tornar uma oficina parceira, é necessário passar por um processo de avaliação que inclui verificação de documentação, visita técnica, análise de equipamentos e qualificação da equipe. Entre em contato conosco para iniciar o processo.'
    },
    {
      id: 3,
      question: 'Os serviços possuem garantia?',
      answer: 'Sim, todos os serviços realizados por nossas oficinas parceiras possuem garantia. O período de garantia varia conforme o tipo de serviço realizado, mas geralmente é de 3 a 6 meses para peças e serviços.'
    },
    {
      id: 4,
      question: 'Como funciona o pagamento?',
      answer: 'O pagamento é feito diretamente à oficina após a conclusão do serviço. Aceitamos diversas formas de pagamento, incluindo dinheiro, cartões de crédito/débito e, em alguns casos, parcelamento.'
    }
  ];

  return (
    <section className="faq-section section" id="faq">
      <div className="container">
        <h2 className="section-title">Perguntas Frequentes</h2>
        <p className="section-subtitle">Tire suas dúvidas sobre nossos serviços</p>
        
        <div className="faq-container">
          {faqItems.map(item => (
            <FaqItem 
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
        
        <div className="text-center mt-40">
          <a href="/faq" className="btn">Ver Todas as Perguntas</a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
