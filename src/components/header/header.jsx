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
    route: '/about_us'
  },
  {
    id: 3,
    text: 'Онлайн очередь',
    route: '/login'
  }
]
const Header = () => {
  return (
    <>
      <div className={style.header_wrapper}>
        <img className={style.logo} src={Logo} alt="logo rsk" />
        <div className={style.links_container}>
          {
            links.map((link) => (
              <NavLink className={style.link} key={link.id} to={link.route}>
                {link.text}
              </NavLink>
            ))
          }
        </div>
        <select className={style.lang_btn} name="lang" id="lang">
          <option value="">RU</option>
          <option value="">KGZ</option>
          <option value="">EN</option>
        </select>
      </div>
    </>

  )
}

export default Header