import React, { useState } from 'react';
import codePas from "./paswordCode.module.css";
import CarouselComponent from '../../components/carousel/index';
import Market from '../../components/market';
import axios from 'axios';

const PasswordResetCompleteForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [resetCompleted, setResetCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordResetComplete = (e) => {
    e.preventDefault();

    // Validate form fields
    if (password.length === 0 || confirmPassword.length === 0 || code.length === 0) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    const data = {
      password: password,
      password_confirm: confirmPassword,
      code: code
    };

    axios.post('https://petshackaton.ru/account/reset_password_complete/', data)
      .then(response => {
        if (response.status === 200) {
          setResetCompleted(true);
        } else {
          console.log('Password reset completion failed');
        }
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
        } else {
          console.log('An error occurred:', error);
        }
      });
  };

  return (
    <div className={codePas.contain_forgotPassword}>
      <div className={codePas.bankImg}><CarouselComponent /></div>
      <div className={codePas.box}>
        {resetCompleted ? (
          <div className={codePas.answer}>
            Пароль успешно изменен. Вы можете войти в свою учетную запись с новым паролем!
          </div>
        ) : (
          <form onSubmit={handlePasswordResetComplete}>
            <div className={codePas.form}>
              <h4>Завершение сброса пароля</h4>
              {errorMessage && <div className={codePas.error}>{errorMessage}</div>}
              <div>Введите новый пароль и код, полученный по электронной почте!</div>
              <input
                className={codePas.input}
                type="password"
                placeholder="Новый пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className={codePas.input}
                type="password"
                placeholder="Подтвердите новый пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className={codePas.input}
                type="text"
                placeholder="Код"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button className={codePas.button} type="submit">Завершить сброс пароля</button>
            </div>
          </form>
        )}
        <div className={codePas.market}><Market /></div>
      </div>
    </div>
  );
};

export default PasswordResetCompleteForm;
