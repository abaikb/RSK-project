import React, { useState } from 'react';
import './signup.css';

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

  const [errors, setErrors] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    inn: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, handle form submission
    } else {
      // Form is invalid, display error messages
    }
  };

  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errors };

    if (formData.lastName.trim() === '') {
      updatedErrors.lastName = 'Введите фамилию';
      isValid = false;
    }

    if (formData.firstName.trim() === '') {
      updatedErrors.firstName = 'Введите имя';
      isValid = false;
    }

    if (formData.middleName.trim() === '') {
      updatedErrors.middleName = 'Введите отчество';
      isValid = false;
    }

    if (formData.inn.trim() === '') {
      updatedErrors.inn = 'Введите ИНН';
      isValid = false;
    }

    if (formData.phoneNumber.trim() === '') {
      updatedErrors.phoneNumber = 'Введите номер телефона';
      isValid = false;
    }

    if (formData.password.trim() === '') {
      updatedErrors.password = 'Введите пароль';
      isValid = false;
    }

    if (formData.confirmPassword.trim() === '') {
      updatedErrors.confirmPassword = 'Подтвердите пароль';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      updatedErrors.confirmPassword = 'Пароли не совпадают';
      isValid = false;
    }

    setErrors(updatedErrors);
    return isValid;
  };

  return (
    <div className="signup-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Фамилия"
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Имя"
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            placeholder="Отчество"
          />
          {errors.middleName && <div className="error">{errors.middleName}</div>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="inn"
            value={formData.inn}
            onChange={handleChange}
            placeholder="ИНН"
          />
          {errors.inn && <div className="error">{errors.inn}</div>}
        </div>
        <div className="input-group">
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Номер телефона"
          />
          {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Пароль"
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="input-group">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Повторите пароль"
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>
        <div>
          <input className="checkbox" type="checkbox" />
          <div className="forgot-title">Запомнить меня</div>
          <label></label>
        </div>
        <div className="button-container">
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
