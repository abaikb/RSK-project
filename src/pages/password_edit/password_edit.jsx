import React, { useState } from 'react';
import passwordChange from "./password_change.module.css";
import CarouselComponent from '../../components/carousel/index';
import Market from '../../components/market';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetRequested, setResetRequested] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();
  
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
  
    fetch('https://petshackaton.ru/account/change_password/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': '280w90GFpui2rOGv7uJK5Vfe3vPZr07mQumWs2ISbKGi0y2L7QRZmCtII5Ixj8HW',
        'Authorization': `Bearer ${accessToken}`,
        'Refresh-Token': refreshToken,
      },
      body: JSON.stringify({
        old_password: oldPassword,
        new_password: newPassword,
      }),
    })
      .then(response => response.json())
      .then(data => {
        setResetRequested(true);
      })
      .catch(error => {
        console.error('Error changing password:', error);
      });
  };
  
  return (
    <div className={passwordChange.contain_forgotPassword}>
      <div className={passwordChange.bankImg}><CarouselComponent /></div>
      <div className={passwordChange.box}>
        {resetRequested ? (
          <div className={passwordChange.answer}>
            Запрос на восстановление пароля отправлен на вашу почту. Пожалуйста, проверьте свою почту и следуйте инструкциям!
          </div>
        ) : (
          <form onSubmit={handlePasswordChange}>
            <div className={passwordChange.form}>
              <h4>Запрос на восстановление пароля</h4>
              <div>Введите текущий пароль</div>
              <input
                className={passwordChange.passwordInput}
                type="password"
                placeholder="Текущий пароль"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <div>Введите новый пароль</div>
              <input
                className={passwordChange.passwordInput}
                type="password"
                placeholder="Новый пароль"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button className={passwordChange.button} type="submit">Изменить пароль</button>
          </form>
        )}
        <div className={passwordChange.market}><Market /></div>
      </div>
    </div>
  );
};

export default ChangePassword;
