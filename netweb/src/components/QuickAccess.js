import React from 'react';

const QuickAccess = () => (
  <section className="quick-access">
    <div className="card">
      <div className="card-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      </div>
      <h4 className="card-title">Minha Fatura</h4>
      <p className="card-description">Acesse e pague seus boletos de forma rápida.</p>
      <button className="card-cta">Visualizar</button>
    </div>
    <div className="card">
       <div className="card-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
      <h4 className="card-title">Suporte</h4>
      <p className="card-description">Fale com um de nossos atendentes agora mesmo.</p>
      <button className="card-cta">Atendimento</button>
    </div>
    <div className="card">
      <div className="card-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      </div>
      <h4 className="card-title">Velocidade</h4>
      <p className="card-description">Faça um teste de velocidade da sua internet.</p>
      <button className="card-cta">Testar Agora</button>
    </div>
  </section>
);

export default QuickAccess;
