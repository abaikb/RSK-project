import React, { useEffect, useState } from 'react';
import style from './show-ticket.module.css';
import Skan from '../../components/images/skan.png';
import Point from '../../components/images/point.png';
import Market from '../../components/market';
import CarouselComponent from '../../components/carousel/index';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const apiBaseUrl = 'https://petshackaton.ru';

function SelectOptions({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.title}
        </option>
      ))}
    </select>
  );
}

const Ticket = () => {
  const [ticketData, setTicketData] = useState(null);
  const [modifiedData, setModifiedData] = useState({
    city: '',
    department: '',
    address: '',
    transaction: '',
    date: '',
    time: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedTransaction, setSelectedTransaction] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [transactionOptions, setTransactionOptions] = useState([]);
  const [isTicketDeleted, setIsTicketDeleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          regionResponse,
          cityResponse,
          departmentResponse,
          transactionResponse
        ] = await Promise.all([
          axios.get(`${apiBaseUrl}/ticket/get_region/`),
          axios.get(`${apiBaseUrl}/ticket/get_city/`),
          axios.get(`${apiBaseUrl}/ticket/get_department/`),
          axios.get(`${apiBaseUrl}/ticket/get_transaction/`)
        ]);

        setCityOptions(cityResponse.data);
        setDepartmentOptions(departmentResponse.data);
        setTransactionOptions(transactionResponse.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTicketData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        const response = await axios.get(`https://petshackaton.ru/ticket/get_my_ticket/`, {
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
            'X-CSRFToken': refreshToken,
          },
        });

        const ticketData = response.data[0];
        setTicketData(ticketData);
        setModifiedData({
          city: ticketData.city,
          department: ticketData.department,
          address: ticketData.address,
          transaction: ticketData.transaction,
          date: ticketData.date,
          time: ticketData.time,
        });
      } catch (error) {
        console.error('Error fetching ticket data:', error);
      }
    };

    fetchTicketData();
  }, []);

  const handleDeleteTicket = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      const ticketId = ticketData.id;

      await axios.delete(`https://petshackaton.ru/ticket/change_ticket/${ticketId}/`, {
        headers: {
          accept: 'application/json',
          'X-CSRFToken': 'kBr8yq8mboAxX3p5ndcGdPYwS1YK2gSoLH3LWwA43lKwzAHLUaPVptA8UHDC4mgg',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setIsTicketDeleted(true);
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

// ...

const handleModifyTicket = async () => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const ticketId = ticketData.id;

    if (!selectedCity || !selectedDepartment || !selectedTransaction) {
      console.error('Error: Required fields are null.');
      return;
    }

    await axios.patch(
      `https://petshackaton.ru/ticket/change_ticket/${ticketId}/`,
      {
        city: selectedCity,
        department: selectedDepartment,
        transaction: selectedTransaction,
        date: modifiedData.date,
        time: modifiedData.time,
      },
      {
        headers: {
          accept: 'application/json',
          'X-CSRFToken': 'kBr8yq8mDZWV2mREaXNCq5wJP0gn3KSs8XNyRsazpfkbB6dUajVRHMKduA9VVSs2',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    window.location.reload()
  } catch (error) {
    console.error('Error modifying ticket:', error);
  }
};

const handleInputChange = (event) => {
  const { name, value } = event.target;

  if (name === 'city') {
    setSelectedCity(value || ''); 
  } else if (name === 'department') {
    setSelectedDepartment(value || ''); 
  } else if (name === 'transaction') {
    setSelectedTransaction(value || ''); 
  } else if (name === 'date') {
    setModifiedData((prevState) => ({
      ...prevState,
      date: value,
    }));
  } else if (name === 'time') {
    setModifiedData((prevState) => ({
      ...prevState,
      time: value,
    }));
  }
};

  const openModifyTicketModal = () => {
    setShowModal(true);
  };

  const closeModifyTicketModal = () => {
    setShowModal(false);
  };

  if (isTicketDeleted) {
    return (
      <div className={style.container}>
        <div className={style.bankImg}>
          <CarouselComponent />
        </div>
        <div className={style.delete_ticket}>
          <h1>Ваш билет удален !</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <div className={style.bankImg}>
        <CarouselComponent />
      </div>
      <div className={style.box_ticket}>
        <div className={style.ticketContainer}>
          <h1>Ваш билет</h1>
          {ticketData && (
            <div>
              <div className={style.code}>
                <p>Код активации</p>
                <h3>{ticketData.activation_code}</h3>
              </div>
              <div className={style.scan}>
                <p>Сканер</p>
                <img src={Skan} alt="сканер" />
              </div>
              <div className={style.code}>
                <p>Номер талона</p>
                <h2>{ticketData.number}</h2>
              </div>
            </div>
          )}
          <p>Адрес филиала</p>
          <div className={style.address}>
            {ticketData && (
              <div>
                <p>{ticketData.city}</p>
                <p>{ticketData.department}</p>
                <p>{ticketData.address}</p>
              </div>
            )}
            <img src={Point} alt="#" />
          </div>
          <p>Услуга</p>
          {ticketData && (
            <div className={style.service}>{ticketData.transaction}</div>
          )}
          <p>Дата и время</p>
          {ticketData && (
            <div>
              <div className={style.date}>
                {ticketData?.date && (
                  <div className={style.ticket_data}>
                    {new Intl.DateTimeFormat('ru-RU', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    }).format(new Date(ticketData.date))}
                  </div>
                )}
              </div>
              <div className={style.time}>
                {ticketData?.time &&
                  new Intl.DateTimeFormat('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit',
                  }).format(new Date(`2000-01-01T${ticketData.time}`))}
              </div>
            </div>
          )}
          <div>
            <button className={style.btnDelete} onClick={handleDeleteTicket}>
              Удалить
            </button>
            <button className={style.btnChange} onClick={openModifyTicketModal}>
              Изменить
            </button>
          </div>
        </div>
        <div>
          <Market />
        </div>
      </div>
      {showModal && (
        <div className={style.modalContainer}>
          <div className={style.modalContent}>
            <h2>Изменить билет</h2>
            <div className={style.formContainer}>
              <label>Город</label>
              <SelectOptions
                options={cityOptions}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
              <label>Отдел</label>
              <SelectOptions
                options={departmentOptions}
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              />

              <label>Транзакция</label>
              <SelectOptions
                options={transactionOptions}
                value={selectedTransaction}
                onChange={(e) => setSelectedTransaction(e.target.value)}
              />
              <div>
                <input
                  type="date"
                  name="date"
                  value={modifiedData.date}
                  onChange={handleInputChange}
                />

                <input
                  type="time"
                  name="time"
                  value={modifiedData.time}
                  onChange={handleInputChange}
                />
              </div>
              <div className={style.buttonContainer}>
                <button className={style.btnCancel} onClick={closeModifyTicketModal}>
                  Отмена
                </button>
                <button className={style.btnSave} onClick={handleModifyTicket}>
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ticket;
