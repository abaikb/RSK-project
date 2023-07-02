import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import changePass from "./change.module.css";
import CarouselComponent from '../../components/carousel/index';
import Market from '../../components/market';
import axios from 'axios';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [resetRequested, setResetRequested] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(3);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const data = {
      email: email
    };

    setLoading(true);

    axios.post('https://petshackaton.ru/account/reset_password/', data)
      .then(response => {
        if (response.status === 200) {
          setResetRequested(true);
          const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
          }, 1000);
          setTimeout(() => {
            clearInterval(interval);
            navigate('/reset_password');
          }, 3000); 
        } else {
          console.log('Password reset request failed');
        }
      })
      .catch(error => {
        console.log('An error occurred:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000); 
      const timerId = setTimeout(() => {
        clearInterval(interval);
        setLoading(false);
      }, 3000); 

      return () => {
        clearInterval(interval);
        clearTimeout(timerId);
      };
    }
  }, [loading]);

  return (
    <div className={changePass.contain_forgotPassword}>
      <div className={changePass.bankImg}><CarouselComponent /></div>
      <div className={changePass.box}>
        {resetRequested ? (
          <div className={changePass.answer}>
            Запрос на восстановление пароля отправлен на вашу почту. Пожалуйста, проверьте свою почту и следуйте инструкциям! <div>{loading && ` Отправка через ${timer} сек.`}</div>
          </div>
        ) : (
          <form onSubmit={handleForgotPassword}>
            <div className={changePass.form}>
              <h4>Изменить пароль</h4>
              <div>Введите e-mail адрес для изменения пароля</div>
              <input
                className={changePass.email}
                type="email"
                placeholder="e-mail"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className={changePass.button} type="submit">Восстановить пароль</button>
          </form>
        )}
        <div className={changePass.market}><Market /></div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
