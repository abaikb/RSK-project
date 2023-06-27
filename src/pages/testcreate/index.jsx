import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TicketForm.module.css';

const apiBaseUrl = 'https://petshackaton.ru';

const SelectOptions = ({ options, label, onChange }) => (
  <div>
    <label htmlFor={label}>{label}:</label>
    <select
      name={label.toLowerCase()}
      id={label.toLowerCase()}
      required
      onChange={onChange}
    >
      <option value="">Выберите {label.toLowerCase()}</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  </div>
);

function TicketForm() {
  const [owner, setOwner] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [regionOptions, setRegionOptions] = useState([]);
  const [areaOptions, setAreaOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [transactionOptions, setTransactionOptions] = useState([]);
  const [executant, setExecutant] = useState('');
  const [region, setRegion] = useState('');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [department, setDepartment] = useState('');
  const [transaction, setTransaction] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          regionResponse,
          areaResponse,
          cityResponse,
          departmentResponse,
          transactionResponse
        ] = await Promise.all([
          axios.get(`${apiBaseUrl}/ticket/get_region/`),
          axios.get(`${apiBaseUrl}/ticket/get_area/`),
          axios.get(`${apiBaseUrl}/ticket/get_city/`),
          axios.get(`${apiBaseUrl}/ticket/get_department/`),
          axios.get(`${apiBaseUrl}/ticket/get_transaction/`)
        ]);

        setRegionOptions(regionResponse.data);
        setAreaOptions(areaResponse.data);
        setCityOptions(cityResponse.data);
        setDepartmentOptions(departmentResponse.data);
        setTransactionOptions(transactionResponse.data);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const ticketData = {
      owner: owner,
      date: date,
      time: time,
      status: true,
      activation_code: 'string',
      number: 'string',
      executant: executant,
      region: region,
      area: area,
      city: city,
      department: department,
      transaction: transaction
    };

    try {
      const accessToken = localStorage.getItem('accessToken');
      const csrfToken = localStorage.getItem('csrfToken');

      const response = await axios.post(
        `${apiBaseUrl}/ticket/create_ticket/`,
        ticketData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken,
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      console.log('Ответ сервера:', response.data);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleTransactionChange = (event) => {
    setTransaction(event.target.value);
  };

  return (
    <div className={styles['ticket-form-container']}>
      <h1>Создание билета</h1>
      <form onSubmit={handleSubmit} className={styles['ticket-form']}>
        <div className={styles['form-group']}>
          <SelectOptions
            options={regionOptions}
            label="Область"
            onChange={handleRegionChange}
          />
        </div>
        <div className={styles['form-group']}>
          <SelectOptions
            options={cityOptions}
            label="Город"
            onChange={handleCityChange}
          />
        </div>
        <div className={styles['form-group']}>
          <SelectOptions
            options={areaOptions}
            label="Районы"
            onChange={handleAreaChange}
          />
        </div>
        <div className={styles['form-group']}>
          <SelectOptions
            options={departmentOptions}
            label="Отдел"
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <div className={styles['form-group']}>
          <SelectOptions
            options={transactionOptions}
            label="Транзакция"
            onChange={handleTransactionChange}
          />
        </div>
        <div className={styles['form-group-time']}>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="time"
            name="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          
        </div>
        <button type="submit">Создать билет</button>
      </form>
    </div>
  );
}

export default TicketForm;
