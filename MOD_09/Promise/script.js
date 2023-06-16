// Promise: -> An object that represents the eventual completion or failure of an asynchronous operation. Prevents us from getting into a callback hell.

// Creating a promise

// const promise = new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// });

// promise.then(() => {
//   console.log('Promise consumed...');
// });

// Merging it into one -> putting it on promise itself.

// const promise = new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve();
//   }, 1000);
// }).then(() => console.log('Promise consumed...'));

// console.log('Hello from global scope');

// const promise = new Promise((resolve, reject) => {
//   // Do some async task
//   setTimeout(() => {
//     console.log('Async task complete');
//     resolve({name: 'John', age: 30});
//   }, 1000);
// }).then((user) => console.log());

// console.log('Hello from global scope');

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       resolve({ name: 'Cherry', age: 26 });
//     } else {
//       reject('Error: Something went wrong');
//     }
//   }, 1000);
// });

// getUser.then((user) => console.log(user));

// console.log('Hello from global scope');

// const getUser = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;

//     if (!error) {
//       resolve({ name: 'Cherry', age: 26 });
//     } else {
//       reject('Error: Something went wrong');
//     }
//   }, 1000);
// });

// getUser.then((user) => console.log(user)).catch((error) => console.log(error)).finally(() => console.log('The promise has been resolved or rejected'));

// console.log('Hello from global scope');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ name: 'Cherry', age: 26});
    }
    else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promise
.then((user) => {
  console.log(user);
  return user.name;
})
.then((name) => {
  console.log(name);
  return name.length;
})
.then((namelength) => {
  console.log(namelength);
})
.catch((error) => {
  console.log(error);
  return 123;
})
.then((x) => console.log('This will return no matter what', x));