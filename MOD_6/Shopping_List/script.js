// DOCUMENT ELEMENT PROPERTIES

let output;

// Deprecated now -> Not recommended to use.
output = document.all;
// Returns an array

console.log(output.length);
output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.contentType;
output = document.URL;
output = document.characterSet;

output = document.forms;
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = 'new-id';
output = document.forms[0].id;

// output = document.links;
// output = document.links[0].href;
// document.links[0].id = "link-id";
// output = document.links[0].id;

output = document.images;
output = document.images[0].src;

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
console.log(output);

// DOM SELECTORS