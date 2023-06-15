import { NavLink } from "react-router-dom"
import Logo from '../images/Лого РСК.png'
import Lang from '../images/язык иконка.png'
import style from './header.module.css'

const links = [
  {
    id: 1,
    text: 'Главная',
    route: '/main'
  },
  {
    id: 2,
    text: 'О нас',
    route: '/about_us'
  },
  {
    id: 3,
    text: 'Онлайн очередь',
    route: '/order'
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
        <button className={style.lang_btn}><img src={Lang}></img></button>
        </div>
      </div>
    </>

  )
}

export default Header