import React, { useRef, useEffect } from 'react';

const ChatDrawer = ({
  isChatOpen,
  setIsChatOpen,
  chatMessages,
  isConnectingToHuman,
  currentChatInput,
  setCurrentChatInput,
  handleChatSubmit,
  handleQuickReply,
  unreadCount,
  setUnreadCount
}) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isConnectingToHuman, isChatOpen]);

  return (
    <>
      <button className="chat-fab" onClick={() => { setIsChatOpen(true); setUnreadCount(0); }}>
        {unreadCount > 0 && <span className="chat-badge">{unreadCount}</span>}
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      <div className={`chat-drawer ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div>
            <h4>Suporte Netiz</h4>
            <p>Atendimento via IA e técnicos especializados</p>
          </div>
          <button className="close-chat" onClick={() => setIsChatOpen(false)}>✕</button>
        </div>
        
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div key={index} className={`chat-bubble ${msg.sender === 'user' ? 'user-msg' : 'bot-msg'}`}>
              {msg.text}
            </div>
          ))}
          {isConnectingToHuman && (
            <div className="chat-bubble bot-msg loader-bubble">
              <div className="dot-typing"></div>
            </div>
          )}
          
          <div className="quick-replies">
            {['Ver planos', 'Suporte técnico', 'Verificar cobertura', 'Falar com técnico'].map(reply => (
               <button key={reply} className="quick-reply-pill" onClick={() => handleQuickReply(reply)}>
                 {reply}
               </button>
            ))}
          </div>

          <div ref={chatEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleChatSubmit}>
          <input 
            type="text" 
            placeholder="Digite algo..." 
            value={currentChatInput}
            onChange={(e) => setCurrentChatInput(e.target.value)}
          />
          <button type="submit" disabled={!currentChatInput.trim()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatDrawer;
