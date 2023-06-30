import style from './person.module.css'
import Market from '../../components/market';
import CarouselComponent from '../../components/carousel/index';
import { Link } from 'react-router-dom';

const ChoosePerson = () => {
    return (
        <div className={style.container}>
            <div className={style.bankImg} ><CarouselComponent /></div>
            <div className={style.btnContainer}>
                <Link className={style.btn_link} to="/create-ticket">
                    <div className={style.legal_gradient}>
                        <button className={style.legal}>Физическое лицо</button>
                    </div>
                    <div className={style.legal_gradient}>
                        <button className={style.legal}>Юридическое лицо</button>
                    </div>
                </Link>
                <div className={style.market}><Market /></div>
            </div>
        </div>
    )
}

export default ChoosePerson
