const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      // Стрелки запоминают контекст во время объявления,
      // из родительской области видимости
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}