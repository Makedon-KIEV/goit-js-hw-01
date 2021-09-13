// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits",
// где < product name > и < product price > это значения параметров name и price.
// Используй синтаксис шаблонных строк.

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}

console.log(makeMessage('Radar', 6150)); // "You picked Radar, price per item is 6150 credits"
console.log(makeMessage('Scanner', 3500)); // "You picked Scanner, price per item is 3500 credits"
console.log(makeMessage('Reactor', 8000)); // "You picked Reactor, price per item is 8000 credits"
console.log(makeMessage('Engine', 4070)); // "You picked Engine, price per item is 4070 credits"
