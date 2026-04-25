import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Cadastro = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', telefone: '', email: '', password: '', confirmPassword: '', acceptTerms: false });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password && formData.password === formData.confirmPassword && formData.acceptTerms) {
      navigate('/home', { state: { user: formData } });
    } else {
      setErrors({ confirmPassword: 'Verifique senhas e termos' });
    }
  };

  return (
    <div className="App flat-style">
      <div className="registration-container">
        <div className="login-flat-container">
          <div className="logo-flat">
            <img src={logo} alt="Logo Netiz" />
          </div>
          
          <form onSubmit={handleSubmit} className="flat-login-form">
            <div className="input-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome completo" />
            </div>

            <div className="input-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" />
            </div>

            <div className="input-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>

            <div className="input-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
            </div>

            <div className="input-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="input-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirmar senha" />
              {errors.confirmPassword && <span className="error-tooltip">{errors.confirmPassword}</span>}
            </div>

            <div className="form-group checkbox-group" style={{ margin: '12px 0 8px 0', width: '100%' }}>
              <label className="checkbox-label" style={{ alignItems: 'flex-start' }}>
                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} />
                <span style={{ fontSize: '13px', lineHeight: '1.4' }}>
                  Li e aceito os <a href="#termos" style={{ color: '#FDC62A', textDecoration: 'none' }}>Termos de Uso</a> e <a href="#privacidade" style={{ color: '#FDC62A', textDecoration: 'none' }}>Políticas de Privacidade</a>
                </span>
              </label>
            </div>

            <button type="submit" className="btn-login-flat">Cadastrar</button>

            <div className="login-links" style={{marginTop: '12px'}}>
              <Link to="/login" className="flat-link">Já tenho uma conta</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
