// Defining class

// class Rectangle {
//   constructor(name, height, width) {
//     this.name = name;
//     this.height = height;
//     this.width = width;
//   }

//   area () {
//     return this.height * this.width;
//   }

//   perimeter() {
//     return 2 * (this.width + this.height);
//   }

//   isSquare() {
//     return (this.height === this.width);
//   }

//   logArea() {
//     console.log('Rectangle Area: ' + this.area());
//   }
// }

// const square = new Rectangle('Square', 20, 20);
// console.log(square.area());
// console.log(square.perimeter());
// console.log(square.isSquare());
// square.logArea();

// console.log(square);
// console.log(Object.getPrototypeOf(square));

// Defining class Inheritance

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }

//   logName() {
//     console.log('Shape Name: ' + this.name);
//   }
// }

// // Sub class
// class Rectangle extends Shape {
//   constructor(name, width, height) {
//     super(name);

//     this.width = width;
//     this.height = height;
//   }
// }

// class Circle extends Shape {
//   constructor(name, radius) {
//     super(name);

//     this.radius = radius;
//   }

//   logName() {
//     console.log('Circle Name: ' + this.name);
//   }
// }

// const rect = new Rectangle('Rect 1', 15, 4);
// const cir = new Circle('circle 1', 12);

// console.log(rect);
// console.log(cir);
// rect.logName();
// cir.logName();

// console.log(rect instanceof Rectangle);
// console.log(rect instanceof Shape);

// Static Methods
// Methods that can be called directly via class
// Methods inside the class that cannot be accessed by class objects. 

// class Rectangle {
//   constructor(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//   }

  // Normal Method

  // area() {
  //   return this.width * this.height;
  // }

  // Static Method

//   static getClass() {
//     return 'Rectangle';
//   }
// }

// const rect = new Rectangle('Rect 1', 16, 9);
// console.log(rect.getClass());
// console.log(rect.area());
// console.log(Rectangle.getClass());

// bind() & this keyword (dynamic)

// class App {
//   constructor() {
//     this.serverName = 'localhost';

//     document.querySelector('button').addEventListener('click', this.getServerName.bind(this))
//   }

//   getServerName() {
//     console.log(this.serverName);
//   }
// }

// const app = new App();


// Getters & Setters with Classes

// class Person {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   get firstName() {
//     return this.capitalizeFirst(this._firstName);
//   }

//   set firstName(value) {
//     this._firstName = this.capitalizeFirst(value);
//   }

//   get lastName() {
//     return this.capitalizeFirst(this._lastName);
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set lastName(value) {
//     this._lastName = this.capitalizeFirst(value);
//   }

//   capitalizeFirst(value) {
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   }
// }

// const person1 = new Person('john', 'doe');
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);

// person1.firstName = 'joe';
// person1.lastName = 'smith';
// console.log(person1);
// console.log(person1.fullName);

// Getters and Setters within constructor functions

// function Person(firstName, lastName) {
//   this._firstName = firstName;
//   this._lastName = lastName;

//   Object.defineProperty(this, 'firstName', {
//     get: function () {
//       return this.capitalizeFirst(this._firstName);
//     },
//     set: function (value) {
//       this._firstName = value;
//     }
//   });

//   Object.defineProperty(this, 'lastName', {
//     get: function () {
//       return this.capitalizeFirst(this._lastName);
//     },
//     set: function (value) {
//       this._lastName = value;
//     }
//   });

//   Object.defineProperty(this, 'fullName', {
//     get: function () {
//       return this.firstName + ' ' + this.lastName;
//     }
//   });
// }

// Person.prototype.capitalizeFirst = function (value) {
//   return value.charAt(0).toUpperCase() + value.slice(1);
// }


// // Object Literal
// const PersonObj = {
//   _firstName: 'jane',
//   _lastName: 'doe',

//   get firstName() {
//     return Person.prototype.capitalizeFirst(this._firstName)
//   },

//   set firstName(value) {
//     this._firstname = value;
//   },

//   get lastName() {
//     return Person.prototype.capitalizeFirst(this._lastName)
//   },

//   set lastName(value) {
//     this._lastname = value;
//   },

