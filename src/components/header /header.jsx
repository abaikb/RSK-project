// import React, { useState } from 'react';
// import './header.css';
// import Login from '../Login/login';
// ;

// const Header = ({ isLoggedIn, onLogin, onLogout }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleLogin = () => {
//     setShowModal(true);
//   };

//   const handleLogout = () => {
//     setShowModal(false);
//     onLogout();
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="logoContainer">
//           <img src="/path/to/logo.png" alt="Логотип" className="logo" />
//         </div>
//         <nav className="navigation">
//           <ul>
//             <li>
//               <a href="/">Главная</a>
//             </li>
//             <li>
//               <a href="/services">Услуги</a>
//             </li>
//             <li>
//               <a href="/contacts">Контакты</a>
//             </li>
//           </ul>
//         </nav>
//         <div>
//           {isLoggedIn ? (
//             <button onClick={handleLogout} className="button">
//               Выйти
//             </button>
//           ) : (
//             <button onClick={handleLogin} className="button">
//               Войти
//             </button>
//           )}
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <Login onLogin={onLogin} /> {/* Импортируем и используем компонент Login */}
//             <button onClick={() => setShowModal(false)} className="modal-close">
//               Закрыть
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import { NavLink } from "react-router-dom"
import Logo from '../images/Лого РСК.png'
import style from './header.module.css'

const links = [
  {
    id: 1,
    text: 'Главная',
    route: '/'
  },
  {
    id: 2,
    text: 'О нас',
    route: '/about'
  },
  {
    id: 3,
    text: 'Онлайн очередь',
    router: '/order'
  }
]
const Header = () => {
  return (
    <>
      <div className={style.header_wrapper}>
        <img className={style.logo} src={Logo} alt="logo rsk" />
        {
          links.map((link) => (
            <NavLink key={link.id} to={link.route}>
              {link.text}
            </NavLink>
          ))
        }
      </div>
    </>

  )
}

export default Header