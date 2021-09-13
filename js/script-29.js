// Функция checkForSpam(message) принимает строку (параметр message),
// проверяет её на содержание запрещенных слов spam и sale,
// и возвращает результат проверки.
// Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

function checkForSpam(message) {
  let result;

  const firstSpamWord = 'spam';
  const secondSpamWord = 'sale';
  result =
    message.toLowerCase().includes(firstSpamWord.toLowerCase()) ||
    message.toLowerCase().includes(secondSpamWord.toLowerCase());

  return result;
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
