class User {
  // Деструктуризируем объект
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Манго", email: "mango@mail.com" }

const poly = new User({
  name: "Поли",
  email: "poly@mail.coввm",
});
console.log(poly); // { name: "Поли", email: "poly@mail.com" }