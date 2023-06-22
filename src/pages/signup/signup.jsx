import React, { useState } from 'react';
import axios from 'axios';
import styles from './signup.module.css';
import bannerImage from '../../components/images/banner.png';
import Market from '../../components/market';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    last_name: '',
    name: '',
    otchestvo: '',
    pin: '',
    phone_number: '',
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.last_name) {
      newErrors.last_name = 'Пожалуйста, введите фамилию';
    }

    if (!formData.name) {
      newErrors.name = 'Пожалуйста, введите имя';
    }

    if (!formData.otchestvo) {
      newErrors.otchestvo = 'Пожалуйста, введите отчество';
    }

    if (!formData.pin) {
      newErrors.pin = 'Пожалуйста, введите ИНН';
    } else if (formData.pin.length !== 14) {
      newErrors.pin = 'ИНН должен состоять из 14 цифр';
    }

    if (!formData.phone_number) {
      newErrors.phone_number = 'Пожалуйста, введите номер телефона';
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Номер телефона должен состоять из 10 цифр';
    }

    if (!formData.email) {
      newErrors.email = 'Пожалуйста, введите email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Некорректный формат email';
    }

    if (!formData.password) {
      newErrors.password = 'Пожалуйста, введите пароль';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (formData.password2 !== formData.password) {
      newErrors.password2 = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('https://petshackaton.ru/account/register/', formData);
        localStorage.setItem('accessToken', response.data.token);

        const message = response.data.message;
        setRegistrationMessage(message);
        setShowForm(false);

        setFormData({
          last_name: '',
          name: '',
          otchestvo: '',
          pin: '',
          phone_number: '',
          email: '',
          password: '',
          password2: ''
        });

        setErrors({});
      } catch (error) {
        if (error.response && error.response.status === 400) {
          const responseData = error.response.data;
          const newErrors = {};

          if (responseData.email && responseData.email[0] === "user with this email already exists.") {
            newErrors.email = responseData.email[0];
          }

          if (responseData.phone_number && responseData.phone_number[0] === "user with this phone number already exists.") {
            newErrors.phone_number = responseData.phone_number[0];
          }

          setErrors(newErrors);
        } else {
          console.error(error);
        }
      }
    }
  };

  return (
    <div className={styles.contain_signup}>
      <img className={styles.bankImg} src={bannerImage} alt="i" />

      {showForm && (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {registrationMessage && (
            <div className={styles.registrationMessage}>{registrationMessage}</div>
          )}

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Фамилия"
            />
            {errors.last_name && <p className={styles.error}>{errors.last_name}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Имя"
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="otchestvo"
              value={formData.otchestvo}
              onChange={handleChange}
              placeholder="Отчество"
            />
            {errors.otchestvo && <p className={styles.error}>{errors.otchestvo}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="pin"
              value={formData.pin}
              onChange={handleChange}
              placeholder="ИНН"
            />
            {errors.pin && <p className={styles.error}>{errors.pin}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Номер телефона"
            />
            {errors.phone_number && <p className={styles.error}>{errors.phone_number}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Пароль"
            />
            {errors.password && <p className={styles.error}>{errors.password}</p>}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password2"
              value={formData.password2}
              onChange={handleChange}
              placeholder="Повторите пароль"
            />
            {errors.password2 && <p className={styles.error}>{errors.password2}</p>}
          </div>

          <div>
            <input className={styles.checkbox} type="checkbox" />
            <div className={styles['forgot-title']}>Запомнить меня</div>
            <label></label>
            <button className={styles.signupButton} type="submit">Зарегистрироваться</button>
          </div>
          <div className={styles.market} ><Market /></div>
        </form>
      )}

      {!showForm && (
        <div className={styles.registrationMessage}>
          Вы успешно зарегистрировались. Вам отправлено письмо с активацией на вашу почту.
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
