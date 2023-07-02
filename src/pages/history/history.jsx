import React from 'react';
import { Link } from 'react-router-dom';
import style from './ticketHistory.module.css';
import pin from '../../assets/pin.svg';
import arrow from '../../assets/arrow.svg';
import white_arrow from '../../assets/white_arrow.svg';

const ticketHistory = () => {
  const ticketData = {
    city: 'City Name',
    department: 'Department Name',
    date: '2023-07-02',
    time: '10:30:00',
  };

  return (
    <div className={style.container}>
      <div className={style.ticket_box}>
        <h3>Текущий билет</h3>
        <Link className={style.link_ticket} to="/ticket">
          <div className={style.ticket}>
            <img src={pin} alt="#" />
            <div className={style.address}>
              <div className={style.titleCity}>{ticketData?.city}</div>
              <div className={style.department}>{ticketData?.department}</div>
            </div>
            <div className={style.data}>
              <span>
                {ticketData?.date &&
                  new Intl.DateTimeFormat('en-US', {
                    month: '2-digit',
                    day: '2-digit'
                  }).format(new Date(ticketData.date))}
              </span>
              <span>
                {ticketData?.time &&
                  new Intl.DateTimeFormat('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit'
                  }).format(new Date(`2000-01-01T${ticketData.time}`))}
              </span>
            </div>
            <img src={arrow} alt="" />
          </div>
        </Link>
        <div className={style.history_box}>
          <div className={style.history}>
            История
          </div>
          <img src={white_arrow} alt="" />
        </div>
      </div>

      <div className={style.ticket_history}>
        {/* Render ticket history items here */}
        <div className={style.ticket_item}>
          <img src={pin} alt="#" />
          <div className={style.address}>
            <div className={style.titleCity}>City Name 1</div>
            <div className={style.department}>Department Name 1</div>
          </div>
          <div className={style.data}>
            <span>Date 1</span>
            <span>Time 1</span>
          </div>
          <img src={arrow} alt="" />
        </div>

        <div className={style.ticket_item}>
          <img src={pin} alt="#" />
          <div className={style.address}>
            <div className={style.titleCity}>City Name 2</div>
            <div className={style.department}>Department Name 2</div>
          </div>
          <div className={style.data}>
            <span>Date 2</span>
            <span>Time 2</span>
          </div>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ticketHistory;
