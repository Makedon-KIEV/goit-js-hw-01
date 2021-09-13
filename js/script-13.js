// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:
// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".

function checkStorage(available, ordered) {
  let message;

  if (ordered > available) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'Order is processed, our manager will contact you.';
  }

  return message;
}

console.log(checkStorage(100, 50)); // "Order is processed, our manager will contact you."
console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
console.log(checkStorage(200, 20)); // "Order is processed, our manager will contact you."
console.log(checkStorage(200, 150)); // "Order is processed, our manager will contact you."
console.log(checkStorage(150, 180)); // "Not enough goods in stock!"

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:

// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }
  // Change code above this line
  return message;
}

console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(70, 0)); // "There are no products in the order!"
console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 250)); // "Your order is too large, there are not enough items in stock!"
console.log(checkStorage(150, 0)); // "There are no products in the order!"

// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

function checkStorage(available, ordered) {
  let message;

  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';

  return message;
}

console.log(checkStorage(100, 50)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // "Not enough goods in stock!"
console.log(checkStorage(200, 20)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 150)); // "The order is accepted, our manager will contact you"
console.log(checkStorage(150, 180)); // "Not enough goods in stock!"
