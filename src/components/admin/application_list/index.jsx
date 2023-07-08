import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './application.module.css';

export const AdminList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.get(
          'https://petshackaton.ru/ticket/get_my_ticket/',
          {
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${accessToken}`,
              'X-CSRFToken': refreshToken,
            },
          }
        );

        const ticketList = response.data;
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
