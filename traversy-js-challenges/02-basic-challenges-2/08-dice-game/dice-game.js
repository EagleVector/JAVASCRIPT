function diceGameSimulation(numSimulations) {
  const results = [];

  for (let i = 0; i < numSimulations; i++) {

    let dice1 = Math.ceil(Math.random() * 6);
		let dice2 = Math.ceil(Math.random() * 6);
		let sum = dice1 + dice2;
    let gameResult;

		if (sum === 7 || sum === 11) {
			gameResult = 'win';
		} else if (sum === 2 || sum === 3 || sum === 12) {
			gameResult = 'lose';
		} else {
			gameResult = 'roll again';
		}
    
    const result = {dice1, dice2, sum, result: gameResult};
    results.push(result);
  }
  return results;
}

module.exports = diceGameSimulation;
