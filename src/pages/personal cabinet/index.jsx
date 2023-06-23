import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './personal.module.css'
import slide1 from '../../components/images/slide1.png'
import Avatar from '../../components/images/Ellipse 171.png'
import Pen from '../../components/images/pen.svg'
import wPen from '../../components/images/white_pen.svg'
import pin from '../../components/images/pin.svg'
import arrow from '../../components/images/right_arrow.svg'
import white_arrow from '../../components/images/white-arrow.svg'
import CarouselComponent from '../../components/carousel/index';


export const Personal = () => {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          const response = await axios.get('https://petshackaton.ru/account/profile/', {
            headers: {
              accept: 'application/json',
              'X-CSRFToken': 'gwaaCwoB13ErqqM8lrTB0QoaATVfx6HS4SwAVyqONj2HZa8olN1QhxCEftONpehs',
              Authorization: `Bearer ${accessToken}`
            }
          });

          const { name } = response.data[0];
          setUserName(name);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserName();
  }, []);
  return (
    <div className={style.container}>
      <div className={style.bankImg} ><CarouselComponent /></div>
      <div className={style.info_table}>
        <h2>Личный кабинет</h2>
        <div className={style.name_box}>
          <img className={style.avatar} src={Avatar} alt="#" />
          <h3 className={style.name}>{userName}</h3>
          <img className={style.pen} src={wPen} alt="" />
        </div>
        <input type="number" placeholder='22209196000535' src={Pen} />
        <input type="number" placeholder='+996999000000' src={Pen} />
        <input type="email" placeholder='e-mail' src={Pen} />
        <input type="text" placeholder='Изменить пароль' src={Pen} />
        <div className={style.ticket_box}>
          <h3>Текущий билет</h3>
          <div className={style.ticket}>
            <img src={pin} alt="#" />
            <div className={style.adress}>
              <span>Сберкасса № 36-56 </span>
              <span>г.Бишкек  ул.Киевская №165 </span>
            </div>
            <div className={style.data}>
              <span>12/06</span>
              <span>09:00</span>
            </div>
            <img src={arrow} alt="" />
          </div>
          <div className={style.history_box}>
          <a className={style.history} href="#">История</a>
          <img src={white_arrow} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}
