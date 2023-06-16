let x;

const person = {
  name: "Cherry",
  age: 26,
  location: "Ranchi",
  isAdmin: false,
  address: {
    pin: {num: 834001,
      loc: 'RC'},
    state: 'Jharkhand',
    area: 'Pandra'
  },
  hobbies: ['music', 'boxing', 'f1']
};

x = person.name;

console.log(x);

x = person.age;

console.log(x);

x = person.hobbies;

console.log(x);

x = person.address.pin.num;

console.log(x);

delete person.age;

person.hasChildren = false;
person.greet = function() {
  console.log(`Hello ${person.name}!`);
}
console.log(person);

person.greet();

person.name = "Sunny";

person.age = 32;

person.location = 'WhiteField';

console.log(person);
person.greet();

// Spread Operator

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

// const obj3 = {obj1, obj2};
// console.log(obj3);

const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2);

x = obj4;
console.log(x);
console.log(obj3);

// Array of objects

const todos = [
  {id: 1, task: "Buy Milk", isCompleted: true},
  {id: 2, task: "Have Lunch", isCompleted: true},
  {id: 3, task: "Attend class", isCompleted: false}
]

x = todos[1];
console.log(x);

x = todos[2].isCompleted;
console.log(x);

const todo = {
    id: 1,
    task: "Buy Milk",
    isCompleted: true 
  }

// Object methods

x = Object.keys(person);
console.log(x);

x = Object.values(person)
console.log(x);

x = Object.keys(person).length;
console.log(x);

x = Object.entries(person);
console.log(x);

x = new Object();
x.id = 1;
x.name = "Chikki";

console.log(x);

let y = x;
console.log(y.hasOwnProperty('id'));

// Destructuring and Naming

const fname = "Eagle";
const lname = "Vector";
const role = "Dev";

const card = {
  fname,
  lname,
  role
}
console.log(card);

const todox = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: "Cherry",
    roles: "dev"
  }
};

const {id, title, user: { name, roles}} = todox;

console.log(id, title, name, roles);

// Destructure Arrays

const numbers = [23, 67, 33, 49, 52, 69];

// rest operator
const [first, second, ...rest] = numbers;

console.log(first, second, rest);