// Функция getSubstring(string, length) принимает строку и
// возвращает подстроку от начала и до length символов.
// Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// string - оригинальная строка
// length - количество символов с начала строки для подстроки
// Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

function getSubstring(string, length) {
  const substring = string.slice(0, length);

  return substring;
}

console.log(getSubstring('Hello world', 3)); // "Hel"
console.log(getSubstring('Hello world', 6)); // "Hello"
console.log(getSubstring('Hello world', 8)); // "Hello wo"
console.log(getSubstring('Hello world', 11)); // "Hello world"
console.log(getSubstring('Hello world', 0)); // ""
