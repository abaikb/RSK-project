import React, { useEffect, useState } from 'react';
import axios from 'axios';
import p from './personal.module.css';
import slide1 from '../../components/images/slide1.png';
import Avatar from '../../components/images/Ellipse 171.png';
import Pen from '../../components/images/pen.svg';
import wPen from '../../components/images/white_pen.svg';
import pin from '../../components/images/pin.svg';
import arrow from '../../components/images/right_arrow.svg';
import white_arrow from '../../components/images/white-arrow.svg';
import Loader from '../../components/Loader/Loader';

export const Personal = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

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
        setError('загрузка не успешно');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedData({});
  };

  const handleSave = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      await axios.put('https://petshackaton.ru/account/profile/', editedData, {
        headers: {
          accept: 'application/json',
          'X-CSRFToken': 'bnPmGdG6tsDTGlSGQJTnf2hEM4FALppTZJbMZfIjfI19f5eWQ51CwJv8rEy8DxZt',
          Authorization: `Bearer ${accessToken}`
        }
      });
      setUserData(editedData);
      setEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
      setError('Failed to update user data');
    }
  };

  const handleLogout = () => {
    if (window.confirm('Сохранить изменения перед выходом?')) {
      handleSave();
    } else {
      handleCancel();
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={p.container}>
      <div className={p.img_box}>
        <img src={slide1} alt="" />
      </div>
      <div className={p.info_table}>
        <h2>Личный кабинет</h2>
        <div className={p.name_box}>
          <img className={p.avatar} src={Avatar} alt="#" />
          <h3 className={p.name}>
            {editing ? (
              <input
                type="text"
                name="name"
                value={editedData.name || userData.name}
                onChange={handleInputChange}
              />
            ) : (
              `${userData.name} ${userData.last_name}`
            )}
          </h3>
          {editing && <img className={p.pen} src={wPen} alt="" />}
        </div>
        <input
          type="number"
          name="pin"
          value={editing ? editedData.pin || userData.pin : userData.pin}
          onChange={handleInputChange}
          readOnly={!editing}
        />
        <input
          type="number"
          name="phone_number"
          value={
            editing
              ? editedData.phone_number || userData.phone_number
              : userData.phone_number
          }
          onChange={handleInputChange}
          readOnly={!editing}
        />
        <input
          type="email"
          name="email"
          value={editing ? editedData.email || userData.email : userData.email}
          onChange={handleInputChange}
          readOnly={!editing}
        />
        <input
          type="text"
          placeholder="Изменить пароль"
          src={Pen}
          readOnly={!editing}
        />
        <div className={p.ticket_box}>
          <h3>Текущий билет</h3>
          <div className={p.ticket}>
            <img src={pin} alt="#" />
            <div className={p.address}>
              <span>{userData.ticket?.address}</span>
              <span>{userData.ticket?.city}</span>
            </div>
            <div className={p.data}>
              <span>{userData.ticket?.date}</span>
              <span>{userData.ticket?.time}</span>
            </div>
            <img src={arrow} alt="" />
          </div>
          <div className={p.history_box}>
            <a className={p.history} href="#">
              История
            </a>
            <img src={white_arrow} alt="" />
          </div>
        </div>
        {editing ? (
          <>
            <button onClick={handleSave}>Сохранить</button>
            <button onClick={handleCancel}>Отменить</button>
          </>
        ) : (
          <button onClick={handleLogout}>Выход</button>
        )}
      </div>
    </div>
  );
};
