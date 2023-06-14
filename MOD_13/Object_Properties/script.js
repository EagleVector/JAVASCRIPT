function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rectangle('rectangle1', 12, 8);
const rect2 = new Rectangle('rectangle2', 15, 6);

console.log(rect1.name, rect2.height);
console.log(rect2['width'], rect1.area());

// Add property
rect1.color = 'blue';

// Add method
rect2.perimeter = function () {
  return 2 * (rect2.height + rect2.width);
};

console.log(rect2.perimeter());

console.log(rect2);

// delete property/method
delete rect2.perimeter;

console.log(rect2);

// Check for property
console.log(rect2.hasOwnProperty('color'));
console.log(rect1.hasOwnProperty('color'));

// Get Keys
console.log(Object.keys(rect1));

// Get Values
console.log(Object.values(rect1));

// Get entries
console.log(Object.entries(rect2));

// Accessing the object
for (let [key, value] of Object.entries(rect1)) {
  if (typeof value !== 'function') {
    console.log(`${key} - ${value}`);
  }
}