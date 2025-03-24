let user = {
  name: "Adi",
  age: 34,
  getAge() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};

user.getAge();
