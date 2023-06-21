import style from './person.module.css'
import Image from "../../components/images/banner.png";
import Market from '../../components/market';
import { Link } from 'react-router-dom';

const ChoosePerson = () => {
    return (
        <div className={style.container}>
            <img className={style.bankImg} src={Image} alt="image" />
            <div className={style.btnContainer}>
                <Link to="/create-ticket">
                    <button className={style.legal}>Физическое лицо</button>
                    <button className={style.legal}>Юридическое лицо</button>
                </Link>
                <Market />
            </div>
        </div>
    )
}

export default ChoosePerson