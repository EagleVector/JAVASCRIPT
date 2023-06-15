const Player = function (name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function(point) {
  if (point <= 10 && point >= 1) {
    this.points += point;
    if (this.points >= 10) {
      this.lvl += 1;
      this.points -= 10;
    };
  } else {
    return;
  }
}

Player.prototype.describe = function() {
  return `Name: ${this.name} \n Level: ${this.lvl} \n Points: ${this.points}`;
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
player2.gainXp(14);

console.log(player1.describe());
console.log(player2.describe());