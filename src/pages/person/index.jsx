import style from "./person.module.css"

const ChoosePerson = () => {
    return (
        <div className={style.btnContainer}>
            <button className={style.phyz}>Физическое лицо</button>
            <button className={style.legal}>Юридическое лицо</button>
        </div>
    )
}

export default ChoosePerson()