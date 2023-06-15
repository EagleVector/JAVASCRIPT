// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
//   this.area = function () {
//     return this.height * this.width;
//   };
// }

// const rect = new Rectangle('rectangle 1', 12, 9);
// console.log(rect.area());
// console.log(rect);

// function Rectangle(name, width, height) {

//   this.name = name;
//   this.width = width;
//   this.height = height;

// }

// area is a common method for all rectangle. we can add this to the prototype chain

// Rectangle.prototype.area = function () {
//   return this.height * this.width;
// }

// Rectangle.prototype.perimeter = function () {
//   return 2 * (this.height + this.width);
// }

// Rectangle.prototype.isSquare = function () {
//   return (this.width === this.height);
// }

// Rectangle.prototype.changeName = function (newName) {
//   return (this.name = newName);
// }

// const rect = new Rectangle('rectangle 1', 12, 9);
// const rect2 = new Rectangle('rectangle 2', 30, 40);

// console.log(rect);
// console.log(rect.area());
// console.log(rect.perimeter());
// console.log(rect.isSquare());
// console.log(rect.changeName('test x'));
// console.log(rect2.area());
// console.log(rect2.perimeter());
// console.log(rect2.isSquare());
// console.log(rect2.changeName('test y'));

// const rectanglePrototypes = {
//   area: function() {
//     return this.width * this.height;
//   },
//   perimeter: function() {
//     return 2 * (this.width + this.height);
//   },
//   isSquare: function() {
//     return (this.width === this.height);
//   }
// }

// function createRectangle(height, width) {
//   return Object.create(rectanglePrototypes, {
//     height: {
//       value: height,
//     },
//     width: {
//       value: width,
//     },
//   })
// }

// const rect = createRectangle(10, 20);
// console.log(rect);
// console.log(rect.area());
// console.log(rect.isSquare());

// const rect2 = createRectangle(20, 20);
// console.log(rect2.isSquare());
// console.log(rect2.perimeter());

// Prototypical Inheritance & call()

function Shape(name) {
  this.name = name;
}

Shape.prototype.logName = function () {
  console.log(`Shape Name: ${this.name}`);
}

function Rectangle(name, height, width) {
  Shape.call(this, name);

  this.height = height;
  this.width = width;
}

//Inherits Shape prototype
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.logName = function () {
  console.log(`Rectangle Name: ${this.name}`);
}

function Circle(name, radius) {
  Shape.call(this, name);

  this.radius = radius;
}

//Inherits Shape prototype
Circle.prototype = Object.create(Shape.prototype);

//Set prototype constructors
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 20);
const cir = new Circle('Circle 1', 12);
rect.logName();
cir.logName();
console.log(rect, cir);
console.log(rect.constructor);

