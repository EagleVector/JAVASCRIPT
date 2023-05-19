// The Call Stack: JS
// Follows LIFO --> Last In First Out

// function first() {
//   console.log('first...');
// }

// function second() {
//   console.log('second...');
// }

// function third() {
//   console.log('third...');
// }

// first();
// second();
// third();

function first() {
  second();
  console.log('first...');
}

function second() {
  third();
  console.log('second...');
}

function third() {
  console.log('third...');
}

first();