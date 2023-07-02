import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import LoginStyle from './login.module.css';
import Market from '../../components/market';
import CarouselComponent from '../../components/carousel/index';

const Login = () => {
  const [phone_number, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [timeoutId, setTimeoutId] = useState(null);

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate('/choose-person');
    } else {
      const id = setTimeout(logout, 10 * 60 * 1000); // 10 minutes in milliseconds
      setTimeoutId(id);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate, timeoutId]);

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

    if (!phone_number) {
      newErrors.phone_number = 'Пожалуйста, введите номер телефона!';
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
      setIsLoading(true);

      try {
        const response = await axios.post('https://petshackaton.ru/account/login/', {
          phone_number: phone_number,
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

      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={LoginStyle.container_login}>
      <div className={LoginStyle.bankImg}><CarouselComponent /></div>
      <div className={LoginStyle.login_container}>
        <form className={LoginStyle.login_form} onSubmit={handleLogin}>
          <input
            type="text"
            value={phone_number}
            onChange={handleUsernameChange}
            placeholder="Номер телефона"
            className={LoginStyle.login_input}
          />
          {errors.phone_number && <div className={LoginStyle.errors}>{errors.phone_number}</div>}
          <div className={LoginStyle.password_input_container}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Пароль"
              className={LoginStyle.login_input}
            />
            <div className={LoginStyle.password_icon} onClick={toggleShowPassword}>
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </div>
          </div>
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
            {isLoading ? 'Загрузка...' : 'Войти'} 
          </button>
          <div className={LoginStyle.login_links}>
            <Link className={LoginStyle.link} to="/signup">
             <p className={LoginStyle.link}>
              Регистрация
             </p>
            </Link>
          </div>
          <div className={LoginStyle.market}><Market /></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
