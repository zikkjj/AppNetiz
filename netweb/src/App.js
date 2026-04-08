import React, { useState } from 'react';
import './App.css';
import logo from './Assets/logo.png';
import WelcomeScreen from './WelcomeScreen';

function App() {
  const [currentView, setCurrentView] = useState('login'); // 'login' | 'register' | 'recover'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  // Authentication Data (Login / Register)
  const [formData, setFormData] = useState({
    name: '',
    telefone: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Recovery Data
  const [recoverStep, setRecoverStep] = useState(1); // 1 = Request, 2 = Code + New Pass, 3 = Success
  const [recoverData, setRecoverData] = useState({
    email: '',
    code: '',
    password: '',
    confirmPassword: '',
    acceptResponsibility: false
  });
  const [recoverErrors, setRecoverErrors] = useState({});

  // ----------------------------------------------------
  // Handlers for Login & Register
  // ----------------------------------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (currentView === 'register') {
      if (!formData.name.trim()) tempErrors.name = "Obrigatório";
      if (!formData.telefone.trim()) tempErrors.telefone = "Obrigatório";
      if (!formData.acceptTerms) tempErrors.acceptTerms = "Você deve aceitar os termos";
    }

    if (!formData.email) {
      tempErrors.email = "Obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Inválido";
    }
    
    if (!formData.password) {
      tempErrors.password = "Obrigatória";
    } else if (currentView === 'register' && formData.password.length < 6) {
      tempErrors.password = "Mín. 6 chars";
    }
    
    if (currentView === 'register') {
      if (formData.password !== formData.confirmPassword) {
        tempErrors.confirmPassword = "Não coincidem";
      }
      if (!formData.confirmPassword){
        tempErrors.confirmPassword = "Obrigatória";
      }
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      if (currentView === 'login') {
         setIsLoggedIn(true);
         setCurrentUser(formData.email.split('@')[0] || 'Usuário');
         setFormData({name: '', telefone: '', email: '', password: '', confirmPassword: '', acceptTerms: false});
         setIsSubmitted(false);
      }
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  const switchView = (view) => {
    setCurrentView(view);
    setErrors({});
    setRecoverErrors({});
    setIsSubmitted(false);
    setRecoverStep(1);
    setFormData({name: '', telefone: '', email: '', password: '', confirmPassword: '', acceptTerms: false});
    setRecoverData({email: '', code: '', password: '', confirmPassword: '', acceptResponsibility: false});
  };

  // ----------------------------------------------------
  // Handlers for Password Recovery
  // ----------------------------------------------------
  const handleRecoverChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRecoverData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (recoverErrors[name]) {
      setRecoverErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleRecoverSubmitStep1 = (e) => {
    e.preventDefault();
    let tempErrors = {};
    if (!recoverData.email) {
      tempErrors.email = "Obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(recoverData.email)) {
      tempErrors.email = "Inválido";
    }
    if (!recoverData.acceptResponsibility) {
      tempErrors.acceptResponsibility = "Aceite o termo";
    }

    if (Object.keys(tempErrors).length === 0) {
      // Logic for sending the code via API ...
      setRecoverStep(2);
    } else {
      setRecoverErrors(tempErrors);
    }
  };

  const handleRecoverSubmitStep2 = (e) => {
    e.preventDefault();
    let tempErrors = {};
    if (!recoverData.code.trim()) {
      tempErrors.code = "Obrigatório";
    }
    if (!recoverData.password) {
      tempErrors.password = "Obrigatória";
    } else if (recoverData.password.length < 6) {
      tempErrors.password = "Mín. 6 chars";
    }
    if (recoverData.password !== recoverData.confirmPassword) {
      tempErrors.confirmPassword = "Não coincidem";
    }

    if (Object.keys(tempErrors).length === 0) {
      // Simulate API success
      setRecoverStep(3);
    } else {
      setRecoverErrors(tempErrors);
    }
  };

  // ----------------------------------------------------
  // Render Main Layout Block
  // ----------------------------------------------------
  if (isLoggedIn) {
    return <WelcomeScreen currentUser={currentUser} onLogout={() => setIsLoggedIn(false)} />;
  }

  return (
    <div className={`App flat-style`}>
      <div className="registration-container">
        
        {/* ======================= LOGIN VIEW ======================= */}
        {currentView === 'login' && (
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
                 <span className="flat-link" onClick={() => switchView('recover')}>Esqueci minha senha.</span>
                 <span className="flat-link" onClick={() => switchView('register')}>Não possui conta?</span>
               </div>
             </form>
           </div>
        )}

        {/* ======================= REGISTRATION VIEW ======================= */}
        {currentView === 'register' && (
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
                
                {/* Name */}
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

                {/* Telefone */}
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

                {/* Email */}
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

                {/* Password */}
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

                {/* Confirm Password */}
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

                {/* Terms Checkbox */}
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
        )}

        {/* ======================= FILE RECOVER VIEW ======================= */}
        {currentView === 'recover' && (
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
        )}

      </div>
    </div>
  );
}

export default App;
