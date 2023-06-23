import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginStyle from './login.module.css';
import Market from '../../components/market';
import CarouselComponent from '../../components/carousel/index';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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
      newErrors.username = 'Пожалуйста, введите номер телефона!';
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

        const { access, refresh } = response.data;
        localStorage.setItem('accessToken', access);
        localStorage.setItem('refreshToken', refresh);

        console.log('Успешный вход в систему');
        navigate('/choose-person');
        window.location.reload();
      } catch (error) {
        if (error.response && error.response.data && error.response.data.detail) {
          setErrorMessage(error.response.data.detail);
        } else {
          setErrorMessage('Произошла ошибка входа. Пожалуйста, попробуйте еще раз.');
        }
      }
    }
  };

  return (
    <div className={LoginStyle.container_login}>
     <div className={LoginStyle.bankImg} ><CarouselComponent  /></div> 
      <div className={LoginStyle.login_container}>
        <form className={LoginStyle.login_form} onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Номер телефона"
            className={LoginStyle.login_input}
          />
          {errors.username && <div className={LoginStyle.errors}>{errors.username}</div>}
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Пароль"
            className={LoginStyle.login_input}
          />
          {errors.password && <div className={LoginStyle.errors}>{errors.password}</div>}
          {errorMessage && <div className={LoginStyle.errors}>{errorMessage}</div>}
          <span className={LoginStyle.login_checkbox}>
            <input
              className={LoginStyle.checkbox}
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label></label>
            <span>Запомнить меня</span>
            <Link to="/forgot_password" className={LoginStyle.forgot_link} href="#">
              Забыли пароль?
            </Link>
          </span>
          <button type="submit" className={LoginStyle.login_button}>
            Войти
          </button>
          <div className={LoginStyle.login_links}>
            <Link className={LoginStyle.link} to="./signup">
              <a className={LoginStyle.link} href="#">
                Регистрация
              </a>
            </Link>
          </div>
          <div className={LoginStyle.market}><Market /></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
