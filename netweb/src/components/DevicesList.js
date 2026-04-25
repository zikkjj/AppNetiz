import React from 'react';

const DevicesList = () => {
  const devices = [
    { name: 'iPhone do João', status: 'Ativo', icon: 'phone', color: 'green', action: 'Pausar', iconAction: 'pause' },
    { name: 'Smart TV Sala', status: 'Ativo', icon: 'tv', color: 'green', action: 'Limitar', iconAction: 'timer' },
    { name: 'Notebook Alex', status: 'Alto uso', icon: 'laptop', color: 'yellow', action: 'Gerenciar', iconAction: 'settings' },
    { name: 'iPhone da Maria', status: 'Ativo', icon: 'phone', color: 'green', action: 'Pausar', iconAction: 'pause' },
  ];

  const renderIcon = (type) => {
    if (type === 'phone') {
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>;
    }
    if (type === 'tv') {
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B1FA2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>;
    }
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F57F17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>;
  };

  const renderActionIcon = (type) => {
    if (type === 'pause') {
      return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>;
    }
    if (type === 'timer') {
      return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
    }
    return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
  };

  return (
    <div className="devices-section">
      <div className="devices-header">
        <h3>Dispositivos conectados</h3>
        <button className="link-btn">Ver todos</button>
      </div>

      <div className="devices-list">
        {devices.map((device, index) => (
          <div className="device-item" key={index}>
            <div className="device-icon-box">
              {renderIcon(device.icon)}
            </div>
            <span className="device-name">{device.name}</span>
            <div className="device-status">
              <span className={`status-dot ${device.color}`}></span> {device.status}
            </div>
            <div className="device-actions">
              <button className="btn-device-action">
                {renderActionIcon(device.iconAction)}
                <span style={{marginLeft: '6px'}}>{device.action}</span>
              </button>
              <button className="btn-device-more">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevicesList;
