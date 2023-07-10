import React, { useState, useEffect } from 'react';
import style from './admin_header.module.css';
import bell from '../img/zondicons_notification.svg';
import logo from '../img/logo_Rsk.svg';

export const AdminHeader = () => {
  const [breakTime, setBreakTime] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (breakTime) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    }

    if (timer === 0) {
      setBreakTime(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [breakTime, timer]);

  const startBreakTime = () => {
    setBreakTime(true);
    setTimer(2400);
  };

  const stopBreakTime = () => {
    setBreakTime(false);
    setTimer(0);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className={style.container}>
      <div className={style.left_box}>
        <img className={style.logo} src={logo} alt="#" />
        <div className={style.inside_box}>
          <span className={style.window}>Окно-#7</span>
          <img className={style.bell} src={bell} alt="#" />
        </div>
      </div>
      <div className={style.timer_window}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17.6177 5.9681L19.0711 4.51472L20.4853 5.92893L19.0319 7.38231C20.2635 8.92199 21 10.875 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4C14.125 4 16.078 4.73647 17.6177 5.9681ZM12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20ZM11 8H13V14H11V8ZM8 1H16V3H8V1Z" fill="#6D7885" />
      </svg>Начало:<span>{formatTime(timer)}</span></div>
      {breakTime ? (
        <div className={style.timer}>
          <button className={style.stopBtn} onClick={stopBreakTime}>Закончить перерыв
          </button>
        </div>
      ) : (
        <button className={style.breaktime} onClick={startBreakTime}>
          Перерыв
        </button>
      )}
    </div>
  );
};
