// Create DOM elements in JS
// This will create a node

const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-elem';
div.setAttribute('title', 'My element');

// div.innerText = "Hello World!";

const text = document.createTextNode('Hello World!');
div.appendChild(text);

// document.body.appendChild(div);

// document.querySelector('ul').appendChild(div);

// InnerHTML vs CreateElement()

// Quick and Dirty -> Using InnerHTML

function createListItem(item) {
  const li = document.createElement('li');

  li.innerHTML = `${item}
  <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
  </button>`;
  console.log(li.innerHTML);

  document.querySelector('.items').appendChild(li);
}

// Clean and Performant -> More Readable

// function createNewItem(item) {
//   const li = document.createElement('li');
//   li.appendChild(document.createTextNode(item));

//   const button = document.createElement('button');
//   button.className = 'remove-item btn-link text-red';

//   const icon = document.createElement('icon');
//   icon.className = 'fa-solid fa-xmark';

//   button.appendChild(icon);
//   li.appendChild(button);

//   console.log(li.innerHTML);

//   document.querySelector('.items').appendChild(li);
// }

createListItem('Eggs');
// createNewItem('Cheese');

// Making it more re-usable

function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red')

  li.appendChild(button);

  console.log(li.innerHTML);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('icon');
  icon.className = classes;
  return icon;
}

createNewItem('Cheese');

// INSERTING ELEMENTS, TEXT & HTML apart from appendChild technique

// InsertAdjacentElement Example
function insertElement() {
  const filter = document.querySelector('.filter');

  const h1 = document.createElement('h1');
  h1.textContent = 'InsertAdjacentElement';
  filter.insertAdjacentElement('afterend', h1);
}

// InsertAdjacentText Example
function insertText() {
  const item = document.querySelector('li:nth-child(2)');

  item.insertAdjacentText('afterend', 'InsertAdjacentText');
}


// InsertAdjacentHTML Example
function insertHTML() {
  const clrbtn = document.querySelector('#clear');

  clrbtn.insertAdjacentHTML('beforebegin', '<h2>Great Job</h2>');
}

// insertBerfore Example

function insertBefore() {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  li.textContent = 'Chiku';

  const thirdItem = document.querySelector('li:nth-child(3)');

  ul.insertBefore(li, thirdItem);
}

/* 
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/

insertElement();
insertText();
insertHTML();
insertBefore();

// Creating Custom insertAfter

function insertAfter(newElement, existingEle) {
  existingEle.parentElement.insertBefore(newElement, existingEle.nextSibling);
}


// New element to insert
const li = document.createElement('li');
li.textContent = 'Guava';

// Existing element to insert after
const fitem = document.querySelector('li:first-child');

// Calling
insertAfter(li, fitem);

// Replace Elements

function replacefirstitem() {
  const firstItem = document.querySelector('li');
  
  const li = document.createElement('li');
  li.textContent = 'Replaced item';

  firstItem.replaceWith(li);

}

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  
  secondItem.outerHTML = '<li>Replaced Second</li>';

}

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  // lis.forEach((item, index) => {
  //   if (index === 2) {
  //     item.outerHTML = '<li>Replaced third item</li>';
  //   } else {
  //     item.outerHTML = '<li>Replaced</li>';
  //   }
  // })

// Ternary Op

  // lis.forEach((item, index) => (index === 2) ? item.outerHTML = '<li>Replaced third item</li>' : item.outerHTML = '<li>Replaced</li>')
  lis.forEach(
    (item, index) => 
      (item.outerHTML = index == 2 ? '<li>Third item Replaced</li>' : 
      '<li>Replaced</li>')
  )
}

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Grocerry-List';
  h2.style.color = 'orange';
  header.replaceChild(h2, h1);
}

replacefirstitem();
replaceSecondItem();
replaceAllItems();
replaceChildHeading();

// Remove Elements

function removeClearButton() {
  document.querySelector('#clear');
}

// REMOVE ELEMENTS

function removeClearButton() {
  const clearBtn = document.querySelector('#clear');
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:first-child');

  ul.removeChild(li);
}

// function removeItem(itemNo) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector(`li:nth-child(${itemNo})`);

//   ul.removeChild(li);
// }

// function removeItem(itemNo) {
//   const ul = document.querySelector('ul');
//   const li = document.querySelectorAll('li')[itemNo - 1];

//   ul.removeChild(li);
// }

// function removeItem(itemNo) {
//   const li = document.querySelectorAll('li');
//   li[itemNo - 1].remove();
// }

const removeItem = (itemNo) => 
document.querySelectorAll('li')[itemNo - 1].remove();



removeClearButton();
removeFirstItem();
removeItem(2);

