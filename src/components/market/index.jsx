import IOS from "../images/google-play.png"
import Android from "../images/google-play.png"
import style from "./market.module.css"

const Market = () => {
    return (
        <div className={style.icons}>
           <a href="https://play.google.com/store/apps/details?id=kg.rsk.mb" target="_blanc"><img className={style.img} src={Android} /></a> 
            <a href="https://apps.apple.com/ru/app/rsk-24/id1444821112" target="_blanc"><img className={style.img} src={IOS} /></a>
        </div>
    )
}

export default Market