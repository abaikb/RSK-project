import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import L from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Здесь могут быть дополнительные проверки, например, проверка с сервером на соответствие имени пользователя и пароля

    // Проверка успешности аутентификации
    if (username === 'admin' && password === 'password') {
      // Выполнение необходимых действий после успешного входа
      console.log('Успешный вход в систему');
    } else {
      console.log('Неверное имя пользователя или пароль');
    }
  };

  return (
    <div className={L.login_container}>
      <form className={L.login_form} onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Номер телефона"
          className={L.login_input}
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          className={L.login_input}
        />
        <span className={L.login_checkbox}>
          <input
            className={L.checkbox}
            type="checkbox"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label></label>
          <span>Запомнить меня</span>
          <a className={L.forgot_link} href="#">
            Забыли пароль?
          </a>
        </span>

        <button type="submit" className={L.login_button}>
          Войти
        </button>
        <div className={L.login_links}>
          <Link className={L.link} to="./signup">
            <a className={L.link} href="#">Регистрация</a>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
