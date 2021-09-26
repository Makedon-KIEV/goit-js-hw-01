function processCall(recipient) {
  // Имитируем доступность абонента случайным числом
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
    // Логика активации автоответчика
  } else {
    console.log(`Соединяем с ${recipient}, ожидайте...`);
    // Логика принятия звонка
  }
}

processCall("Манго");