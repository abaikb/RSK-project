import style from './person.module.css'
import Market from '../../components/market';
import CarouselComponent from '../../components/carousel/index';
import { Link } from 'react-router-dom';

const ChoosePerson = () => {
    return (
        <div className={style.container}>
            <div className={style.bankImg} ><CarouselComponent /></div>
            <div className={style.btnContainer}>
                <Link to="/create-ticket">
                    <button className={style.legal}>Физическое лицо</button>
                    <button className={style.legal}>Юридическое лицо</button>
                </Link>
                <div><Market /></div>
            </div>
        </div>
    )
}

export default ChoosePerson
