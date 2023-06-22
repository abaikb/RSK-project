import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Logo from '../images/Лого РСК.png';
import style from './header.module.css';

const links = [
  {
    id: 1,
    text: 'Главная',
    route: '/'
  },
  {
    id: 2,
    text: 'О нас',
    route: '/about_us'
  },
  {
    id: 3,
    text: 'Онлайн очередь',
    route: '/login'
  }
];

const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await axios.get('https://petshackaton.ru/account/profile/', {
          headers: {
            accept: 'application/json',
            'X-CSRFToken': 'gwaaCwoB13ErqqM8lrTB0QoaATVfx6HS4SwAVyqONj2HZa8olN1QhxCEftONpehs',
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { name } = response.data[0]; 

        setUserName(name);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <>
      <div className={style.header_wrapper}>
        <img className={style.logo} src={Logo} alt="logo rsk" />
        <div className={style.links_container}>
          {links.map((link) => (
            <NavLink className={style.link} key={link.id} to={link.route}>
              {link.text}
            </NavLink>
          ))}
        </div>
        <div className={style.user_name}>{userName}</div>
        <select className={style.lang_btn} name="lang" id="lang">
          <option value="">RU</option>
          <option value="">KGZ</option>
          <option value="">EN</option>
        </select>
      </div>
    </>
  );
};

export default Header;
