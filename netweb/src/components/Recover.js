import React from 'react';
import logo from '../Assets/logo.png';

const Recover = ({ 
  recoverStep, 
  recoverData, 
  handleRecoverChange, 
  handleRecoverSubmitStep1, 
  handleRecoverSubmitStep2, 
  recoverErrors, 
  switchView 
}) => {
  return (
    <div className="login-flat-container">
      <div className="logo-flat">
        <img src={logo} alt="Logo Netiz" />
      </div>

      {recoverStep === 1 && (
        <form onSubmit={handleRecoverSubmitStep1} className="flat-login-form">
          <p style={{ color: '#FFF', fontSize: '14px', textAlign: 'center', marginBottom: '8px' }}>
            Informe seu e-mail para receber o código de recuperação.
          </p>
          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input
              type="email"
              name="email"
              value={recoverData.email}
              onChange={handleRecoverChange}
              placeholder="Email"
              className={recoverErrors.email ? 'error-input' : ''}
            />
            {recoverErrors.email && <span className="error-tooltip">{recoverErrors.email}</span>}
          </div>

          <div className="form-group checkbox-group" style={{ margin: '8px 0', width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column' }}>
            <label className="checkbox-label" style={{ alignItems: 'flex-start' }}>
              <input
                type="checkbox"
                name="acceptResponsibility"
                checked={recoverData.acceptResponsibility}
                onChange={handleRecoverChange}
              />
              <span style={{ fontSize: '13px', lineHeight: '1.4' }}>
                Declaro ser o titular legítimo desta conta Netiz.
              </span>
            </label>
            {recoverErrors.acceptResponsibility && <span className="error-text" style={{ fontSize: '12px', marginTop: '4px', textAlign: 'left' }}>{recoverErrors.acceptResponsibility}</span>}
          </div>

          <button type="submit" className="btn-login-flat">Enviar Código</button>
          <div className="login-links" style={{marginTop: '0'}}>
            <span className="flat-link" onClick={() => switchView('login')}>Voltar ao login</span>
          </div>
        </form>
      )}

      {recoverStep === 2 && (
        <form onSubmit={handleRecoverSubmitStep2} className="flat-login-form">
          <p style={{ color: '#FFF', fontSize: '14px', textAlign: 'center', marginBottom: '8px' }}>
            Digite o código recebido no seu e-mail e a nova senha.
          </p>
          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <line x1="8" y1="6" x2="21" y2="6"></line>
              <line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line>
              <line x1="3" y1="6" x2="3.01" y2="6"></line>
              <line x1="3" y1="12" x2="3.01" y2="12"></line>
              <line x1="3" y1="18" x2="3.01" y2="18"></line>
            </svg>
            <input
              type="text"
              name="code"
              value={recoverData.code}
              onChange={handleRecoverChange}
              placeholder="Código de verificação"
              className={recoverErrors.code ? 'error-input' : ''}
            />
            {recoverErrors.code && <span className="error-tooltip">{recoverErrors.code}</span>}
          </div>

          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              type="password"
              name="password"
              value={recoverData.password}
              onChange={handleRecoverChange}
              placeholder="Nova senha"
              className={recoverErrors.password ? 'error-input' : ''}
            />
            {recoverErrors.password && <span className="error-tooltip">{recoverErrors.password}</span>}
          </div>

          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              type="password"
              name="confirmPassword"
              value={recoverData.confirmPassword}
              onChange={handleRecoverChange}
              placeholder="Confirmar nova senha"
              className={recoverErrors.confirmPassword ? 'error-input' : ''}
            />
            {recoverErrors.confirmPassword && <span className="error-tooltip">{recoverErrors.confirmPassword}</span>}
          </div>

          <button type="submit" className="btn-login-flat">Alterar Senha</button>
          <div className="login-links" style={{marginTop: '0'}}>
            <span className="flat-link" onClick={() => switchView('login')}>Voltar ao login</span>
          </div>
        </form>
      )}

      {recoverStep === 3 && (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Senha alterada!</h3>
          <p>Você já pode usar sua nova senha.</p>
          <button 
            className="btn-login-flat" 
            onClick={() => switchView('login')}
            style={{marginTop: '24px'}}
          >
            Fazer Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Recover;
