// Fetch api returns a promise

// Standard promise syntax
// fetch('./movies.json').then();

// Fetching a json file
// fetch('./movies.json').then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// });

// cleaning up a bit

// fetch('./movies.json')
// .then((response) => response.json())
// .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/EagleVector')
  .then((response) => response.json())
  .then((data) => (document.querySelector('h1').textContent = data.login));
