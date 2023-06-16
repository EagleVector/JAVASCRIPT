const xhr = new XMLHttpRequest();

// xhr.open takes in two arguments -> type of request and url

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://api.github.com/users/EagleVector/repos');

// ready state has 5 possible values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// xhr.onreadystatechange = function () {
//   console.log(this.readyState);
// };

// xhr.onreadystatechange = function () {
//   console.log(this.status);
// };

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);

//     data.forEach(movie => {
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
//       document.querySelector('#results').appendChild(li);
//     })
//   }
// };

// xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);

    data.forEach(user => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${user.name}</strong> - ${user.description}`;
      document.querySelector('#results').appendChild(li);
    })
  }
};

xhr.send();