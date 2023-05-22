// for (let i = 0; i < 10; i++) {
//   console.log('Number : ' + i);
// }

// // Can't use const inside loop

// for (let i = 0; i < 10; i++) {

//   if (i == 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number : ' + i);
//   }
// }

// Nested loops

// for (let i = 0; i <= 10; i++) {
//   console.log('Number : ' + i);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
// const names = ['Brad', 'Sam', 'Cherry', 'Sunny', 'Sara', 'Sam'];

// for (let i = 0; i < names.length; i++) {
//   if (names[i] == 'Sara') {
//     console.log('Sara is the best');
//   }
//   console.log(names[i]);
// }

// // Break and Continue

// for (let i = 0; i <= 20; i++) {
//   if (i == 15) {
//     console.log('Breaking....');
//     break;
//   }
//   console.log('Number : ' + i);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i == 15) {
//     console.log('Breaking....');
//     continue;
//   }
//   console.log('Number : ' + i);
// }

// for (let i = 0; i <= 20; i++) {
//   if (i === 13) {
//     console.log('Skipping 13....');
//     continue;
//   }
//   console.log('Number : ' + i);
// }

// // While and Do-while Loops

// let i = 0;

// while (i <= 20) {
//   console.log('Number: ' + i);
//   i++;
// }

// const arr = [10, 20, 30, 40, 50];

// let i = 0;
// while (i <= arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Nested while loop

// let i = 1;

// while (i <= 5) {

//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// let i = 10

// Do - While loops
// Will run at least once

// do {
//   console.log('Number: ' + i);
//   i++;
// }while(i < 20);

// FizzBuzz

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   }
//   else if (i % 3 == 0) {
//     console.log("Fizz");
//   }
//   else if (i % 5 == 0) {
//     console.log("Buzz");
//   }
//   else {
//     console.log(i);
//   }
// }

// let i = 1;

// while (i <= 100) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   }
//   else if (i % 3 == 0) {
//     console.log("Fizz");
//   }
//   else if (i % 5 == 0) {
//     console.log("Buzz");
//   }
//   else {
//     console.log(i);
//   }
//   i++;
// }

// For Of Loop -> Loop through Arrays

const items = ['book', 'table', 'chair', 'kite'];

for (const item of items) {
  console.log(item);
}

const users = [
  {name : 'Brad'},
  {name : 'Cherry'},
  {name : 'Steve'}
]

for (const user of users) {
  console.log(user.name);
}

// Loop over Strings

const str = "Hello World!";
console.log(str);

for (const letter of str) {
  console.log(letter);
}

// Loop over maps
const map = new Map();
map.set('name', 'Cherry');
map.set('age', 26);

for (const [key, val] of map) {
  console.log(key, val);
}

// For-In Loop - For Objects

const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
  color5: 'purple',
}

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

// For Arrays

const colorArr = ['red', 'blue', 'orange', 'green', 'purple'];

for (const key in colorArr) {
  console.log(key, colorArr[key]);
}