function greetGuest(greeting) {
  console.log(`${greeting}, ${this.username}.`);
}

const mango = {
  username: "Манго",
};
const poly = {
  username: "Поли",
};

greetGuest.apply(mango, ["Добро пожаловать"]); // Добро пожаловать, Манго.
greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.