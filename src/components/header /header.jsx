import React, { useState } from 'react';
import './header.css';
import Login from '../Login/login';
;

const Header = ({ isLoggedIn, onLogin, onLogout }) => {
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    setShowModal(false);
    onLogout();
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logoContainer">
          <img src="/path/to/logo.png" alt="Логотип" className="logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/services">Услуги</a>
            </li>
            <li>
              <a href="/contacts">Контакты</a>
            </li>
          </ul>
        </nav>
        <div>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="button">
              Выйти
            </button>
          ) : (
            <button onClick={handleLogin} className="button">
              Войти
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <Login onLogin={onLogin} /> {/* Импортируем и используем компонент Login */}
            <button onClick={() => setShowModal(false)} className="modal-close">
              Закрыть
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
