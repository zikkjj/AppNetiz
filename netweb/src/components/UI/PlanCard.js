import React from 'react';
import Button from './Button';

const PlanCard = ({ name, price, speed, features, onSelect }) => (
  <div className="styled-plan-card">
    <h3 className="plan-name-badge">{name}</h3>
    <div className="styled-plan-price">R$ {price}<span>/mês</span></div>
    
    <ul className="styled-features-list">
      <li className="speed-highlight">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <strong>{speed}</strong>
      </li>
      {features.map((feat, idx) => (
        <li key={idx}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          {feat}
        </li>
      ))}
    </ul>
    
    <Button variant="outline" onClick={onSelect} className="card-select-btn">Selecionar</Button>
  </div>
);
export default PlanCard;
