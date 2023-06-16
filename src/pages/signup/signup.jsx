import React, { useState } from 'react';
import styles from './signup.module.css';
import Image from "../../components/images/banner.png";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    inn: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
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

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Пожалуйста, введите номер телефона';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Номер телефона должен состоять из 10 цифр';
    }

    if (!formData.password) {
      newErrors.password = 'Пожалуйста, введите пароль';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Ваш код обработки отправки формы
    }
  };

  return (
    <>
      <img className={styles.bankImg} src={Image} alt="image" />
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
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Номер телефона"
            />
            {errors.phoneNumber && <span className={styles.error}>{errors.phoneNumber}</span>}
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
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Повторите пароль"
            />
            {errors.confirmPassword && (
              <span className={styles.error}>{errors.confirmPassword}</span>
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
    </>
  );
};

export default RegistrationForm;
