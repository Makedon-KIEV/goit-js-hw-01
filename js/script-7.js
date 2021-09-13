// 1. Функция add должна уметь складывать три числа и выводить результат в консоль.
// Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.

// 2. Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

function add(a, b, c) {
  // const result = a + b + c;
  // console.log(`Addition result equals ${result}`);

  return a + b + c;
}

add(2, 5, 8); // 15

console.log('Addition result equals:', add(2, 5, 8));
console.log('Addition result equals:', add(15, 27, 10));
console.log('Addition result equals:', add(10, 20, 30));
console.log('Addition result equals:', add(5, 10, 15));
