import React from 'react';

const PlansSection = ({ coverageStatus, setShowCoverageModal }) => (
  <section className="plans-section">
    <h2 className="section-title">Escolha o plano ideal para você</h2>
    <div className="plans-grid">
      <div className={`plan-card ${coverageStatus === 'success' ? 'highlight-pulse' : ''}`}>
        <h3 className="plan-name">BÁSICO</h3>
        <div className="plan-price-large">R$89<span>/mês</span></div>
        <p className="plan-subtitle">Essencial e rápido para o dia a dia</p>
        
        <ul className="plan-features-list">
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
            </div>
            <span>Internet Fibra 300Mbps</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>
            </div>
            <span>Wi-fi de alta velocidade</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <span>Instalação inclusa</span>
          </li>
        </ul>
        <button className="plan-cta-large">QUERO SER NETIZ</button>
      </div>

      <div className={`plan-card ${coverageStatus === 'success' ? 'highlight-pulse' : ''}`}>
        <h3 className="plan-name">+SAÚDE PLAY</h3>
        <div className="plan-price-large">R$99<span>/mês</span></div>
        <p className="plan-subtitle">Entreterimento e saúde na medida certa para toda a família</p>
        
        <ul className="plan-features-list">
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
            </div>
            <span>Internet Fibra 900Mbps</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>
            </div>
            <span>Wi-fi de alta velocidade</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
            <span>App Netiz - seu app para serviços</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </div>
            <span>900Mbps/ 450Mbps up</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
            </div>
            <span>Atendimento Médico ONLINE 24h para você e mais 3 dependentes</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <span>CLÍNICO GERAL E PEDIATRIA</span>
          </li>
        </ul>
        
        <div className="plan-extra-benefit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="benefit-icon"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
          <p>App de Streaming com filmes e séries dos estúdios Universal e muito mais.</p>
        </div>

        <button className="plan-cta-large">QUERO SER NETIZ</button>
      </div>

      <div className={`plan-card ${coverageStatus === 'success' ? 'highlight-pulse' : ''}`}>
        <h3 className="plan-name">PREMIUM</h3>
        <div className="plan-price-large">R$129<span>/mês</span></div>
        <p className="plan-subtitle">Acesso de ultravelocidade para quem não tem limites</p>
        
        <ul className="plan-features-list">
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
            </div>
            <span>1 Giga de Internet</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6"></path></svg>
            </div>
            <span>Wi-Fi Mesh de longo alcance</span>
          </li>
          <li>
            <div className="feature-icon-wrapper">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </div>
            <span>Atendimento Prioritário</span>
          </li>
        </ul>
        <button className="plan-cta-large">QUERO SER NETIZ</button>
      </div>
    </div>
    
    <div className="compatibility-action">
      <button className="btn-compatibility" onClick={() => setShowCoverageModal(true)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pin-icon">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        Testar Compatibilidade com o Local
      </button>
      <p className="compatibility-note">Verificamos se a sua área é atendida pela Netiz</p>
    </div>
  </section>
);

export default PlansSection;
