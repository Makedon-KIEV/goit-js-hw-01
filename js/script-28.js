// Функция checkName(fullname, name) принимает два параметра
// и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name),
// в полное имя(параметр fullname).
// Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

function checkForName(fullName, name) {
  const result = fullName.includes(name);
  return result;
}

console.log(checkForName('Egor Kolbasov', 'Egor')); // true
console.log(checkForName('Egor Kolbasov', 'egor')); // false
console.log(checkForName('Egor Kolbasov', 'egOr')); // false
console.log(checkForName('Egor Kolbasov', 'Zhenya')); // false
console.log(checkForName('Vadim Nekrasov', 'Vadim')); // true
console.log(checkForName('Vadim Nekrasov', 'vadim')); // false
console.log(checkForName('Vadim Nekrasov', 'Dima')); // false
