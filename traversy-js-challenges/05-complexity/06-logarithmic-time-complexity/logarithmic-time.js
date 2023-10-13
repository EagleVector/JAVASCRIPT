/*
Logarithmic Time (O(log n))

Logarithmic time means that the time required to complete a function is proportional to the logarithm of the input data set. 

*/

function findPower(base, exponent) {
	if (exponent === 0) {
		return 1;
	}

	if (exponent % 2 === 0) {
		const halfPower = findPower(base, exponent / 2);
		return halfPower * halfPower;
	} else {
		const halfPower = findPower(base, (exponent - 1) / 2);
		return base * halfPower * halfPower;
	}
}

console.time('Linear Power 1');
console.log(findPower(2, 10));
console.timeEnd('Linear Power 1');

console.time('Linear Power 2');
console.log(findPower(2, 100));
console.timeEnd('Linear Power 2');

console.time('Linear Power 2');
console.log(findPower(2, 1000));
console.timeEnd('Linear Power 2');

