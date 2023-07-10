import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './application.module.css';

export const AdminList = () => {
  const [data, setData] = useState([]);

  const calculateRemainingTime = (timestamp) => {
    const ticketTime = new Date(timestamp).getTime() + 10 * 60 * 1000;
    const currentTime = new Date().getTime();
    const difference = ticketTime - currentTime;

    if (difference <= 0) {
      return '00:00:00';
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.get(
          'https://petshackaton.ru/ticket/get_ticket/',
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${accessToken}`,
              'X-CSRFToken': refreshToken,
            },
          }
        );

        const ticketList = response.data.map(item => {
          return { ...item, remainingTime: calculateRemainingTime(item.timestamp) };
        });
        
        setData(ticketList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.adminList}>
      <table>
        <thead>
          <tr>
            <th>Переведены</th>
            <th>В очереди</th>
            <th>Отклонены</th>
            <th>Обслуживаются</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4} className={style.ticketCell}>
              {data.map(item => (
                <div key={item.id} className={style.ticket}>
                  <div>{item.number}</div>
                  <div>{item.transaction}</div>
                </div>
              ))}
            </td>
          </tr>
          <tr>
            <td>{data.length > 0 && data[0].transferred}</td>
            <td>{data.length > 0 && data[0].queue}</td>
            <td>{data.length > 0 && data[0].rejected}</td>
            <td>{data.length > 0 && data[0].served}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
