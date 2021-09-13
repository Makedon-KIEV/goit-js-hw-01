// Функция normalizeInput(input) принимает строку (параметр input)
// и возвращает такую же строку, но в нижнем регистре.
// Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

function normalizeInput(input) {
  const normalizedInput = input.toLowerCase();

  return normalizedInput;
}

console.log(normalizeInput('Hello world')); // "hello world"
console.log(normalizeInput("This ISN'T SpaM")); // "this isn't spam"
console.log(normalizeInput('Big SALE')); // "big sale"
