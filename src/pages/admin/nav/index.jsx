import React from 'react'
import style from './nav.module.css'
import { Link, } from 'react-router-dom';
import avatar from '../../../components/images/Ellipse 171.png'
import historyIcon from '../../../components/admin/img/history-icon.svg'
import statIcon from '../../../components/admin/img/stat-icon.svg'
import chatIcon from '../../../components/admin/img/chat-icon.svg'
import settingsIcon from '../../../components/admin/img/settings-icon.svg'
import applicationIcon from '../../../components/admin/img/application-icon.svg'

export const AdminNav = () => {
  return (
    <div className={style.container}>
        <div className={style.info_table}>
        <img className={style.avatar} src={avatar} alt="#" />
        <div className={style.name_box}>

        <h3 className={style.name}>Алмазова К. А.</h3>
        <h5 className={style.role}>Оператор</h5>
        </div>
        </div>

        <div className={style.list}>
            <Link to="/applications"> <img src={applicationIcon} alt="#" />Лента заявок 
            </Link>
            <Link to="/history"> <img src={historyIcon} alt="#" />История 
            </Link>
            <Link to="/Statistic"> <img src={statIcon} alt="#" />Статистика 
            </Link>
            <Link to="/chat"> <img src={chatIcon} alt="#" />Чат
            </Link>
            <Link to="/settings"> <img src={settingsIcon} alt="#" />Настройки 
            </Link>
        </div>
    </div>
  )
}
