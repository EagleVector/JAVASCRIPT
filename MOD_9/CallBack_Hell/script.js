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

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Something went wrong')
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromise = getData('./movies.json');

const actorPromise = getData('./actors.json');

const directorPromise = getData('./directors.json');

const dummyPromise = new Promise((resolve, reject) => {
  resolve('Hello World!')
})
Promise.all([moviesPromise, actorPromise, directorPromise, dummyPromise])
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error));