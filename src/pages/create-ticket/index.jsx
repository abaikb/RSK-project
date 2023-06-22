import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from './ticket.module.css';
import Image from '../../components/images/slide1.png';
import Market from '../../components/market';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

import DateIcon from "../../components/images/Group 31.png";

const CreateTicket = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('09:00');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className={style.container}>
      <img className={style.bankImg} src={Image} alt="image" />
      <div className={style.ticketContainer}>
        <select name="" id="">
          <option>Область</option>
          <option>Чуйская область</option>
          <option>Ошская область</option>
          <option>Ыссык-кульская область</option>
          <option>Нарынская область</option>
          <option>Таласская область</option>
          <option>Баткенская область</option>
          <option>Джалал-Абадская область</option>
        </select>
        <select name="" id="">
          <option value="">Район</option>
          <option value="">Октябрьский</option>
          <option value="">Ленинский</option>
          <option value="">Первомайский</option>
          <option value="">Свердловский</option>
        </select>
        <select name="" id="">
          <option value="">Город</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value="">Отделение</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <select name="" id="">
          <option value="">Тип операции</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
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
          <TimePicker
            value={selectedTime}
            onChange={handleTimeChange}
            format="HH:mm"
            clearIcon={false}
            clockClassName={style.timePickerClock}
            className={style.timePicker}
          />
        </div>
        <Link to='/ticket'>
          <button className={style.btnCreate}>Создать билет</button>
        </Link>
        <Market />
      </div>
    </div>
  );
};

export default CreateTicket;
