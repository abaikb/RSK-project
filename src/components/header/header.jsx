import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Logo from '../images/logo.png';
import style from './header.module.css';
import avatar from '../images/Ellipse 171.png';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
          const response = await axios.get('https://petshackaton.ru/account/profile/', {
            headers: {
              accept: 'application/json',
              'X-CSRFToken': 'gwaaCwoB13ErqqM8lrTB0QoaATVfx6HS4SwAVyqONj2HZa8olN1QhxCEftONpehs',
              Authorization: `Bearer ${accessToken}`
            }
          });

          const { name } = response.data[0];
          setUserName(name);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserName();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setUserName('');
    setIsLoggedIn(false);
  };

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
        {isLoggedIn ? (
          <div className={style.username_box}>
            <div>
              <img className={style.avatar} src={avatar} alt="" />
              <div className={style.user_name}>{userName}</div>
            </div>
            <button className={style.logout_btn} onClick={handleLogout}>
              Выйти
            </button>
          </div>
        ) : null}
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
