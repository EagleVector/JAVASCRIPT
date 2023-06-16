// Element Node
// Child 1, Child 2, Child 3 are the siblings nodes.
// Get Child element

// const parent = document.querySelector('.parent');

// Accessing the child class

// children is a property not a method
// output = parent.children;

// output = parent.children[1];
// output = parent.children[1].innerText;
// output = parent.children[1].className;
// output = parent.children[1].nodeName;

// Modifying the child class

// parent.children[1].innerText = 'Bunny';
// parent.children[1].style.color = 'green';

// parent.firstElementChild.innerText = 'Cherry';
// parent.firstElementChild.style.color = 'orange';

// parent.lastElementChild.innerText = 'Sunny';
// parent.lastElementChild.style.color = 'hotpink';

// Get parent element from child

// const child = document.querySelector('.child');
// parentElement is a property not a method
// output = child.parentElement;
// output.style.border = '1px solid';
// output.style.padding = '20px';

// Sibling Elements

// const secondItem = document.querySelector('.child:nth-child(2)');
// output = secondItem;
// secondItem.nextElementSibling.style.color = 'blue';
// secondItem.previousElementSibling.style.color = 'brown';

// console.log(output);
// console.log(parent);

// DOM Node Relationships

let output;

const parent = document.querySelector('.parent');

output = parent;

output = parent.childNodes;

// childNodes is a property not a method
// it will return nodes. The spaces in the elem are also taken in the nodes

output = parent.childNodes[3];
output = output.textContent;

output = parent.childNodes[0];
output = output.textContent;

output = parent.childNodes[3];
output = output.outerHTML;

parent.childNodes[3].innerText = 'Cherry';
parent.childNodes[5].style.color = 'orange';

output = parent.lastChild;
output = parent.firstChild;

parent.lastChild.textContent = 'Hi There!';
console.log(output);

// Parent Node

const child = document.querySelector('.child');

output = child.parentNode;

console.log(output.innerText);

output.style.border = '1px solid';
output.style.padding = '20px';
output.style.backgroundColor = '#ccc';

const secItem = document.querySelector('.child:nth-child(2)');
output = secItem.nextSibling;

console.log(output.nextSibling);
