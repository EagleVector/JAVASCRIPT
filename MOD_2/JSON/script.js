const post = {
  title: "Post One",
  body: "This is the body"
};

// Convert JSON to string

const str = JSON.stringify(post);

console.log(str);

// Parse JSON. After parsing we can obtain the data specific

const obj = JSON.parse(str);

console.log(obj);
console.log(obj.title);

const arr = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body'
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body'
  },
  {
    id: 3,
    title: 'Post Three',
    body: 'This is the body'
  }
];

// Convert JSON to string

const strn = JSON.stringify(arr);

console.log(strn);

const library =  [
  {
    title: 'The Subtle art of not giving a f**k',
    author: 'Mark Manson',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Ignited Minds',
    author: 'Dr. APJ Abdul Kalam',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
]

console.log(library);


library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
library[3].status.read = true;

console.log(library);

// Destructure

const { title: firstBook } = library[0];
console.log(firstBook);
console.log(library);

const jfy = JSON.stringify(library);
console.log(jfy);