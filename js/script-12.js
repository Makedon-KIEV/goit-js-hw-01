// Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false.
// Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля.
// Введённый пароль передаётся в параметр password.
// Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей.
// Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = password === SAVED_PASSWORD;
  return isMatch;
}

console.log(isValidPassword('mangodab3st')); // false
console.log(isValidPassword('kiwirul3z')); // false
console.log(isValidPassword('jqueryismyjam')); // true

// Функция checkPassword(password) сравнивает переданный ей пароль (параметр password)
// с сохранённым паролем администратора(константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// Используя тернарный оператор дополни функцию так, что:

// Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
// В противном случае, присвой message строку "Access denied, wrong password!".

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  message = password === ADMIN_PASSWORD ? 'Access is allowed' : 'Access denied, wrong password!';

  return message;
}

console.log(checkPassword('jqueryismyjam')); // "Access is allowed"
console.log(checkPassword('angul4r1sl1f3')); // "Access denied, wrong password!"
console.log(checkPassword('r3actsux')); // "Access denied, wrong password!"

// Функция checkPassword(password) получает пароль в параметр password,
// проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD
// и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// Если значение параметра password:

// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;

    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;

    default:
      message = 'Access denied, wrong password!';
  }

  return message;
}

console.log(checkPassword('mangohackzor')); // "Access denied, wrong password!"
console.log(checkPassword(null)); // "Canceled by user!"
console.log(checkPassword('polyhax')); // "Access denied, wrong password!"
console.log(checkPassword('jqueryismyjam')); // "Welcome!"
