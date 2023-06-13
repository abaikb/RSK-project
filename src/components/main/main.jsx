import React, { useState } from 'react';
import './Main.css';

const Login = ({ onLogin }) => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Ваша логика для проверки введенных данных и выполнения входа
    if (username.trim() === '' || password.trim() === '') {
      setError('Введите имя пользователя и пароль');
    } else {
      onLogin(username); // Выполняем вход
      setUsername('');
      setPassword('');
      setError('');
      setShowModal(false);
    }
  };

  return (
    <div className="login">
      <h2 className="login-heading">Войти</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="login-error">{error}</p>}
        <button type="submit" className="login-button" onClick={handleLogin}>
          Войти
        </button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Успешный вход</h3>
            <p>Вы успешно вошли в систему.</p>
            <button className="modal-close" onClick={() => setShowModal(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
