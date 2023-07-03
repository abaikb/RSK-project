import React, { useEffect, useState } from 'react';
import style from './chat.module.css';

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
    <div className={style.chat_container}>
      <div className={style.chat_messages}>
        {messages.map((message, index) => (
          <div key={index} className={style.chat_message}>
            <span className={style.chat_message_user}>{message.user}: </span>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className={style.chat_input_form}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите сообщение..."
          className={style.chat_input}
        />
        <input
          type="text"
          value={currentUser}
          onChange={(e) => setCurrentUser(e.target.value)}
          placeholder="Ваше имя"
          className={style.chat_user_input}
        />
        <button type="submit" className={style.chat_send_button}>
          Отправить
        </button>
      </form>
    </div>
  );
}
export default Chat    