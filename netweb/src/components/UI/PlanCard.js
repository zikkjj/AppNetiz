import React from 'react';

const PlanCard = ({ plan, onSelect }) => {
  const { name, price, description, features, promo, variant } = plan;
  const isDark = variant === 'dark';
  
  const getIconSvg = (iconName) => {
    switch(iconName) {
      case 'wifi': return <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"></path>;
      case 'signal': return <path d="M18 20V10M12 20V4M6 20v-6"></path>;
      case 'smartphone': return <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></>;
      case 'download': return <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></>;
      case 'stethoscope': return <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>;
      case 'user-md': return <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></>;
      case 'book': return <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></>;
      case 'tv': return <><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></>;
      default: return <circle cx="12" cy="12" r="10"></circle>;
    }
  };

  return (
    <div className={`ntz-card ${isDark ? 'ntz-card-dark' : 'ntz-card-light'}`}>
      <div className="ntz-card-header">
        <h3 className="ntz-name">{name}</h3>
        <div className="ntz-price-box">
          <span className="ntz-currency">R$</span>
          <span className="ntz-value">{price.split(',')[0]}</span>
          {price.includes(',') && <span className="ntz-cents">,{price.split(',')[1]}</span>}
          <span className="ntz-period">/mês</span>
        </div>
        <p className="ntz-desc">{description}</p>
      </div>

      <ul className="ntz-features">
        {features.map((feat, idx) => (
          <li key={idx} className="ntz-feat-item">
            <div className={`ntz-icon-wrapper ${isDark ? 'icon-dark' : 'icon-light'}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {getIconSvg(feat.icon)}
              </svg>
            </div>
            <div className={`ntz-feat-text ${feat.highlight ? 'feat-highlighted' : ''}`}>
              {feat.text}
            </div>
          </li>
        ))}
      </ul>

      {promo && (
        <div className={`ntz-promo ${isDark ? 'promo-dark' : 'promo-light'}`}>
          <div className="ntz-promo-text-row">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isDark ? '#4ade80' : '#22C55E'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ntz-promo-icon">
               {getIconSvg(promo.icon)}
            </svg>
            <p>{promo.text}</p>
          </div>
          <div className="ntz-badges">
            {promo.badges.map(b => (
              <span key={b} className={`ntz-badge badge-${b.replace(/ /g, '').toLowerCase()}`}>
                {b}
              </span>
            ))}
          </div>
        </div>
      )}

      <button className="ntz-btn-yellow" onClick={onSelect}>QUERO SER NETIZ</button>
    </div>
  );
};
export default PlanCard;
