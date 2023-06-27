import style from "./show-ticket.module.css"
import Skan from "../../components/images/skan.png"
import Point from "../../components/images/point.png";
import Market from "../../components/market";
import Sign from "../../components/images/sign.png"
import CarouselComponent from '../../components/carousel/index';


const Ticket = () => {
    return (
        <div className={style.container}>
            <div className={style.bankImg} ><CarouselComponent /></div>
            <div className={style.cont}>
                <div className={style.ticketContainer}>
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
                    <div>
                        <button className={style.btnDelete}>Удалить</button>
                        <button className={style.btnChange}>Изменить</button>
                    </div>
                    <div className={style.warning}>
                        <img src={Sign} alt="!" />
                        <p>Внимание, во избежании пропуска, рекомендуется
                            прийти за 10 минут до забронированного времени
                        </p>
                    </div>
                </div>
                <div><Market /></div>
            </div>
        </div>
    )
}

export default Ticket