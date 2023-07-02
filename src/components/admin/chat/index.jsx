import React, { useEffect, useState } from 'react';
import './chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { text: inputValue, user: currentUser };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>WhatsApp Chat</h1>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="chat-message-user">{message.user}: </span>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="chat-input"
        />
        <input
          type="text"
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          placeholder="Your name"
          className="chat-user-input"
        />
        <button type="submit" className="chat-send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
