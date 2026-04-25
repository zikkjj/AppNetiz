import React from 'react';
import logo from '../Assets/logo.png';

const Register = ({ formData, handleChange, handleSubmit, errors, isSubmitted, switchView }) => {
  return (
    <div className="login-flat-container">
      <div className="logo-flat">
        <img src={logo} alt="Logo Netiz" />
      </div>
      
      {isSubmitted ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Cadastro realizado com sucesso!</h3>
          <p>Verifique seu e-mail para confirmar a conta.</p>
          <button 
            className="btn-login-flat" 
            onClick={() => switchView('login')}
            style={{marginTop: '24px'}}
          >
            Ir para o Login
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flat-login-form">
          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome"
              className={errors.name ? 'error-input' : ''}
            />
            {errors.name && <span className="error-tooltip">{errors.name}</span>}
          </div>

          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone"
              className={errors.telefone ? 'error-input' : ''}
            />
            {errors.telefone && <span className="error-tooltip">{errors.telefone}</span>}
          </div>

          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={errors.email ? 'error-input' : ''}
            />
            {errors.email && <span className="error-tooltip">{errors.email}</span>}
          </div>

          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Senha"
              className={errors.password ? 'error-input' : ''}
            />
            {errors.password && <span className="error-tooltip">{errors.password}</span>}
          </div>

          <div className="input-wrapper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmar senha"
              className={errors.confirmPassword ? 'error-input' : ''}
            />
            {errors.confirmPassword && <span className="error-tooltip">{errors.confirmPassword}</span>}
          </div>

          <div className="form-group checkbox-group" style={{ margin: '12px 0 8px 0', width: '100%', maxWidth: '320px', display: 'flex', flexDirection: 'column' }}>
            <label className="checkbox-label" style={{ alignItems: 'flex-start' }}>
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
              <span style={{ fontSize: '13px', lineHeight: '1.4' }}>
                Li e aceito os <a href="#termos" style={{ color: '#FDC62A', textDecoration: 'none' }}>Termos de Uso</a> e <a href="#privacidade" style={{ color: '#FDC62A', textDecoration: 'none' }}>Políticas de Privacidade</a>
              </span>
            </label>
            {errors.acceptTerms && <span className="error-text" style={{ fontSize: '12px', marginTop: '4px', textAlign: 'left' }}>{errors.acceptTerms}</span>}
          </div>

          <button type="submit" className="btn-login-flat">Cadastrar</button>

          <div className="login-links" style={{marginTop: '0'}}>
            <span className="flat-link" onClick={() => switchView('login')}>Já tenho uma conta</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
