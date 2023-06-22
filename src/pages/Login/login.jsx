import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import L from './login.module.css';
import Image from '../../components/images/banner.png';
import Market from '../../components/market';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = 'Пожалуйста, введите имя пользователя!';
    }

    if (!password) {
      newErrors.password = 'Пожалуйста, введите пароль!';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('https://petshackaton.ru/account/login/', {
          phone_number: username,
          password: password,
        });

        // Assuming the server returns a success status and a token
        const token = response.data.token;

        // Perform any necessary actions after successful login

        console.log('Успешный вход в систему');
      } catch (error) {
        console.log('Неверное имя пользователя или пароль');
      }
    }
  };

  return (
    <>
      <img className={L.bankImg} src={Image} alt="image" />
      <div className={L.login_container}>
        <form className={L.login_form} onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Номер телефона"
            className={L.login_input}
          />
          {errors.username && <div className={L.errors}>{errors.username}</div>}
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Пароль"
            className={L.login_input}
          />
          {errors.password && <div className={L.errors}>{errors.password}</div>}
          <span className={L.login_checkbox}>
            <input
              className={L.checkbox}
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label></label>
            <span>Запомнить меня</span>
            <Link to="/forgot_password" className={L.forgot_link} href="#">
              Забыли пароль?
            </Link>
          </span>
          <Link to="./choose-person">
            <button type="submit" className={L.login_button}>
              Войти
            </button>
          </Link>
          <div className={L.login_links}>
            <Link className={L.link} to="./signup">
              <a className={L.link} href="#">
                Регистрация
              </a>
            </Link>
          </div>
        </form>
      </div>
      <Market />
    </>
  );
};

export default Login;
