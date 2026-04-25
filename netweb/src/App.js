import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import OnboardingHome from './pages/OnboardingHome';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<OnboardingHome />} />
        <Route path="/dashboard" element={<WelcomeScreen currentUser="João" onLogout={() => window.location.href = '/login'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
