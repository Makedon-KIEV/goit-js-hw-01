function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Поли",
};

greetGuest.call(mango, "Добро пожаловать"); // Добро пожаловать, Манго.
greetGuest.call(poly, "С приездом"); // С приездом, Поли.