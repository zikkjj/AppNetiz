import React from 'react';

const ErrorState = ({ message, onRetry }) => (
  <div className="error-state-container">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom: '16px'}}>
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
    <p className="error-message">{message}</p>
    {onRetry && (
      <button className="btn-outline error-retry-btn" onClick={onRetry}>Tentar novamente</button>
    )}
  </div>
);
export default ErrorState;
