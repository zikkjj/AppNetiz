import React from 'react';

const HeroSection = ({ currentUser }) => (
  <section className="hero-section">
    <h1 className="hero-title">Olá, {currentUser}! Sua conexão está ativa.</h1>
    <p className="hero-subtitle">
      <span className="dot-icon"></span>
      Plano atual: <strong>Netiz Fibra 500 Mega</strong>
      <span className="status-badge">ONLINE</span>
    </p>
  </section>
);

export default HeroSection;
