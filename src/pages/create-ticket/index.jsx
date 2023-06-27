import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from './ticket.module.css';
import Market from '../../components/market';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import CarouselComponent from '../../components/carousel/index';
import DateIcon from "../../components/images/Group 31.png";

const CreateTicket = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedOperation, setSelectedOperation] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedCity('');
    setSelectedDepartment('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedDepartment('');
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleOperationChange = (event) => {
    setSelectedOperation(event.target.value);
  };

  const region = ["Чуйская область", "Ошская область", "Ыссык-кульская область", "Нарынская область", "Таласская область", "Баткенская область", "Джалал-Абадская область"];

  const cities = {
    "Чуйская область": ["Бишкек", "Токмак", "Кант", "Кара-Балта", "Кемин", "Беловодское", "Каинды", "Лебединовка", "Сокулук"],
    "Ошская область": ["Ош"],
    "Ыссык-кульская область": ["Чолпон-Ата", "Каракол"],
    "Нарынская область": ["Нарын"],
    "Таласская область": ["Талас"],
    "Баткенская область": ["Баткен"],
    "Джалал-Абадская область": ["Джалал-Абад"]
  };

  const departments = {
    "Бишкек": ["Сберегательная касса №033-03-33 (Центр Обслуживания Клиентов)", "Сберегательная касса №033-51-09 (Центр обслуживания клиентов)"],
    "Кант": ["Кантский филиал (Центр Обслуживания Клиентов)"],
    "Токмак": ["Токмокский филиал (Центр обслуживания клиентов)"],
    "Кемин": ["Кеминский филиал (Центр обслуживания клиентов)"],
    "Беловодское": ["Беловодский филиал"],
    "Каинды": ["Каиндинский филиал"],
    "Ош": ["Ош-Центр (Центр обслуживания клиентов)", "Ошский филиал (Центр обслуживания клиентов)"],
    "Чолпон-Ата": ["Чолпон-Атинский филиал"],
    "Каракол": ["Иссык-Кульский филиал (Центр обслуживания клиентов)"],
    "Нарын": ["Выездная касса в здании УГНС г. Нарын"],
    "Талас": ["Таласский филиал (Центр Обслуживания Клиентов)"],
    "Баткен": ["Баткенский филиал (Центр обслуживания клиентов)"],
    "Джалал-Абад": ["Жалал-Абадский филиал"],
  };

  const operations = [
    "Расчетно-кассовое обслуживание",
    "Кредиты для бизнеса",
    "Интернет-банкинг",
    "Документарные операции",
    "Перевозка ценностей",
    "Операции с ценными бумагами",
    "Срочные депозиты",
    "Pos-терминалы ККМ-онлайн",
    "Тарифы",
    "Банковское сопровождение"
  ];

  const generateTimeOptions = () => {
    const timeOptions = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        timeOptions.push(time);
      }
    }
    return timeOptions;
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className={style.container}>
      <div className={style.bankImg}><CarouselComponent /></div>
      <div className={style.cont}>
        <div className={style.ticketContainer}>
          {/* Region */}
          <select name="region" id="region" value={selectedRegion} onChange={handleRegionChange}>
            <option value="">Область</option>
            {region.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>
          {/* City */}
          <select name="city" id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Город</option>
            {selectedRegion &&
              cities[selectedRegion].map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
          </select>
          {/* Department */}
          <select name="department" id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="">Отделение</option>
            {selectedCity &&
              departments[selectedCity].map((el, index) => (
                <option key={index} value={el}>
                  {el}
                </option>
              ))}
          </select>
          {/* Operation */}
          <select name="" id="" value={selectedOperation} onChange={handleOperationChange}>
            <option disabled>Тип операции</option>
            {operations.map((el, id) => (
              <option key={id} value={el}>
                {el}
              </option>
            ))}
          </select>
          {/* Date and Time */}
          <div className={style.pickerWrapper}>
            <div className={style.dateContainer}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd-MM-yyyy"
                placeholderText="Выберите дату"
                className={style.datePicker}
                wrapperClassName={style.datePickerWrapper}
                calendarClassName={style.datePickerCalendar}
              />
              <img src={DateIcon} alt="date icon" className={style.dateIcon} />
            </div>
            <select className={style.timePicker} value={selectedTime} onChange={(e) => handleTimeChange(e.target.value)}>
              {timeOptions.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <Link to="/ticket">
            <button className={style.btnCreate}>Создать билет</button>
          </Link>
        </div>
        <div><Market /></div>
      </div>
    </div>
  );
};

export default CreateTicket;
