import React from 'react'
import style from './admin_header.module.css'
import bell from '../img/zondicons_notification.svg'
import logo from '../img/logo_Rsk.svg'


export const AdminHeader = () => {
  return (
    <div className={style.container}>
    <div className={style.left_box}>
    <img className={style.logo} src={logo} alt="#" />
    <div className={style.inside_box}>
    <span className={style.window}>Окно-#7</span>
    <img className={style.bell} src={bell} alt="#" />
    </div>
    </div>
    <button className={style.breacktime}>Перерыв</button>
</div>
  )
}
