import React from 'react'
import style from './main.module.css'
import mainIcon from '../../../components/admin/img/admin-mainpage-icon.svg'    

export const AdminMainPage = () => {
    return (
       <div className={style.container}>
        <img className={style.main_icon} src={mainIcon} alt="#" />
        <h2 className={style.subtitle}>Нет талонов в списке</h2>
       </div>
    )
}
