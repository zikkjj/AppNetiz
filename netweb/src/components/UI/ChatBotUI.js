import React, { useState } from 'react';

const ChatBotUI = ({ suggestedMessage }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button className="chat-fab-float" onClick={() => setIsOpen(true)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
    );
  }

  return (
    <div className="chat-min-ui">
      <div className="chat-min-header">
        <strong>Ajuda Virtual</strong>
        <button className="chat-close-btn" onClick={() => setIsOpen(false)}>×</button>
      </div>
      <div className="chat-min-body">
        <div className="min-bot-msg">{suggestedMessage || "Olá! Te ajudo com o CEP?"}</div>
      </div>
    </div>
  );
};
export default ChatBotUI;
