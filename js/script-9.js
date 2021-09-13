// Функция calculateTotalPrice считает и возвращает общую сумму покупки.
// Она принимает два параметра, значения которых будут задаваться во время её вызова.
// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;
  return totalPrice;
}

console.log(calculateTotalPrice(5, 100)); // возвращает 500
console.log(calculateTotalPrice(8, 60)); // возвращает 480
console.log(calculateTotalPrice(3, 400)); // возвращает 1200
console.log(calculateTotalPrice(1, 3500)); // возвращает 3500
console.log(calculateTotalPrice(12, 70)); // возвращает 840
