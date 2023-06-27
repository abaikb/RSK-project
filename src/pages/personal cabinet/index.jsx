import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './personal.module.css';
import Avatar from '../../components/images/Ellipse 171.png';
import wPen from '../../components/images/white_pen.svg';
import pin from '../../components/images/pin.svg';
import arrow from '../../components/images/right_arrow.svg';
import white_arrow from '../../components/images/white-arrow.svg';
import Loader from '../../components/Loader/Loader';
import CarouselComponent from '../../components/carousel/index';

export const Personal = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editedData, setEditedData] = useState({});
  const [editing, setEditing] = useState(false);
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('https://petshackaton.ru/account/profile/', {
          headers: {
            accept: 'application/json',
            'X-CSRFToken': 'bnPmGdG6tsDTGlSGQJTnf2hEM4FALppTZJbMZfIjfI19f5eWQ51CwJv8rEy8DxZt',
            Authorization: `Bearer ${accessToken}`
          }
        });
        const userData = response.data[0];
        setUserData(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Не удалось загрузить данные');
        setLoading(false);
      }
    };

    const fetchTicketData = async () => {
      try {
        const response = await axios.get('https://petshackaton.ru/ticket/get_ticket/', {
          headers: {
            accept: 'application/json',
            'X-CSRFToken': 'UJIGPN4u8OBpMSQaNU5VvU6kJrKlf1vJI5468P6HU4ZFlCcqNgdaMBkOo1DT795j'
          }
        });
        const ticketData = response.data[0];
        setTicketData(ticketData);
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchUserData();
    fetchTicketData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      await axios.patch('https://petshackaton.ru/account/edit_profile/', editedData, {
        headers: {
          accept: 'application/json',
          'X-CSRFToken': 'ndWiJX9FHuG0oGWdak8cO2l6nsXn3aSnbziI2ZbStK4gXqitaGgr5JzA22QVVisX',
          Authorization: `Bearer ${accessToken}`
        }
      });

      const updatedUserData = { ...userData, ...editedData };
      setUserData(updatedUserData);
      setEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.bankImg}>
        <CarouselComponent />
      </div>
      <div className={style.info_table}>
        <h2>Личный кабинет</h2>
        <div className={style.name_box}>
          <img className={style.avatar} src={Avatar} alt="#" />
          <h3 className={style.name}>
            {userData.last_name} {userData.name}  {userData.otchestvo}
          </h3>
          {editing && <img className={style.pen} src={wPen} alt="" />}
        </div>
        <input
          type="number"
          name="pin"
          placeholder={userData.pin}
          onChange={handleInputChange}
          readOnly={!editing}
        />
        <input
          type="number"
          name="phone_number"
          placeholder={userData.phone_number}
          onChange={handleInputChange}
          readOnly={!editing}
        />
        {editing ? (
          <input
            type="email"
            name="email"
            placeholder={userData.email}
            value={editedData.email || ''}
            onChange={handleInputChange}
            readOnly={!editing}
          />
        ) : (
          <input
            type="email"
            name="email"
            placeholder={userData.email}
            onChange={handleInputChange}
            readOnly={!editing}
          />
        )}
        <input type="password" placeholder="Изменить пароль" />

        {editing ? (
          <button className={style.change_button} onClick={handleSaveClick}>
            Сохранить
          </button>
        ) : (
          <button className={style.change_button} onClick={handleEditClick}>
            Редактировать
          </button>
        )}
        <div className={style.ticket_box}>
          <h3>Текущий билет</h3>
          <div className={style.ticket}>
            <img src={pin} alt="#" />
            <div className={style.address}>
              <span className={style.titleCity}>{ticketData?.city}</span>
              <span className={style.department}>{ticketData?.department}</span>
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
          <div className={style.history_box}>
            <a className={style.history} href="#">
              История
            </a>
            <img src={white_arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
