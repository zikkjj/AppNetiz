import React, { useState } from 'react';
import './App.css';
import logo from './Assets/logo.png';
import WelcomeScreen from './WelcomeScreen';

function App() {
  const [isLoginView, setIsLoginView] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!isLoginView && !formData.name.trim()) tempErrors.name = "Nome é obrigatório";
    if (!formData.email) {
      tempErrors.email = "E-mail é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "E-mail inválido";
    }
    
    if (!formData.password) {
      tempErrors.password = "Senha é obrigatória";
    } else if (!isLoginView && formData.password.length < 6) {
      tempErrors.password = "A senha deve ter pelo menos 6 caracteres";
    }
    
    if (!isLoginView) {
      if (formData.password !== formData.confirmPassword) {
        tempErrors.confirmPassword = "As senhas não coincidem";
      }
      if (!formData.confirmPassword){
        tempErrors.confirmPassword = "Senha é obrigatória";
      }
      if (!formData.acceptTerms) {
        tempErrors.acceptTerms = "Você deve aceitar os termos de uso";
      }
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      console.log(isLoginView ? "Login data submitted:" : "Registration data submitted:", formData);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setErrors({});
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    });
  };

  if (isLoggedIn) {
    return <WelcomeScreen currentUser={currentUser} onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className="App">
      <div className="registration-container">
        <div className="registration-card">
          <div className="logo">
            <img src={logo} alt="Logo Netiz" />
          </div>
          
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h3>{isLoginView ? 'Login realizado com sucesso!' : 'Cadastro realizado com sucesso!'}</h3>
              {!isLoginView && <p>Verifique seu e-mail para confirmar a conta.</p>}
              <button 
                className="btn-primary" 
                onClick={() => {
                  setIsSubmitted(false);
                  
                  if (!isLoginView) {
                    // Registration successful - go to login view
                    setIsLoginView(true);
                    setFormData(prev => ({...prev, password: '', confirmPassword: '', acceptTerms: false}));
                  } else {
                    // Login successful - go to welcome screen
                    setIsLoggedIn(true);
                    setCurrentUser(formData.email.split('@')[0] || 'Usuário');
                    setFormData({name: '', email: '', password: '', confirmPassword: '', acceptTerms: false});
                  }
                }}
              >
                {isLoginView ? 'Continuar' : 'Ir para o Login'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="registration-form">
              {!isLoginView && (
                <div className="form-group">
                  <label htmlFor="name">Nome completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error-input' : ''}
                    placeholder="Seu nome"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error-input' : ''}
                  placeholder="seu@email.com"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error-input' : ''}
                  placeholder="••••••••"
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              {!isLoginView && (
                <>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirme a senha</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={errors.confirmPassword ? 'error-input' : ''}
                      placeholder="••••••••"
                    />
                    {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                      />
                      <span>Li e aceito as <a href="#" className="toggle-link">Políticas de Privacidade</a></span>
                    </label>
                    {errors.acceptTerms && <span className="error-text">{errors.acceptTerms}</span>}
                  </div>
                </>
              )}

              <button type="submit" className="btn-primary">
                {isLoginView ? 'Entrar' : 'Cadastrar'}
              </button>

              <div className="toggle-view">
                <p>
                  {isLoginView ? 'Não tem uma conta? ' : 'Já possui uma conta? '}
                  <span className="toggle-link" onClick={toggleView}>
                    {isLoginView ? 'Cadastre-se' : 'Faça login'}
                  </span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
