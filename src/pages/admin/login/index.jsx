import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import style from './login.module.css';
import Logo from '../../../components/admin/img/logo_Rsk.svg'

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Пожалуйста, введите номер телефона!';
        }

        if (!password) {
            newErrors.password = 'Пожалуйста, введите пароль!';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await axios.post('https://petshackaton.ru/account/login/', {
                    phone_number: username,
                    password: password,
                });

                const { access, refresh } = response.data;
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);

                console.log('Успешный вход в систему');
                navigate('/admin/main');
                window.location.reload();
            } catch (error) {
                if (error.response && error.response.data && error.response.data.detail) {
                    setErrorMessage(error.response.data.detail);
                } else {
                    setErrorMessage('Произошла ошибка входа. Пожалуйста, попробуйте еще раз.');
                }
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={style.main}>
            <div className={style.blue_ellipse}>
                    <div className={style.login_container}>
                        <img className={style.logo} src={Logo} alt="" />
                        <h2 className={style.welcome}> Добро пожаловать!</h2>
                        <form className={style.login_form} onSubmit={handleLogin}>
                            <input
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                placeholder="Номер телефона"
                                className={style.login_input}
                            />
                            {errors.username && <div className={style.errors}>{errors.username}</div>}
                            <div className={style.password_input_container}>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Пароль"
                                    className={style.login_input}
                                />
                                <div className={style.password_icons} onClick={toggleShowPassword}>
                                    {showPassword ? <IoEyeOff /> : <IoEye />}
                                </div>
                            </div>
                            {errors.password && <div className={style.errors}>{errors.password}</div>}
                            {errorMessage && <div className={style.errors}>{errorMessage}</div>}
                            <span className={style.login_checkbox}>
                                <input
                                    className={style.checkbox}
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={handleRememberMeChange}
                                />
                                <span>Запомнить меня</span>
                                <Link to="/forgot_password" className={style.forgot_link} href="#">
                                    Забыли пароль?
                                </Link>
                            </span>
                            <button type="submit" className={style.login_button}>
                                Войти
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export default AdminLogin;
