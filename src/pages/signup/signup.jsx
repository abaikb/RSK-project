import React, { useState } from 'react';
import axios from 'axios';
import styles from './signup.module.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    inn: '',
    phone_number: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.lastName) {
      newErrors.lastName = 'Пожалуйста, введите фамилию';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'Пожалуйста, введите имя';
    }

    if (!formData.middleName) {
      newErrors.middleName = 'Пожалуйста, введите отчество';
    }

    if (!formData.inn) {
      newErrors.inn = 'Пожалуйста, введите ИНН';
    } else if (formData.inn.length !== 10) {
      newErrors.inn = 'ИНН должен состоять из 10 цифр';
    }

    if (!formData.phone_number) {
      newErrors.phone_number = 'Пожалуйста, введите номер телефона';
    } else if (!/^\d{10}$/.test(formData.phone_number)) {
      newErrors.phone_number = 'Номер телефона должен состоять из 10 цифр';
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
        const response = await axios.post('http://34.89.148.74/account/register/', formData);
        console.log(response.data);
        localStorage.setItem('accessToken', response.data.token);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className={styles.signupContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Фамилия"
          />
          {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Имя"
          />
          {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Отчество"
          />
          {errors.middleName && <span className={styles.error}>{errors.middleName}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="inn"
            value={formData.inn}
            onChange={handleChange}
            placeholder="ИНН"
          />
          {errors.inn && <span className={styles.error}>{errors.inn}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Номер телефона"
          />
          {errors.phoneNumber && <span className={styles.error}>{errors.phone_number}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Пароль"
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            placeholder="Повторите пароль"
          />
          {errors.password2 && (
            <span className={styles.error}>{errors.password2}</span>
          )}
        </div>
        <div>
          <input className={styles.checkbox} type="checkbox" />
          <div className={styles['forgot-title']}>Запомнить меня</div>
          <label></label>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
