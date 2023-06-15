const Player = function (name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function(point) {
  this.points += point;
  if (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;
  };
}

Player.prototype.describe = function() {
  console.log(this.name);
  console.log(this.points);
  console.log(this.lvl);
}
let player1 = new Player('Bob');
console.log(player1);
let player2 = new Player('Alice');
console.log(player2);

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

player1.describe();
player2.describe();