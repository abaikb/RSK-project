import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './personal.module.css';
import Avatar from '../../components/images/Ellipse 171.png';
import Pen from '../../components/images/pen.svg';
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

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
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
      const response = await axios.put('https://petshackaton.ru/account/profile/', editedData, {
        headers: {
          accept: 'application/json',
          'X-CSRFToken': 'bnPmGdG6tsDTGlSGQJTnf2hEM4FALppTZJbMZfIjfI19f5eWQ51CwJv8rEy8DxZt',
          Authorization: `Bearer ${accessToken}`
        }
      });

      const updatedUserData = response.data;
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
            {editing ? (
              <input
                type="text"
                name="name"
                value={editedData.name || ''}
                onChange={handleInputChange}
              />
            ) : (
              `${userData.name} ${userData.last_name}`
            )}
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
            value={editedData.email || ''}
            onChange={handleInputChange}
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
        <input
          type="password"
          placeholder="Изменить пароль"
          src={Pen}
          readOnly={!editing}
        />
        <div className={style.ticket_box}>
          <h3>Текущий билет</h3>
          <div className={style.ticket}>
            <img src={pin} alt="#" />
            <div className={style.address}>
              <span>{userData.ticket?.address}</span>
              <span>{userData.ticket?.city}</span>
            </div>
            <div className={style.data}>
              <span>{userData.ticket?.date}</span>
              <span>{userData.ticket?.time}</span>
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

        {editing ? (
          <button onClick={handleSaveClick}>Сохранить</button>
        ) : (
          <button onClick={handleEditClick}>Редактировать</button>
        )}
      </div>
    </div>
  );
};
