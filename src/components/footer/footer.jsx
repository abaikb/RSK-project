import style from './footer.module.css'
import LogoSmall from '../images/logo_small.png'

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div>
                    <p className={style.yellow}>Центральный офис:</p>
                    <p className={style.white}>г. Бишкек ул. Московская 80/1 <br />Факс: +996 (312) 68-04-06 <br />Email:info@rsk.kg</p>
                    <p className={style.yellow2}>«Инструкция по книге жалоб <br />и предложений от клиентов Банка» </p>
                </div>
                <div className={style.secondBlock}>
                    <p className={style.yellow}>Контакт-Центр 24/7:</p>
                    <p className={style.white2}>(0312/0552/0706/0775) 911 111</p>
                    <p className={style.yellow}>Телефон доверия</p>
                    <p className={style.white2}>+996 (312) 35-55-55</p>
                    <p className={style.yellow}>WhatsApp:</p>
                    <p ><a className={style.white2} href="https://wa.me/996706911111" target='_blanc'>+996 706 911 111</a></p>
                </div>
            </div>
            <div className={style.thirdBlock}>
                <p className={style.blue}>Лицензия НБКР №033, <br /> от 22 июня 2017 года</p>

                <div>
                    <img className={style.logo} src={LogoSmall} alt="logo" />
                    <p className={style.blue2}>1996 - 2023</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer