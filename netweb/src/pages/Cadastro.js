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
      navigate('/home');
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
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome completo" />
            </div>
            <div className="input-wrapper">
              <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" />
            </div>
            <div className="input-wrapper">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            </div>
            <div className="input-wrapper">
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
            </div>
            <div className="input-wrapper">
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirmar senha" />
              {errors.confirmPassword && <span className="error-tooltip">{errors.confirmPassword}</span>}
            </div>
            <div className="form-group checkbox-group" style={{ margin: '12px 0 8px 0', width: '100%' }}>
              <label className="checkbox-label" style={{ alignItems: 'flex-start' }}>
                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} />
                <span style={{ fontSize: '13px' }}>Aceito termos</span>
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
