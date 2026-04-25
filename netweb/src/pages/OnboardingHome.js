import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Stepper from '../components/UI/Stepper';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';
import PlanCard from '../components/UI/PlanCard';
import MapPlaceholder from '../components/UI/MapPlaceholder';
import ChatBotUI from '../components/UI/ChatBotUI';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorState from '../components/UI/ErrorState';
import logo from '../Assets/logo.png';
import '../Onboarding.css';

const OnboardingHome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || { name: 'Cliente Silva', email: '' }; // fallbacks se não ver do Cadastro

  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null); 
  
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState({ rua: '', numero: '', bairro: '' });
  const [hasCoverage, setHasCoverage] = useState(true);
  const [leadForm, setLeadForm] = useState({ name: user.name || '', phone: '' });
  const [selectedPlan, setSelectedPlan] = useState(null);
  
  const [finalRegister, setFinalRegister] = useState({ cpf: '', email: user.email || '', birthDate: '', paymentMethod: 'credit' });

  const handleCheckCep = async () => {
    setIsLoading(true);
    setErrorStatus(null);
    setTimeout(() => {
      setIsLoading(false);
      if (cep === '00000-000') {
        setErrorStatus('timeout');
      } else if (cep === '11111-111') {
        setErrorStatus('invalid_cep');
      } else if (cep === '22222-222') {
        setHasCoverage(false);
        setStep(2);
      } else {
        setHasCoverage(true);
        setAddress({ rua: 'Rua das Flores', numero: '', bairro: 'Centro' });
        setStep(2);
      }
    }, 2000);
  };

  const handleAddressSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  const renderStep3 = () => {
    if (hasCoverage) {
      return (
        <div className="anim-fade-in content-box">
          <h2 className="success-text">Ótima notícia! Você tem cobertura Netiz 🎉</h2>
          <MapPlaceholder hasCoverage={true} />
          <Button onClick={() => setStep(4)} className="w-full mt-4">Ver planos disponíveis</Button>
        </div>
      );
    } else {
      return (
        <div className="anim-fade-in content-box">
          <h2 className="error-text">Ainda não atendemos seu endereço 😢</h2>
          <p>Mas em breve estaremos na sua região! Cadastre-se para ser o primeiro a saber.</p>
          <MapPlaceholder hasCoverage={false} />
          <div className="mt-4">
            <Input label="Nome" value={leadForm.name} onChange={e => setLeadForm({...leadForm, name: e.target.value})} />
            <Input label="Telefone" value={leadForm.phone} onChange={e => setLeadForm({...leadForm, phone: e.target.value})} />
            <Button onClick={() => alert("Valeu pelo interesse!")} className="w-full mt-4">Quero ser avisado</Button>
            <Button variant="outline" className="w-full mt-2" onClick={() => alert("Abrindo Wpp")}>Falar com atendente</Button>
          </div>
        </div>
      );
    }
  };

  const plans = [
    { 
      id: 1, name: '+SAÚDE', price: '89', variant: 'light',
      description: 'Ideal pra quem quer velocidade de sobra com cuidado de verdade.',
      features: [
        { icon: 'wifi', text: 'Internet Fibra 700Mbps' },
        { icon: 'signal', text: 'Wi-fi de alta velocidade' },
        { icon: 'smartphone', text: 'App Netiz - seu app para serviços' },
        { icon: 'download', text: '700Mbps / 350Mbps up' },
        { icon: 'stethoscope', text: 'Atendimento Médico ONLINE 24h para você e mais 3 dependentes' },
        { icon: 'user-md', text: 'CLÍNICO GERAL E PEDIATRIA' }
      ],
      promo: { text: 'App com e-books e/ou audiobooks.', badges: ['VA LIVROS'], icon: 'book' }
    },
    { 
      id: 2, name: '+SAÚDE PLAY', price: '99', variant: 'dark',
      description: 'Entretenimento e saúde na medida certa para toda a família!',
      features: [
        { icon: 'wifi', text: 'Internet Fibra 900Mbps' },
        { icon: 'signal', text: 'Wi-fi de alta velocidade' },
        { icon: 'smartphone', text: 'App Netiz - seu app para serviços' },
        { icon: 'download', text: '900Mbps / 450Mbps up' },
        { icon: 'stethoscope', text: 'Atendimento Médico ONLINE 24h para você e mais 3 dependentes' },
        { icon: 'user-md', text: 'CLÍNICO GERAL E PEDIATRIA' }
      ],
      promo: { text: 'App de Streaming com filmes e séries dos estúdios Universal e muito mais.', badges: ['VA LIVROS', 'WATCH', 'UNIVERSAL'], icon: 'tv' }
    },
    { 
      id: 3, name: 'PLANO FAMÍLIA', price: '109,00', variant: 'light',
      description: 'Conecte todos os dispositivos da sua família com nosso PLANO FAMÍLIA e tenha o melhor da diversão.',
      features: [
        { icon: 'wifi', text: 'Internet Fibra 900Mbps', highlight: true },
        { icon: 'signal', text: 'Wi-fi de alta velocidade' },
        { icon: 'smartphone', text: 'App Netiz - seu app para serviços' },
        { icon: 'download', text: '900Mbps / 450Mbps up', highlight: true }
      ],
      promo: { text: 'App de Streaming com filmes e séries e muito mais.', badges: ['WATCH', 'HBO MAX', 'VA LIVROS'], icon: 'tv' }
    }
  ];

  const renderStep4 = () => (
    <div className="anim-fade-in content-box plans-container-wide">
      <h2 style={{textAlign: 'center', marginBottom: '32px', fontSize: '28px', color: '#0F4A9F'}}>Escolha seu Plano</h2>
      <div className="ntz-plans-row">
        {plans.map(p => (
          <PlanCard 
            key={p.id} 
            plan={p}
            onSelect={() => { setSelectedPlan(p); setStep(5); }} 
          />
        ))}
      </div>
    </div>
  );

  const handleFinal = () => {
    if (finalRegister.cpf.length >= 11) {
      setIsLoading(true);
      setTimeout(() => { setIsLoading(false); setStep(6); }, 2000);
    }
  };

  return (
    <div className="onboarding-layout">
      <div className="onboarding-header">
        <img src={logo} alt="Netiz" className="onboarding-logo" />
        <Stepper currentStep={step} totalSteps={6} />
      </div>

      <div className="onboarding-main">
        {isLoading && <LoadingSpinner />}
        
        {!isLoading && errorStatus === 'timeout' && (
          <ErrorState message="Tempo esgotado ao buscar o CEP." onRetry={() => setErrorStatus(null)} />
        )}
        {!isLoading && errorStatus === 'invalid_cep' && (
          <ErrorState message="CEP inválido detectado." />
        )}

        {!isLoading && !errorStatus && (
          <>
            {step === 1 && (
              <div className="anim-fade-in content-box">
                <h2>Verificar Cobertura</h2>
                <p className="text-secondary mb-4">Veja se a Netiz já chegou na sua rua antes de preencher seus dados.</p>
                <Input 
                  label="Digite seu CEP" 
                  placeholder="Ex: 00000-000" 
                  value={cep} 
                  onChange={e => setCep(e.target.value)} 
                />
                <Button onClick={handleCheckCep} className="w-full mt-4" disabled={!cep}>Próximo passo</Button>
              </div>
            )}

            {step === 2 && (
              <div className="anim-fade-in content-box">
                <h2>Confirme seu Endereço</h2>
                <Input label="Rua" value={address.rua} onChange={e => setAddress({...address, rua: e.target.value})} />
                <Input label="Número" value={address.numero} onChange={e => setAddress({...address, numero: e.target.value})} />
                <Input label="Bairro" value={address.bairro} onChange={e => setAddress({...address, bairro: e.target.value})} />
                <Button onClick={handleAddressSubmit} className="w-full mt-4">Confirmar endereço</Button>
              </div>
            )}

            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}
            
            {step === 5 && (
              <div className="anim-fade-in content-box">
                <h2>Finalizar Contratação</h2>
                <div style={{marginBottom: '16px', padding: '12px', background: '#F8F9FA', borderRadius: '8px'}}>
                   <p style={{margin: 0, fontSize: '14px', color: '#374151'}}><strong>Cliente:</strong> {user.name}</p>
                   <p style={{margin: 0, fontSize: '14px', color: '#1A73E8'}}><strong>Plano:</strong> {selectedPlan.name}</p>
                </div>
                
                <Input label="CPF" placeholder="000.000.000-00" value={finalRegister.cpf} onChange={e => setFinalRegister({...finalRegister, cpf: e.target.value})} />
                <Input label="E-mail" value={finalRegister.email} onChange={e => setFinalRegister({...finalRegister, email: e.target.value})} />
                <Input label="Data de nascimento" type="date" value={finalRegister.birthDate} onChange={e => setFinalRegister({...finalRegister, birthDate: e.target.value})} />
                
                <div className="mt-4">
                  <label className="input-label">Forma de Pagamento</label>
                  <select 
                    className="input-field w-full" 
                    value={finalRegister.paymentMethod} 
                    onChange={e => setFinalRegister({...finalRegister, paymentMethod: e.target.value})}
                  >
                    <option value="credit">Cartão de Crédito</option>
                    <option value="boleto">Boleto (Recomendado)</option>
                    <option value="debit">Débito em Conta</option>
                  </select>
                </div>

                <Button onClick={handleFinal} className="w-full mt-4 btn-warning">Contratar agora</Button>
              </div>
            )}

            {step === 6 && (
              <div className="anim-fade-in content-box text-center">
                <div className="success-circle-huge">✓</div>
                <h2 className="success-text mt-4">Tudo Certo, {user.name.split(' ')[0]}! 🎉</h2>
                <p>Seu pedido do plano <strong>{selectedPlan.name}</strong> foi confirmado com sucesso.</p>
                <div className="protocol-box">
                   Protocolo: <strong>NTZ-{Math.floor(Math.random()*100000)}</strong>
                </div>
                <p className="install-notice">Prazo de instalação: <strong>Amanhã à tarde</strong>.</p>
                <Button onClick={() => navigate('/dashboard', { state: { user, plan: selectedPlan } })} className="w-full mt-4">Acessar Meu Dashboard</Button>
              </div>
            )}
          </>
        )}
      </div>

      <ChatBotUI suggestedMessage={step === 1 ? "Precisa de ajuda para verificar o número do seu CEP?" : (step === 3 && !hasCoverage) ? "Deseja falar com nosso especialista sobre a expansão?" : "Estou aqui se precisar!"} />
    </div>
  );
};
export default OnboardingHome;
