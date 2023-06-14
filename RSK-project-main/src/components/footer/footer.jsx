import IOS from "../images/апп стор иконка .png"
import Android from "../images/Гугл плэй иконка .png"
import style from "./footer.module.css"

const Footer = () => {
    return (
        <div className={style.icons}>
            <img className={style.img} src={Android} alt="google play" />
            <img className={style.img} src={IOS} alt="apps tore" />
        </div>
    )
}

export default Footer