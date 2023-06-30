import React, { useEffect, useState } from 'react';
import style from './show-ticket.module.css';
import Skan from '../../components/images/skan.png';
import Point from '../../components/images/point.png';
import Market from '../../components/market';
import Sign from '../../components/images/sign.png';
import CarouselComponent from '../../components/carousel/index';
import axios from 'axios';

const Ticket = () => {
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.get(`https://petshackaton.ru/ticket/get_ticket/`, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'X-CSRFToken': refreshToken,
          },
        });

        const ticketData = response.data[0];
        setTicketData(ticketData);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchTicketData();
  }, []);







  return (
    <div className={style.container}>
      <div className={style.bankImg}>
        <CarouselComponent />
      </div>
      <div className={style.box_ticket}>
        <div className={style.ticketContainer}>
          <h1>Ваш билет</h1>
          {ticketData && (
            <div>
              <div className={style.code}>
                <p>Код активации</p>
                <h3>{ticketData.activation_code}</h3>
              </div>
              <div className={style.scan}>
                <p>Сканер</p>
                <img src={Skan} alt="сканер" />
              </div>
              <div className={style.code}>
                <p>Номер талона</p>
                <h2>{ticketData.number}</h2>
              </div>
            </div>
          )}
          <p>Адрес филиала</p>
          <div className={style.address}>
            {ticketData && (
              <div>
                <p>{ticketData.city}</p>
                <p>{ticketData.department}</p>
                <p>{ticketData.address}</p>
              </div>
            )}

            <img src={Point} alt="#" />
          </div>
          <p>Услуга</p>
          {ticketData && (
            <div className={style.service}>{ticketData.transaction}</div>
          )}
          <p>Дата и время</p>
          {ticketData && (
            <div>
              <div className={style.date}>
                {ticketData?.date && (
                  <div>
                    {new Intl.DateTimeFormat('ru-RU', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',

                    }).format(new Date(ticketData.date))}
                  </div>
                )}
              </div>
              <div className={style.time}>
                {ticketData?.time &&
                  new Intl.DateTimeFormat('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit'
                  }).format(new Date(`2000-01-01T${ticketData.time}`))}
              </div>
            </div>
          )}
          <div>
            <button className={style.btnDelete}>Удалить</button>
            <button className={style.btnChange}>Изменить</button>
          </div>
          <div className={style.warning}>
            <img src={Sign} alt="" />
            <p>
              Внимание, во избежании пропуска, рекомендуется прийти за 10 минут до забронированного времени
            </p>
          </div>
        </div>
        <div>
          <Market />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
