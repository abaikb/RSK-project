// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import style from './ticket.module.css';
import Market from '../../components/market';
// import DatePicker from 'react-datepicker';
// import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-datepicker/dist/react-datepicker.css';
import CarouselComponent from '../../components/carousel/index';
// import axios from 'axios';
// import DateIcon from "../../components/images/Group 31.png";

// const CreateTicket = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState('');
//   const [selectedRegion, setSelectedRegion] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [selectedDepartment, setSelectedDepartment] = useState('');
//   const [selectedOperation, setSelectedOperation] = useState('');

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleTimeChange = (time) => {
//     setSelectedTime(time);
//   };

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.value);
//     setSelectedCity('');
//     setSelectedDepartment('');
//   };

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.value);
//     setSelectedDepartment('');
//   };

//   const handleDepartmentChange = (event) => {
//     setSelectedDepartment(event.target.value);
//   };

//   const handleOperationChange = (event) => {
//     setSelectedOperation(event.target.value);
//   };

//   const region = [
//     'Чуйская область',
//     'Ошская область',
//     'Ыссык-кульская область',
//     'Нарынская область',
//     'Таласская область',
//     'Баткенская область',
//     'Джалал-Абадская область',
//   ];

//   const cities = {
//     'Чуйская область': [
//       'Бишкек',
//       'Токмак',
//       'Кант',
//       'Кара-Балта',
//       'Кемин',
//       'Беловодское',
//       'Каинды',
//       'Лебединовка',
//       'Сокулук',
//     ],
//     'Ошская область': ['Ош'],
//     'Ыссык-кульская область': ['Чолпон-Ата', 'Каракол'],
//     'Нарынская область': ['Нарын'],
//     'Таласская область': ['Талас'],
//     'Баткенская область': ['Баткен'],
//     'Джалал-Абадская область': ['Джалал-Абад'],
//   };

//   const departments = {
//     Бишкек: [
//       'Сберегательная касса №033-03-33 (Центр Обслуживания Клиентов)',
//       'Сберегательная касса №033-51-09 (Центр обслуживания клиентов)',
//     ],
//     Кант: ['Кантский филиал (Центр Обслуживания Клиентов)'],
//     Токмак: ['Токмокский филиал (Центр обслуживания клиентов)'],
//     Кемин: ['Кеминский филиал (Центр обслуживания клиентов)'],
//     Беловодское: ['Беловодский филиал'],
//     Каинды: ['Каиндинский филиал'],
//     Ош: ['Ош-Центр (Центр обслуживания клиентов)', 'Ошский филиал (Центр обслуживания клиентов)'],
//     'Чолпон-Ата': ['Чолпон-Атинский филиал'],
//     Каракол: ['Иссык-Кульский филиал (Центр обслуживания клиентов)'],
//     Нарын: ['Выездная касса в здании УГНС г. Нарын'],
//     Талас: ['Таласский филиал (Центр Обслуживания Клиентов)'],
//     Баткен: ['Баткенский филиал (Центр обслуживания клиентов)'],
//     'Джалал-Абад': ['Жалал-Абадский филиал'],
//   };

//   const operations = [
//     'Расчетно-кассовое обслуживание',
//     'Кредиты для бизнеса',
//     'Интернет-банкинг',
//     'Документарные операции',
//     'Перевозка ценностей',
//     'Операции с ценными бумагами',
//     'Срочные депозиты',
//     'Pos-терминалы ККМ-онлайн',
//     'Тарифы',
//     'Банковское сопровождение',
//   ];

//   // const handleDepartmentChange = (event) => {
//   //   const selectedDepartmentValue = event.target.value;
//   //   setSelectedDepartment(selectedDepartmentValue);
//   // };

//   const departmentKeys = Object.keys(departments);

//   const departmentValues = Object.values(departments).flatMap((values) => values);

//   const handleCreateTicket = () => {
//     const accessToken = localStorage.getItem('accessToken');


//     axios
//       .post('https://petshackaton.ru/ticket/create_ticket/', {
//         headers: {
//           'Content-Type': 'application/json',
//           accept: 'application/json',
//           'X-CSRFToken': 'oEyRT0O6FKG7Oldv9KoJz5PPF0uaaRPyc0Uhc2Qjr04nn5zL96wYQM3jkAnI2Zp8',
//           Authorization: `Bearer ${accessToken}`,
//         },
//       })
//       .then((response) => {
//         const data = response.data;
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };



//   return (
//     <div className={style.container}>
//       <div className={style.bankImg}>
//         <CarouselComponent />
//       </div>
//       <div className={style.cont}>

//         <div className={style.ticketContainer}>
//           <select name="region" id="region" value={selectedRegion} onChange={handleRegionChange}>
//             <option value="">Область</option>
//             {region.map((el, index) => (
//               <option key={index} value={el}>
//                 {el}
//               </option>
//             ))}
//           </select>
//           <select name="city" id="city" value={selectedCity} onChange={handleCityChange}>
//             <option value="">Город</option>
//             {selectedRegion &&
//               cities[selectedRegion].map((el, index) => (
//                 <option key={index} value={el}>
//                   {el}
//                 </option>
//               ))}
//           </select>
//           <select name="department" id="department" value={selectedDepartment} onChange={handleDepartmentChange}>
//             <option value="">Отделение</option>
//             {selectedCity &&
//               departments[selectedCity].map((el, index) => (
//                 <option key={index} value={el}>
//                   {el}
//                 </option>
//               ))}
//           </select>
//           <select name="" id="" value={selectedOperation} onChange={handleOperationChange}>
//             <option >Тип операции</option>
//             {operations.map((el, id) => (
//               <option key={id} value={el}>
//                 {el}
//               </option>
//             ))}
//           </select>
//           <div className={style.pickerWrapper}>
//             <div className={style.dateContainer}>
//               <DatePicker
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 dateFormat="dd-MM-yyyy"
//                 placeholderText="Выберите дату"
//                 className={style.datePicker}
//                 wrapperClassName={style.datePickerWrapper}
//                 calendarClassName={style.datePickerCalendar}
//               />
//               <img src={DateIcon} alt="date icon" className={style.dateIcon} />
//             </div>
//           </div>
//           <Link to="/ticket">
//             <button className={style.btnCreate} onClick={handleCreateTicket}>
//               Создать билет
//             </button>
//           </Link>
//         </div>
//         <div><Market /></div>
//       </div>
//     </div >
//   );
// };

// export default CreateTicket;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './TicketForm.module.css';

const apiBaseUrl = 'https://petshackaton.ru';

const SelectOptions = ({ options, label, onChange }) => (
  <div>
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
    <div className={styles.container}>
      <div className={styles.bankImg}>
        <CarouselComponent />
      </div>
      <div className={styles.cont}>
        <div className={styles['ticket-form-container']}>
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
            <div className={styles['form-group']}></div>
            <button className={styles.button_create} type="submit">Создать билет</button>
          </form>
        </div>
        <div><Market /></div>
      </div>
    </div>
  );
}

export default TicketForm;