//   get fullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// const person1 = new Person('dev', 'cherry');
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);

// const person2 = Object.create(PersonObj);
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.fullName);

// Private Properties Convention

// class Wallet {
//   constructor() {
//     this._balance = 0;
//     this._transactions = [];
//   }

//   deposit(amount) {
//     this._balance += amount;
//     this._processDeposit(amount);
//   }

//   _processDeposit(amount) {
//     console.log(`Depositing ${amount}`);

//     this._transactions.push({
//       type: 'deposit',
//       amount
//     });
//   }

//   withdraw(amount) {
//     if (amount > this._balance) {
//       console.log('Not Enough Balance');
//       return;
//     }

//     this._processWithdraw(amount);
//     this._balance -= amount;
//   }

//   _processWithdraw(amount) {
//     console.log(`WithDrawing ${amount}`);

//     this._transactions.push({
//       type: 'withdraw',
//       amount
//     });
//   }

//   get balance() {
//     return this._balance;
//   }

//   get transactions() {
//     return this._transactions;
//   }
// }

// const wallet = new Wallet();
// wallet.deposit(300);
// wallet.withdraw(50);
// console.log(wallet.balance);
// console.log(wallet.transactions);

// Private Class Fields

// class Wallet {
//   #balance = 0;
//   #transactions = [];

//   deposit(amount) {
//     this.#processDeposit(amount);
//     this.#balance += amount;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log('Not Enough Funds');
//       return;
//     }

//     this.#processWithdraw(amount);
//     this.#balance -= amount;

//   }

//   #processDeposit(amount) {
//     console.log(`Depositing ${amount}`);

//     this.#transactions.push({
//       type: 'deposit',
//       amount
//     });
//   }

//   #processWithdraw(amount) {
//     console.log(`Withdrawing ${amount}`);

//     this.#transactions.push({
//       type: 'withdrawing',
//       amount
//     });
//   }

//   get balance() {
//     return this.#balance
//   }

//   get transactions () {
//     return this.#transactions;
//   }
// }

// const wallet = new Wallet();
// wallet.deposit(900);
// wallet.withdraw(750);
// console.log(wallet.balance);
// console.log(wallet.transactions);

// Property Flags and Descriptors - Control over properties and methods

// Math.PI = 4;
// console.log(Math.PI);

// let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descriptor);

// const rectObj = {
//   name: 'Rectangle 1',
//   width: 10,
//   height: 6
// };

// let descr = Object.getOwnPropertyDescriptor(rectObj, 'name');
// console.log(descr);

// Object.defineProperty(rectObj, 'name', {
//   writable: false,
//   configurable: false,
//   enumerable: false
// });

// let desc = Object.getOwnPropertyDescriptor(rectObj, 'name');
// console.log(desc);

// rectObj.name = 'New Rect';
// delete rectObj.name;
// console.log(rectObj);

// for(let [key, value] of Object.entries(rectObj)) {
//   console.log(`${key}: ${value}`);
// }

// console.log(Object.getOwnPropertyDescriptors(rectObj));

// Sealing - Prevents properties from being added or removed. Can still be changed.

// Freezing - Prevents properties from being added, removed or changed.

// const rectObj = {
//   name: 'Rectangle 1',
//   width: 18,
//   height: 9
// };

// const cirObj = {
//   name: 'Circle 1',
//   radius: 7
// };

// console.log(Object.getOwnPropertyDescriptors(rectObj));
// Object.seal(rectObj);
// console.log(rectObj);
// rectObj.color = 'blue';
// rectObj.name = 'New Rectangle';
// for(let [key, value] of Object.entries(rectObj)) {
//   console.log(`${key}: ${value}`);
// }
// console.log(rectObj);

// console.log(Object.getOwnPropertyDescriptors(rectObj));

// console.log(Object.getOwnPropertyDescriptors(cirObj));
// Object.freeze(cirObj);
// console.log(cirObj);
// cirObj.color = 'blue';
// cirObj.name = 'New Circle';
// for(let [key, value] of Object.entries(cirObj)) {
//   console.log(`${key}: ${value}`);
// }
// console.log(cirObj);
// console.log(Object.getOwnPropertyDescriptors(cirObj));