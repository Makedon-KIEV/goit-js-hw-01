// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.
// Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;

console.log(`Значение цены за единицу товара: ${pricePerItem}`);
console.log(`Количество товара: ${orderedQuantity}`);
console.log(`Общая сумма покупки: ${totalPrice}`);
