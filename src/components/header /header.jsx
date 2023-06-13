import React, { useState } from 'react';

const QueueBankComponent = () => {
  const [queueLength, setQueueLength] = useState(0);
  const [inQueue, setInQueue] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Логика для авторизации
    // Например, отправка запроса на сервер для проверки учетных данных

    // В случае успешной авторизации, устанавливаем флаг isLoggedIn в true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Логика для выхода из авторизации
    // Например, отправка запроса на сервер для разлогинивания

    // В случае успешного выхода, сбрасываем все состояния
    setQueueLength(0);
    setInQueue(false);
    setIsLoggedIn(false);
  };

  const handleJoinQueue = () => {
    if (!isLoggedIn) {
      alert('Необходимо авторизоваться');
      return;
    }

    if (inQueue) {
      alert('Вы уже состоите в очереди');
      return;
    }

    // Логика для присоединения к очереди
    // Например, отправка запроса на сервер для регистрации в очереди

    // В случае успешной регистрации, увеличиваем длину очереди
    setQueueLength(previousLength => previousLength + 1);
    setInQueue(true);
  };

  const handleLeaveQueue = () => {
    if (!isLoggedIn) {
      alert('Необходимо авторизоваться');
      return;
    }

    if (!inQueue) {
      alert('Вы не состоите в очереди');
      return;
    }

    // Логика для выхода из очереди
    // Например, отправка запроса на сервер для удаления из очереди

    // В случае успешного удаления, уменьшаем длину очереди
    setQueueLength(previousLength => Math.max(previousLength - 1, 0));
    setInQueue(false);
  };

  return (
    <div style={{ backgroundColor: '#0066cc', color: '#fff', padding: '20px' }}>
      <header>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Выйти</button>
        ) : (
          <button onClick={handleLogin}>Войти</button>
        )}
      </header>
      <h2 style={{ marginTop: '20px' }}>Банк очередей</h2>
      <p>Длина очереди: {queueLength}</p>
      {inQueue ? (
        <button onClick={handleLeaveQueue}>Выйти из очереди</button>
      ) : (
        <button onClick={handleJoinQueue}>Встать в очередь</button>
      )}
    </div>
  );
};

export default QueueBankComponent;
