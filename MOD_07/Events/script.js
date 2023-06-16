// JS EVENT LISTENERS: Not the Modern Way

// const clearBtn = document.querySelector('#clear');

// clearBtn.onclick = function () {
//   alert('Clear Items')
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// The later is executed everytime

// function onClear() {
//   alert('Clear Item');
// }

// Removing all the items on event - Clear All

// function onClear() {
//   const itemList = document.querySelector('ul');
//   console.log(itemList);
  
//   const items = itemList.querySelectorAll('li');
//   console.log(items);
  
//   // itemList.outerHTML = '';
//   // items.forEach((item) => item.remove());
//   // We will use the while loop which is clean and performant

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// clearBtn.addEventListener('click', onClear);

// Event listeners inside html => Not Recommended.

// addEventListener(): takes two arguments 
// event - all must be small case.
// callback function
// Adv: we can have as many event listeners as we want.

// clearBtn.addEventListener('click', function () {
//   alert('Clear!');
// });

// clearBtn.addEventListener('click', function () {
//   console.log('Clear Items!');
// });

// We have both the things executing

// clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', 
// onClear) , 5000);

//Trigger the event automatically

// setTimeout(() => clearBtn.click() ,5000);

// MOUSE EVENTS

// const logo = document.querySelector('img');

// const onClick = () => console.log('click event');

// const onDoubleClick = () => {
//   if (document.body.style.backgroundColor !== 'yellow') {
//     document.body.style.backgroundColor = 'yellow';
//     document.body.style.color = 'black';
//   } else {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//   }
// }

// const onRightClick = () => console.log('right click event');

// const onMouseDown = () => console.log('Mouse down event');

// const onMouseUp = () => console.log('Mouse up event');

// const onMouseWheel = () => console.log('Mouse wheel event');

// const onMouseOver = () => console.log('Mouse over event');

// const onMouseOut = () => console.log('Mouse out event');

// const onDragStart = () => console.log('Drag start event');

// const onDragEnd = () => console.log('Drag End event');

// const onDrag = () => console.log('Drag event');


// //Event Listener
// logo.addEventListener('click', onClick);
// // logo.addEventListener('dblclick', onDoubleClick);
// logo.addEventListener('contextmenu', onRightClick);

// logo.addEventListener('mousedown', onMouseDown);

// logo.addEventListener('mouseup', onMouseUp);

// logo.addEventListener('mousedown', onMouseDown);


// // hover event

// logo.addEventListener('mouseover', onMouseOver);

// logo.addEventListener('mouseout', onMouseOut);

// logo.addEventListener('dragstart', onDragStart);

// logo.addEventListener('dragend', onDragEnd);

// logo.addEventListener('drag', onDrag);

// // logo.addEventListener('wheel', onMouseWheel);

// THE EVENT OBJECT
// Illustration of properties

// const logo = document.querySelector('img');

// function onClick(e) {
//   // target
//   console.log(e.target);
//   e.target.style.backgroundColor = 'black';

//   // type -> type of event
//   console.log(e.type);

//   // timeStamp
//   console.log(e.timeStamp);

//   // clientX & clientY -> relative posn of click wrt window
//   console.log(e.clientX);
//   console.log(e.clientY);

//   // offsetX & offsetY -> relative posn of click wrt element
//   console.log(e.offsetX);
//   console.log(e.offsetY);

//   // pageX & pageY -> relative posn of click wrt page
//   console.log(e.pageX);
//   console.log(e.pageY);

//   // screenX & screenY -> relative posn of click wrt screen
//   console.log(e.screenX);
//   console.log(e.screenY);
// }

// function onDrag(e) {
//   document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }

// logo.addEventListener('click', onClick);
// logo.addEventListener('drag', onDrag);
// logo.addEventListener('click', function (e) {
//   console.log(e);
// })

// // preventDefault()
// // Forbodding the actions

// document.querySelector('a').addEventListener('click', 
// function (e) {
//   e.preventDefault();

//   console.log('Link was clicked');
// });

// KeyBoard events and Key Props

// const itemInput = document.getElementById('item-input');

// const onKeyPress = (e) => {
//   console.log('keypress');
// };

// const onKeyUp = (e) => {
//   console.log('keyup');
// };

// const onKeyDown = (e) => {
//   console.log('keydown');
// };

// const onKeyDown = (e) => {
  // key
  // console.log(e.key);
  // document.querySelector('h1').innerText = e.key;

  // if (e.key === 'Enter') {
  //   alert('Are you sure want to submit the form?')
  // }

  // keycode
  // if (e.keyCode === 13) {
  //   alert('Are you sure want to submit the form?')
  // };

  // Code
  // if (e.code === 'Digit1') {
  //   console.log('You pressed 1');
  // }

//   if (e.repeat) {
//     console.log('You are holding down' + e.key);
//   }

//   console.log('Shift: ' + e.shiftKey);
//   console.log('Shift: ' + e.ctrlKey);
//   console.log('Alt: ' + e.altKey);

//   if (e.shiftKey && e.key === 'K') {
//     console.log('You hit shift + K');
//   }
// };

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
// itemInput.addEventListener('keydown', onKeyDown);