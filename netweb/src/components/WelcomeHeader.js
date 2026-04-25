import React from 'react';

const WelcomeHeader = ({ currentUser, onLogout }) => {
  return (
    <header className="dashboard-header">
      <div className="header-greeting">
        <h1>Olá, {currentUser}! 👋</h1>
        <p>Aqui está um resumo da sua internet.</p>
      </div>
      <div className="header-actions">
        <button className="btn-yellow-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><rect x="2" y="5" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
          Pagar Fatura
        </button>
        <button className="btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          Suporte
        </button>
        <button className="btn-outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg>
          Ver Planos
        </button>

        <div className="header-profile">
          <button className="icon-btn-rounded">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
            <span className="badge-dot"></span>
          </button>
          <button className="icon-btn-rounded">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </button>
          <div className="profile-info" onClick={onLogout}>
            <div className="profile-pic"></div>
            <div className="profile-text">
              <span className="profile-name">{currentUser}</span>
              <span className="profile-role">Cliente VIP</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WelcomeHeader;
