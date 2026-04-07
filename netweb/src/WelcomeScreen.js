import React from 'react';
import './WelcomeScreen.css';
import logo from './Assets/logo.png';

const WelcomeScreen = ({ currentUser, onLogout }) => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <img src={logo} alt="Logo Netiz" className="welcome-logo" />
        <div className="user-controls">
          <span className="user-name">Bem-vindo(a), {currentUser}!</span>
          <button className="logout-button" onClick={onLogout} aria-label="Sair">
            {/* Simple logout icon (line, white) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </header>

      <main className="welcome-main">
        <section className="hero-section">
          <h1 className="hero-title">Olá, {currentUser}! Sua conexão está ativa.</h1>
          <p className="hero-subtitle">
            <span className="dot-icon"></span>
            Plano atual: <strong>Netiz Fibra 500 Mega</strong>
            <span className="status-badge">ONLINE</span>
          </p>
        </section>

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
            <h2 className="card-title">Minha Fatura</h2>
            <p className="card-description">Acesse e pague seus boletos de forma rápida.</p>
            <button className="card-cta">Visualizar</button>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h2 className="card-title">Suporte</h2>
            <p className="card-description">Fale com um de nossos atendentes agora mesmo.</p>
            <button className="card-cta">Atendimento</button>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h2 className="card-title">Velocidade</h2>
            <p className="card-description">Faça um teste de velocidade da sua internet.</p>
            <button className="card-cta">Testar Agora</button>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
            </div>
            <h2 className="card-title">App Netiz</h2>
            <p className="card-description">Baixe nosso app e tenha tudo na palma da mão.</p>
            <button className="card-cta">Baixar App</button>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <h2 className="card-title">Saúde Play</h2>
            <p className="card-description">Acesse seus benefícios exclusivos do plano.</p>
            <button className="card-cta">Acessar</button>
          </div>
        </section>
      </main>

      <footer className="welcome-footer">
        <a href="#termos" className="footer-link">Termos de Uso</a>
        <a href="#privacidade" className="footer-link">Privacidade</a>
        <a href="#contato" className="footer-link">Contato</a>
      </footer>
    </div>
  );
};

export default WelcomeScreen;
