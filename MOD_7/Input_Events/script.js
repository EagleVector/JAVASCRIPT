// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');

//Text Input/ Item Input

// function onInput(e) {
  // console.log(e.target.value);
  // heading.textContent = e.target.value;
// }

// function onChecked(e) {
  // console.log(e.target.checked);
  // const isChecked = e.target.checked;
  // heading.textContent = isChecked ? 'Recurring item added' : 'Recurring item removed';
// }
// input event is more preferrable

// function onFocus(e) {
//   console.log('Input is focussed');
//   itemInput.style.outlineStyle = 'solid';
//   itemInput.style.outlineWidth = '1px';
//   itemInput.style.outlineColor = 'green';
// }

// function onBlur(e) {
//   console.log('Input is blurred');
//   itemInput.style.outlineStyle = 'none';
// }

// itemInput.addEventListener('input', onInput);

// change event also works like input

// priorityInput.addEventListener('change', onInput);

// checkbox.addEventListener('input', onChecked);

// Most commonly used for styling

// itemInput.addEventListener('focus', onFocus);

// itemInput.addEventListener('blur', onBlur);

// FORM SUBMISSION

// const form = document.getElementById('item-form');

// function onSubmit(e) {
//   e.preventDefault();

//   const item = document.getElementById('item-input').value;
//   const priority = document.getElementById('priority-input').value;

//   if (item === '' || priority === '0') {
//     alert('Please fill in all the required fields');
//     return;
//   }

//   console.log(item, priority);
// }

// form.addEventListener('submit', onSubmit);

// // FORM OBJECT

// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   // Another way to get the necessary data
//   const item = formData.get('item');
//   const priority = formData.get('priority');
//   console.log(item, priority);

//   const entries = formData.entries();
//   // We get an iterator
//   console.log(entries);

//   for (let entry of entries) {
//     console.log(entry);
//   }
// }

// form.addEventListener('submit', onSubmit2);

// EVENT BUBBLING 
// Tree - node relationship inside the DOM travel upwards in the hierarchial order
// we use `stopPropagation()` to stop that phenomena using events

// const button = document.querySelector('form button');
// // const div = document.querySelector('form div:nth-child(2)');
// const formx = document.querySelector('form');

// // Bottom
// button.addEventListener('click', (e) => {
//   alert('Button was clicked');
//   e.stopPropagation();
// });

// // Moving Up
// // div.addEventListener('click', () => {
// //   alert('Div was clicked');
// // });

// // Moving Up
// formx.addEventListener('click', (e) => {
//   alert('Form was clicked');
//   e.stopPropagation();
// });

// // Top
// document.body.addEventListener('click', () => {
//   alert('Body was clicked');
// });

// EVENT DELEGATION & MULTIPLE EVENTS

// Deleting the items from the cart
// Method: 1 -> not so efficient

// const listItems = document.querySelectorAll('li');

// listItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// Method: 2: Event delegation

const list = document.querySelector('ul');

list.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI') {
    e.target.remove();
  }
});

list.addEventListener('mouseover', (e) => {
  if(e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});