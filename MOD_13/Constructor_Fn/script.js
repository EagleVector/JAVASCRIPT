// Creating Multiple instances of the same object

function Rectangle(name, width, height) {
  // Hardcoding the values
  // this.name = 'Rectangle 1';
  // this.width = 15;
  // this.height = 6;

  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.height * this.width;
  }
 }

const rect1 = new Rectangle('rect1', 12, 8);
console.log(rect1.width);
console.log(rect1.area());
console.log(rect1.name);

const rect2 = new Rectangle('rect2', 15, 12);
console.log(rect2.area());
console.log(rect2.height);

// 1. A new empty object is created.
// 2. The constructor function is called with the arguments that we passed in.
// 3. The `this` keyword is set to the new empty object.
// 4. The new object is returned from the constructor function.

console.log(rect1);
console.log(rect2);

console.log(rect1.constructor);
console.log(rect1 instanceof Rectangle);