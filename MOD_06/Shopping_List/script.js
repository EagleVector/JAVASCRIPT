// // DOCUMENT ELEMENT PROPERTIES

// let output;

// // Deprecated now -> Not recommended to use.
// output = document.all;
// // Returns an array

// console.log(output.length);
// output = document.documentElement;

// output = document.head;
// output = document.body;

// output = document.head.children;
// output = document.body.children;

// output = document.doctype;
// output = document.contentType;
// output = document.URL;
// output = document.characterSet;

// output = document.forms;
// output = document.forms[0].id;
// output = document.forms[0].method;
// output = document.forms[0].action;

// // document.forms[0].id = 'new-id';
// output = document.forms[0].id;

// // output = document.links;
// // output = document.links[0].href;
// // document.links[0].id = "link-id";
// // output = document.links[0].id;

// output = document.images;
// output = document.images[0].src;

// const forms = Array.from(document.forms);
// forms.forEach((form) => console.log(form));

// console.log(output);

// // DOM SELECTORS
// // Selecting single elements on the page

// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('item-list').className);

// // GET ATTRIBUTES
// console.log(document.getElementById('item-list').getAttribute('id'));

// // SET ATTRIBUTES

// document.getElementById('app-title').title = 'Shopping';

// document.getElementById('app-title').setAttribute('class', 'title');

// // Display elements in the console

// const title = document.getElementById('app-title');

// // Get/ Change content

// console.log(title.textContent);
// title.textContent = 'Shopping Cart';
// title.innerText = 'Shopping List';
// title.innerHTML = '<strong>Shopping List</strong>'

// // Change styles

// title.style.color = 'white';
// title.style.backgroundColor = 'black';
// title.style.fontFamily = 'Times New Roman';
// title.style.padding = '10px';
// title.style.borderRadius = '10px';

// // Query Selectors

// console.log(document.querySelector('h1'));
// console.log(document.querySelector('#app-title'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('input[type="text"]'));

// console.log(document.querySelector('li:nth-child(2)').innerText);

// const item = document.querySelector('li:nth-child(2)');
// console.log(item.innerText = 'Orange');
// item.style.color = 'red';

// // Use these methods on other items

// const list = document.querySelector('ul');
// console.log(list);
// const fitem = list.querySelector('li');
// fitem.style.color = 'blue';

// Selecting multiple elements
// querySelectorAll()

// const listItems = document.querySelectorAll('li')
// console.log(listItems[1].innerText);

// listItems[0].style.color = 'red';

// listItems.style.color = 'red';

// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index == 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = ` Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// })

const listItems2 = document.getElementsByClassName('items');
console.log(listItems2);

console.log(listItems2.innerText);