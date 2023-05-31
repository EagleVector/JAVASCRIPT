// setTimeout -> callback function that calls itself once after set time.
// setInterval -> callback function that calls itself repeatedly after set time.
// clearInterval -> callback function that stop setInterval from running.
// fetch -> promise callback (high priority).

// setTimeout(function () {
//   console.log('Hello from callback');
// }, 2000);

// console.log('Hello from global scope');

// setTimeout(changeText, 3000);

// function changeText() {
//   document.querySelector('h1').textContent = 'Hello from callback';
// }

// const timerID = setTimeout(changeText, 3000);

// document.querySelector('#cancel').addEventListener('click', () => {
//   console.log(timerID);
//   clearTimeout(timerID);
//   console.log('Timer Cancelled');
// })

// We can pass a argument -> 'Hello'

// const intervalID = setInterval(myCallback, 1000, 'Hello');

// function myCallback (a) {
//   console.log(a, Date.now());
// }

// function stopChange() {
//   clearInterval(intervalID);
// }

// document.getElementById('stop').addEventListener('click', stopChange);

let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }
}

function changeColor() {
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange() {
  clearInterval(intervalID);
}


document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);