import React from 'react';

const DashboardCards = () => {
  return (
    <div className="dashboard-cards-row">
      <div className="dash-card blue-tint">
        <div className="card-top">
          <div className="card-icon-circle bg-blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
          </div>
          <div className="card-content">
            <p className="card-label">Meu Plano</p>
            <h3 className="card-value">Netiz Fibra 500 Mega</h3>
            <p className="card-status"><span className="status-dot green"></span> Ativo</p>
          </div>
        </div>
        <button className="card-link-btn blue">Alterar plano →</button>
      </div>

      <div className="dash-card yellow-tint">
        <div className="card-top">
          <div className="card-icon-circle bg-yellow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F57F17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </div>
          <div className="card-content">
            <p className="card-label">Próxima Fatura</p>
            <h3 className="card-value">R$ 99,90</h3>
            <p className="card-sub-label">Vence em 10/11/2023</p>
          </div>
        </div>
        <button className="card-action-yellow">Pagar agora →</button>
      </div>

      <div className="dash-card green-tint">
        <div className="card-top">
          <div className="card-icon-circle bg-green">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </div>
          <div className="card-content">
            <p className="card-label">Status da Internet</p>
            <h3 className="card-value">Excelente</h3>
            <p className="card-status"><span className="status-dot green"></span> Tudo funcionando bem!</p>
          </div>
        </div>
        <button className="card-link-btn green-outline">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
           Testar velocidade
        </button>
      </div>

    </div>
  );
};

export default DashboardCards;
