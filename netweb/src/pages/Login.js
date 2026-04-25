import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../Assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors({ email: !formData.email ? 'Obrigatório' : '', password: !formData.password ? 'Obrigatório' : '' });
      return;
    }
    navigate('/dashboard');
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

            <button type="submit" className="btn-login-flat">Entrar</button>

            <div className="login-links">
              <span className="flat-link">Esqueci minha senha.</span>
              <Link to="/cadastro" className="flat-link">Não possui conta?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
