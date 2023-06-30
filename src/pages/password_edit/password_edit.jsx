import React, { useState } from 'react';
import passwordChange from "./password_change.module.css"
import CarouselComponent from '../../components/carousel/index';
import Market from '../../components/market';


const ChangePassword = () => {
    const [email, setEmail] = useState('');
    const [resetRequested, setResetRequested] = useState(false);

    const PasswordChange = (e) => {
        e.preventDefault();
        // Можно использовать fetch или axios для отправки данных
        const data = {
            email
        };

        // Здесь выполняется отправка данных на сервер

        // Обработка успешной отправки запроса на восстановление пароля
        setResetRequested(true);
    };

    return (
        <div className={passwordChange.contain_forgotPassword}>
            <div className={passwordChange.bankImg} ><CarouselComponent /></div>
            <div className={passwordChange.box}>
                {resetRequested ? (
                    <div className={passwordChange.answer}>
                        Запрос на восстановление пароля отправлен на вашу почту. Пожалуйста, проверьте свою почту и следуйте инструкциям!
                    </div>
                ) : (
                    <form onSubmit={PasswordChange}>
                        <div className={passwordChange.form}>
                            <h4>Изменить пароль</h4>
                            <div>Введите e-mail адрес, для изменения пароля</div>
                            <input
                                className={passwordChange.email}
                                type="email"
                                placeholder='e-mail'
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className={passwordChange.button} type="submit">Изменить пароль</button>
                    </form>
                )}
             <div className={passwordChange.market}><Market /></div>
            </div>
        </div>
    );
};

export default ChangePassword;
