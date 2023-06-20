class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi! I am ${this.name} and I am ${this.age} years old. `);
  }
}

module.exports = Person;