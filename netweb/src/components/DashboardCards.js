import React from 'react';

const DashboardCards = ({ plan }) => {
  const planName = plan ? plan.name : '+SAÚDE PLAY';
  const planPrice = plan ? plan.price : '99,90';

  return (
    <div className="dashboard-cards-row">
      <div className="dash-card blue-tint">
        <div className="card-top">
          <div className="card-icon-circle bg-blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
          </div>
          <div className="card-content">
            <h3 className="card-label">Meu Plano</h3>
            <h2 className="card-value">{planName}</h2>
            <p className="card-sub-label">Acesso de Altíssima Velocidade</p>
          </div>
        </div>
        <button className="card-link-btn blue">Ver detalhes do plano &rsaquo;</button>
      </div>

      <div className="dash-card yellow-tint">
        <div className="card-top">
          <div className="card-icon-circle bg-yellow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <div className="card-content">
            <h3 className="card-label">Fatura Atual</h3>
            <h2 className="card-value">R$ {planPrice}</h2>
            <p className="card-status"><span className="status-dot yellow"></span> Vence em 5 dias</p>
          </div>
        </div>
        <button className="card-action-yellow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          Pagar Agora
        </button>
      </div>

      <div className="dash-card green-tint">
        <div className="card-top">
          <div className="card-icon-circle bg-green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div className="card-content">
            <h3 className="card-label">Status da Conexão</h3>
            <h2 className="card-value" style={{color: '#10B981'}}>Online</h2>
            <p className="card-status"><span className="status-dot green"></span> Conexão Estável</p>
          </div>
        </div>
        <button className="card-link-btn green-outline">
           Realizar Teste de Velocidade
        </button>
      </div>
    </div>
  );
};
export default DashboardCards;
