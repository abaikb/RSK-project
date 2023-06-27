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
  
        const response = await axios.get('https://petshackaton.ru/ticket/get_my_ticket/', {
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
      <div className={style.cont}>
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
            <div>
              <p>Сберкасса № 36-56</p>
              <p>г.Бишкек ул.Киевская №165</p>
            </div>
            <img src={Point} alt="#" />
          </div>
          <p>Услуга</p>
          <div className={style.service}>Денежные переводы</div>
          <p>Дата и время</p>
          {ticketData && (
            <div>
              <div className={style.date}>{ticketData.date}</div>
              <div className={style.time}>{ticketData.time}</div>
            </div>
          )}
          <div>
            <button className={style.btnDelete}>Удалить</button>
            <button className={style.btnChange}>Изменить</button>
          </div>
          <div className={style.warning}>
            <img src={Sign} alt="!" />
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
