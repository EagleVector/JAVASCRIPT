// function getData(endpoint, cb) {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', endpoint);

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       cb(JSON.parse(this.responseText));
//     }
//   };

//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }

// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//       console.log(data);
//     })
//   })
// });

// Promise vs Callback hell

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Something went wrong')
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// getData('./movies.json')
// .then((movies) => {
//   console.log(movies);
//   return getData('./actors.json');
// })
// .then((actors) => {
//   console.log(actors);
//   return getData('./directors.json');
// })
// .then((directors) => {
//   console.log(directors);
// })
// .catch((error) => console.log(error));

// Using promise.all()

// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Something went wrong')
//         }
//       }
//     };

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }

// const moviesPromise = getData('./movies.json');

// const actorPromise = getData('./actors.json');

// const directorPromise = getData('./directors.json');

// const dummyPromise = new Promise((resolve, reject) => {
//   resolve('Hello World!')
// })
// Promise.all([moviesPromise, actorPromise, directorPromise, dummyPromise])
// .then((data) => {
//   console.log(data);
// })
// .catch((error) => console.log(error));

// We will try to achieve the multiple promise chaining using Async Await 

// async function getAllData() {
//   const movies = await getData('./movies.json');
//   const actors = await getData('./actors.json');
//   const directors = await getData('./directors.json');
//   console.log(movies, actors, directors);
// }


// async function getAllDataWithFetch() {
//   const movieRes = await fetch('./movies.json');
//   const movies = await movieRes.json();

//   const actorRes = await fetch('./actors.json');
//   const actors = await actorRes.json();

//   const directorRes = await fetch('./directors.json');
//   const directors = await directorRes.json();

//   console.log(movies, actors, directors);
// }

// With Promise.all

// async function getAllDataPromiseAll() {
//   const [movieRes, actorRes, directorRes] = await Promise.all([
//     fetch('./movies.json'),
//     fetch('./actors.json'),
//     fetch('./directors.json')
//   ]);

//   const movies = await movieRes.json();
//   const actors = await actorRes.json();
//   const directors = await directorRes.json();

//   console.log(movies, actors, directors);
// }

// // getAllDataWithFetch();

// getAllDataPromiseAll();

async function getAllDataPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch('./movies.json').then(res => res.json()),
    fetch('./actors.json').then(res => res.json()),
    fetch('./directors.json').then(res => res.json())
  ]);

  console.log(movies, actors, directors);
}

// getAllDataWithFetch();

getAllDataPromiseAll2();