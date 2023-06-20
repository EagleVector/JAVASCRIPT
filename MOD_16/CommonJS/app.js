// console.log('Hello from NodeJS');

// async function getUser() {
//   const response = await fetch('https://api.github.com/users/EagleVector');
//   const data = await response.json();
//   console.log(data);
// }

// getUser();

// const message = require('./utils');
// console.log(message.text);

// const capitalizeWords = require('./utils');
// console.log(capitalizeWords('hello there! how you doin?'));

// const { capitalizeWords, makeMoney } = require('./utils');
// console.log(capitalizeWords('hello there! how you doin?'));
// console.log(makeMoney(100));

const Person = require('./Person');

const person1 = new Person('Cherry', 26);
person1.greet();
