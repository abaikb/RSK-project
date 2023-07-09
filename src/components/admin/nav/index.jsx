import React, { useState, useEffect } from 'react'
import style from './nav.module.css'
import { Link, } from 'react-router-dom';
import axios from 'axios';
import avatar from '../../../components/images/Ellipse 171.png'
import historyIcon from '../../../components/admin/img/history-icon.svg'
import statIcon from '../../../components/admin/img/stat-icon.svg'
import chatIcon from '../../../components/admin/img/chat-icon.svg'
import settingsIcon from '../../../components/admin/img/settings-icon.svg'
import applicationIcon from '../../../components/admin/img/application-icon.svg'

export const AdminNav = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')

        const response = await axios.get(
          'https://petshackaton.ru/account/profile/',
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const operatorWindow = response.data;
        setData = (operatorWindow);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

  }, []);

  return (
    <div className={style.container}>
      {data.map(item => (
        <div key={item.id} className={style.ticket}>
          <div>{item.name}</div>
          <div className={style.name_box}>{item.last_name}</div>
        </div>
      ))}
      <div className={style.info_table}>
        <img className={style.avatar} src={avatar} alt="#" />
      </div>

      <div className={style.list}>
        <Link to="/admin/application"> <img src={applicationIcon} alt="#" />Лента заявок
        </Link>
        <Link to="/history"> <img src={historyIcon} alt="#" />История
        </Link>
        <Link to="/Statistic"> <img src={statIcon} alt="#" />Статистика
        </Link>
        <Link to="/admin/chat"> <img src={chatIcon} alt="#" />Чат
        </Link>
        <Link to="/settings"> <img src={settingsIcon} alt="#" />Настройки
        </Link>
      </div>
    </div>
  )
}
