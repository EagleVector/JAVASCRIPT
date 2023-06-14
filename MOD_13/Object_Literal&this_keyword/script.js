// Object Literals

const rectangle = {
  name: 'Rectangle 1',
  width: 10,
  height: 6,
  area: function () {
    return this.width * this.height;
  }
};

console.log(rectangle.area());

console.log(this);

function run() {
  console.log(this);
}

run();

//Limitation: We can only use the object literal once

const rectangle2 = {
  name: 'Rectangle 2',
  width: 15,
  height: 8,
  area: function () {
    return this.width * this.height;
  }
}

console.log(rectangle2.area());

