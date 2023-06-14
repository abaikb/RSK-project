import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Здесь могут быть дополнительные проверки, например, проверка с сервером на соответствие имени пользователя и пароля

        // Проверка успешности аутентификации
        if (username === 'admin' && password === 'password') {
            // Выполнение необходимых действий после успешного входа
            console.log('Успешный вход в систему');
        } else {
            console.log('Неверное имя пользователя или пароль');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" value={username} onChange={handleUsernameChange} placeholder="Номер телефона" />
                <input type="password" value={password} onChange={handlePasswordChange} placeholder="Пароль" />
                <span className="login-checkbox">
                    <input className="checkbox" type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                    <label></label>
                    <span>Запомнить меня</span>
                    <a className='forgot-link' href="#">Забыли пароль?</a>
                </span>

                <button type="submit">Войти</button>
                <div className="login-links">
                    <Link className='link' to='./signup'><a  href="#">Регистрация</a></Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
