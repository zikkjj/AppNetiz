import React, { useState, useRef, useEffect } from 'react';
import './WelcomeScreen.css';
import logo from './Assets/logo.png';

const WelcomeScreen = ({ currentUser, onLogout }) => {
  const [showCoverageModal, setShowCoverageModal] = useState(false);
  const [coverageInput, setCoverageInput] = useState('');
  const [isCheckingCoverage, setIsCheckingCoverage] = useState(false);
  const [coverageStatus, setCoverageStatus] = useState(null); // 'success' | 'fail'

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Olá! Sou o assistente da Netiz. Posso te ajudar com dúvidas sobre planos, suporte técnico ou verificar a cobertura na sua região. O que você precisa?' }
  ]);
  const [currentChatInput, setCurrentChatInput] = useState('');
  const [isConnectingToHuman, setIsConnectingToHuman] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isConnectingToHuman, isChatOpen]);

  const handleVerifyCoverage = (e) => {
    e.preventDefault();
    if (!coverageInput.trim()) return;
    setIsCheckingCoverage(true);
    
    // Simulate API Check
    setTimeout(() => {
      setIsCheckingCoverage(false);
      setShowCoverageModal(false);
      
      // Simulate fail logic if input ends in '0' or '9', otherwise success
      const endsWithFail = /^[09]$/.test(coverageInput.trim().slice(-1));
      
      if (endsWithFail) {
        setCoverageStatus('fail');
        setIsChatOpen(true);
        setChatMessages(prev => [
          ...prev, 
          { sender: 'bot', text: 'Olá! Identificamos que sua região ainda não tem cobertura Netiz. Mas não se preocupe, nosso time pode ajudar você a encontrar a melhor solução. Como posso te ajudar?' }
        ]);
        setUnreadCount(prev => prev + 1);
      } else {
        setCoverageStatus('success');
      }
    }, 2000);
  };

  const sendChatMessage = (text) => {
    setChatMessages(prev => [...prev, { sender: 'user', text }]);
    // Mock response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { sender: 'bot', text: 'Certo, entendi o que você precisa. Vamos dar andamento.' }]);
      if (!isChatOpen) setUnreadCount(prev => prev + 1);
    }, 1500);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!currentChatInput.trim()) return;
    sendChatMessage(currentChatInput);
    setCurrentChatInput('');
  };

  const handleQuickReply = (reply) => {
    sendChatMessage(reply);
    if (reply === 'Falar com técnico') {
      setTimeout(() => {
        setChatMessages(prev => [...prev, { sender: 'bot', text: 'Estou te conectando com um de nossos técnicos. Aguarde um momento.' }]);
        setIsConnectingToHuman(true);
        if (!isChatOpen) setUnreadCount(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <div className="welcome-container">
      {/* Success Banner */}
      {coverageStatus === 'success' && (
        <div className="success-banner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="banner-icon">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <p>Boa notícia! Sua região é atendida pela Netiz. Escolha seu plano e comece agora.</p>
        </div>
      )}

      {/* Header */}
      <header className="welcome-header">
        <img src={logo} alt="Logo Netiz" className="welcome-logo" />
        <div className="user-controls">
          <span className="user-name">Bem-vindo(a), {currentUser}!</span>
          <button className="logout-button" onClick={onLogout} aria-label="Sair">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </button>
        </div>
      </header>

      <main className="welcome-main">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="hero-title">Olá, {currentUser}! Sua conexão está ativa.</h1>
          <p className="hero-subtitle">
            <span className="dot-icon"></span>
            Plano atual: <strong>Netiz Fibra 500 Mega</strong>
            <span className="status-badge">ONLINE</span>
          </p>
        </section>

        {/* Plans Section */}
        <section className="plans-section">
          <h2 className="section-title">Escolha o plano ideal para você</h2>
          <div className="plans-grid">
            {/* Plan 1 */}
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

            {/* Plan 2: O MAIS ESCOLHIDO (Design do print) */}
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

            {/* Plan 3 */}
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

        {/* Quick Access Cards */}
        <section className="quick-access">
          {/* Card 1 */}
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
          {/* Card 2 */}
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
          {/* Card 3 */}
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
      </main>

      <footer className="welcome-footer">
        <a href="#termos" className="footer-link">Termos de Uso</a>
        <a href="#privacidade" className="footer-link">Privacidade</a>
        <a href="#contato" className="footer-link">Contato</a>
      </footer>

      {/* Coverage Test Modal */}
      {showCoverageModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Verificar Cobertura</h3>
            {isCheckingCoverage ? (
              <div className="loading-state">
                <div className="spinner"></div>
                <p>Nossa IA está verificando sua região...</p>
              </div>
            ) : (
              <form onSubmit={handleVerifyCoverage}>
                <input 
                  type="text" 
                  value={coverageInput}
                  onChange={(e) => setCoverageInput(e.target.value)}
                  placeholder="Digite seu CEP ou Endereço..." 
                  className="modal-input"
                  disabled={isCheckingCoverage}
                />
                <button type="submit" className="plan-cta modal-submit" disabled={isCheckingCoverage || !coverageInput.trim()}>Verificar</button>
                <button type="button" className="modal-close" onClick={() => setShowCoverageModal(false)}>Cancelar</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Chat Bot Floating Button */}
      <button className="chat-fab" onClick={() => { setIsChatOpen(true); setUnreadCount(0); }}>
        {unreadCount > 0 && <span className="chat-badge">{unreadCount}</span>}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* Chat Drawer Side Panel */}
      <div className={`chat-drawer ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div>
            <h4>Suporte Netiz</h4>
            <p>Atendimento via IA e técnicos especializados</p>
          </div>
          <button className="close-chat" onClick={() => setIsChatOpen(false)}>✕</button>
        </div>
        
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}>
              {msg.text}
            </div>
          ))}
          {isConnectingToHuman && (
            <div className="chat-bubble bot-msg loader-bubble">
              <div className="dot-typing"></div>
            </div>
          )}
          
          <div className="quick-replies">
            {['Ver planos', 'Suporte técnico', 'Verificar cobertura', 'Falar com técnico'].map(reply => (
               <button key={reply} className="quick-reply-pill" onClick={() => handleQuickReply(reply)}>
                 {reply}
               </button>
            ))}
          </div>

          <div ref={chatEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleChatSubmit}>
          <input 
            type="text" 
            placeholder="Digite algo..." 
            value={currentChatInput}
            onChange={(e) => setCurrentChatInput(e.target.value)}
          />
          <button type="submit" disabled={!currentChatInput.trim()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>

    </div>
  );
};

export default WelcomeScreen;
