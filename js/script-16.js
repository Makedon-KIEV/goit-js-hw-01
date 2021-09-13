// Функция checkPassword(password) получает пароль пользователя в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и
// возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword('mangohackzor')); // "Access denied, wrong password!"
console.log(checkPassword(null)); // "Canceled by user!"
console.log(checkPassword('polyhax')); // "Access denied, wrong password!"
console.log(checkPassword('jqueryismyjam')); // "Welcome!"
