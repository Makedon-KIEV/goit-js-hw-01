// 1. Объяви две переменные, productName для названия товара и pricePerItem для хранения цены за штуку.
// При объявлении присвой переменным следующие характеристики товара:
// название - строка "Droid"
// цена за штуку - число 2000

// 2. Имя товара изменили на "Repair droid" и увеличили его цену на 1500 кредитов.
// Переопредели значения переменных pricePerItem и productName после их объявления.

let productName = 'Droid';
console.log('Название товара:', productName); // 'Droid'
let pricePerItem = 2000;
console.log('Цена за единицу товара:', pricePerItem); // 2000

productName = 'Repair droid';
console.log('Новое название товара:', productName); // 'Repair droid'
pricePerItem = pricePerItem + 1500;
console.log('Новая цена за единицу товара:', pricePerItem); // 3500
