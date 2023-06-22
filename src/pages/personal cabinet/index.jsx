import React from 'react'
import p from './personal.module.css'
import Banner from '../../components/images/banner.png'
import Avatar from '../../components/images/Ellipse 171.png'
import Pen from '../../components/images/pen.svg'
import wPen from '../../components/images/white_pen.svg'

export const Personal = () => {
  return (
    <div className={p.container}>
      <div className={p.img_box}>
        <img src={Banner} alt="" />
      </div>
      <div className={p.info_table}>
        <h2>Личный кабинет</h2>
        <div className={p.name_box}>
          <img className={p.avatar} src={Avatar} alt="#" />
          <h3 className={p.name}>Жамалидинов
            Бектур
            Русланович</h3>
          <img className={p.pen} src={wPen} alt="" />
        </div>
        <input type="number" placeholder='22209196000535' src={Pen} />
        <input type="number" placeholder='+996999000000' src={Pen} />
        <input type="email" placeholder='e-mail' src={Pen} />
        <input type="text" placeholder='Изменить пароль' src={Pen} />
        <div className={p.ticket_box}>
          <h3>Текущий билет</h3>
          <button className={p.ticket}></button>
          <a className={p.history} href="#">История</a>
        </div>
      </div>
    </div>
  )
}
