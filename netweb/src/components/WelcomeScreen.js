import React from 'react';
import './WelcomeScreen.css';
import Sidebar from './Sidebar';
import WelcomeHeader from './WelcomeHeader';
import DashboardCards from './DashboardCards';
import DevicesList from './DevicesList';

const WelcomeScreen = ({ currentUser, onLogout }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <WelcomeHeader currentUser={currentUser} onLogout={onLogout} />
        
        <div className="dashboard-content-area">
          <DashboardCards />
          
          <div className="devices-container-row">
            <div className="devices-flex-filler">
               <DevicesList />
            </div>
          </div>
        </div>
        
        <button className="fab-help">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          Precisa de ajuda?
        </button>
      </main>
    </div>
  );
};

export default WelcomeScreen;
