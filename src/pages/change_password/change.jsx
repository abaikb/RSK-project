import React, { useState } from 'react';
import changePass from "./change.module.css"
import CarouselComponent from '../../components/carousel/index';
import Market from '../../components/market';


const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [resetRequested, setResetRequested] = useState(false);

    const handleForgotPassword = (e) => {
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
        <div className={changePass.contain_forgotPassword}>
            <div className={changePass.bankImg} ><CarouselComponent /></div>
            <div className={changePass.box}>
                {resetRequested ? (
                    <div className={changePass.answer}>
                        Запрос на восстановление пароля отправлен на вашу почту. Пожалуйста, проверьте свою почту и следуйте инструкциям!
                    </div>
                ) : (
                    <form onSubmit={handleForgotPassword}>
                        <div className={changePass.form}>
                            <h4>Изменить пароль</h4>
                            <div>Введите e-mail адрес, для изменения пароля</div>
                            <input
                                className={changePass.email}
                                type="email"
                                placeholder='e-mail'
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className={changePass.button} type="submit">Восстановить пароль</button>
                    </form>
                )}
             <div className={changePass.market}><Market /></div>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
