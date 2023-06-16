import { useState, useEffect } from 'react';
import style from "./main.module.css";
import Image from "../../components/images/banner.png";
import Image2 from "../../components/images/Group 56.png";
import Money from "../../components/images/Group.png";
import Footer from "../../components/footer/footer";
import Market from "../../components/market";

export const MainPage = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        const formattedDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;

        setCurrentDate(formattedDate);
    }, []);

    const currencyData = [
        { currency: 'USD', buy: 84.5, sell: 85.5 },
        { currency: 'EUR', buy: 99.2, sell: 100.2 },
        { currency: 'RUB', buy: 1.1, sell: 1.2 },
        { currency: 'KZT', buy: 0.2, sell: 0.3 }
    ];

    return (
        <>
            <div className={style.main}>
                <div className={style.containerImg}>
                    <img className={style.bankImg} src={Image} alt="image" />
                    <div className={style.exchange}>
                        <div>
                            <img src={Money} alt="$" />
                            <h3>Курсы валют</h3>
                        </div>
                        <p>по г.Бишкек с понедельника <br /> по пятницу</p>
                        <p>Курс на {currentDate}</p>
                        <table className={style.currencyTable}>
                            <thead>
                                <tr>
                                    <th>Валюта</th>
                                    <th>Покупка</th>
                                    <th>Продажа</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currencyData.map((data) => (
                                    <tr key={data.currency}>
                                        <td>{data.currency}</td>
                                        <td>{data.buy}</td>
                                        <td>{data.sell}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>При конвертации валюты эквивалентом более 1 000 долларов США действуют договорные обменные курсы.</p>
                    </div>
                </div>
                <p className={style.mainText}>ОАО “РСК Банк” ОБНУЛЯЕТ ВСЕ КОМИССИИ на период действия режима чрезвычайной ситуации и чрезвычайного положения для пенсионеров и получателей социальных пособий в банкоматах Банка и pos-терминалах, расположенных в отделениях Кыргыз почтасы!Теперь вы можете получить ваши пенсии и пособия по картам Элкарт без комиссии, так как Банк обнуляет свои комиссии и берет на себя все расходы по компенсации комиссий Кыргыз почтасы.ВАЖНО! Комиссия будет сниматься автоматически. Однако, РСК Банк ГАРАНТИРУЕТ в кратчайшие сроки компенсировать сумму этой комиссии, перечислив ее на вашу карту.РСК Банк стремится поддерживать пенсионеров и получателей социальных пособий в дни ЧП и готов сделать все возможное, чтобы сохранить их средства в полном объеме!</p>
                <img src={Image2} alt="" />
                <Market />
            </div>
            <Footer />
        </>
    );
};
