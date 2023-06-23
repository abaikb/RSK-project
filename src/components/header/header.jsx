import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Logo from '../images/logo.png';
import style from './header.module.css';
import avatar from '../images/Ellipse 171.png';
import Modal from 'react-modal';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setUserName('');
    setIsLoggedIn(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  

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

  const modalContent = (
    <div className={style.modal_container}>
      <h2 className={style.modal_name}>{userName}</h2>
      <div className={style.modal_box}>
      <a href="http://localhost:3000/personal" className={style.modal_link}>Личный кабинет</a>
      </div>
      <div className={style.modal_buttons}>
      <button onClick={closeModal} className={style.modal_btn}>x</button>
        <button className={style.logout_btn} onClick={handleLogout}>
          Выйти
        </button>
      </div>
    </div>
  );

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
          {isLoggedIn ? (
            <div className={style.username_box}>
              <div>
                <img className={style.avatar} src={avatar} alt="" onClick={openModal} />
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="User Modal"
                  className={style.modal}
                  overlayClassName={style.overlay}
                >
                  {modalContent}
                </Modal>
              </div>
            </div>
          ) : null}
          <select className={style.lang_btn} name="lang" id="lang">
            <option value="">RU</option>
            <option value="">KGZ</option>
            <option value="">EN</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Header;
