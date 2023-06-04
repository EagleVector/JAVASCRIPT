// Async and Await : An alternative to handle Promise and asynchronous JS. Replacing `.then`

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => { 
//     resolve({name: 'Cherry', age: 26});
//   }, 1000)
// });

// promise.then((data) => console.log(data));

// async function getPromise() {
//   const response = await promise;
//   console.log(response);
// }

// getPromise();

// async function getUser() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   console.log(data);
// }

// getUser();

//Using Async await with the arrow functions

// const getPosts = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   console.log(data);
// }

// getPosts();

// Error Handling in Async Await -> Try...Catch

// Uncaught Error
// console.log(x);

// Catching the error
// try {
//   console.log(x);
// } catch(error) {
//   console.log('Error: ' + error);
// }

// function double(number) {

//   if (isNaN(number)) {
//     throw new Error(number + ' is not a number');
//   }
//   return number * 2;
// }

// try {
//   const y = double('gin');
//   console.log(y);
// } catch (error) {
//   console.log(error);
// }

// Error handling with Async Await
// Using try catch we can catch the error inside the function.

// const getUsers = async () => {
//   try {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const response = await fetch('http://httpstat.us/500');

//     if (!response.ok) {
//       throw new Error('Request Failed!')
//     }
//     const data = await response.text();
//     console.log(data);
//   } catch(error) {
//     console.log(error);
//   }
// }

// getUsers();
// Using .catch we catch error outside the function while calling them

// const getPosts = async () => {
//     // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const response = await fetch('http://httpstat.us/500');

//     if (!response.ok) {
//       throw new Error('Request Failed!')
//     }
//     const data = await response.text();
//     console.log(data);
// }

// getPosts().catch((error) => console.log(error));