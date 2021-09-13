// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова.
// Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие.
// Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
  const passed = age >= 18;
  return passed;
}

console.log(isAdult(20)); // true
console.log(isAdult(14)); // false
console.log(isAdult(8)); // false
console.log(isAdult(37)); // true

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

console.log(checkAge(20)); // "You are an adult"
console.log(checkAge(8)); // "You are a minor"
console.log(checkAge(14)); // "You are a minor"
console.log(checkAge(38)); // "You are an adult"
