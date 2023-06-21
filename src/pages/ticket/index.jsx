import style from "./show-ticket.module.css"
import Image from '../../components/images/banner.png';
import Skan from "../../components/images/skan.png"
import Point from "../../components/images/Group 38.png";
import Market from "../../components/market";


const Ticket = () => {
    return (
        <div className={style.container}>
            <img className={style.bankImg} src={Image} alt="image" />
            <div>
                <h1>Ваш билет</h1>
                <div>
                    <div className={style.code}>
                        <p>Код активации</p>
                        <h3>03653</h3>
                    </div>
                    <div className={style.scan}>
                        <p>Сканер</p>
                        <img src={Skan} alt="сканер" />
                    </div>
                    <div className={style.code}>
                        <p>Номер талона</p>
                        <h2>E3653</h2>
                    </div>
                </div>
                <p>Адрес филиала</p>
                <div className={style.address}>
                    <div>
                        <p>Сберкасса № 36-56 </p>
                        <p>г.Бишкек  ул.Киевская №165 </p>
                    </div>
                    <img src={Point} alt="#" />
                </div>
                <p>Услуга</p>
                <div className={style.service}>Денежные переводы</div>
                <p>Дата и время</p>
                <div>
                    <div className={style.date}>21 июня, среда</div>
                    <div className={style.time}>09:00</div>
                </div>
                <button className={style.btnDelete}>Удалить</button>
                <button className={style.btnChange}>Изменить</button>
            </div>
            <Market />
        </div>
    )
}

export default Ticket