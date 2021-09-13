// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку,
// в которой указана его длина.
// Дополни шаблонную строку в переменной message длиной строки из параметра name.

function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`;

  return message;
}

console.log(getNameLength('Poly')); // "Name Poly is 4 characters long"
console.log(getNameLength('Harambe')); // "Name Harambe is 6 characters long"
console.log(getNameLength('Billy')); // "Name Billy is 5 characters long"
console.log(getNameLength('Joe')); // "Name Joe is 3 characters long"
