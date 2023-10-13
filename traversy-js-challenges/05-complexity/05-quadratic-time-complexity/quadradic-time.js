/*
Quadradic Time O(n^2)

Quadradic time means that the time required to complete a function is proportional to the square of the input data set.
*/

function quadSum(arr) {
  let sum1 = 0;
  let sum2 = 1;
  for (let i = 0; i < arr.length; i++) {
    sum1 = sum1 + arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum2 = sum2 + arr[j];
    }
  }
  return sum1 + sum2;
}

const arr1 = [1, 2, 3, 4, 5];

console.time('Sum Array 1');
quadSum(arr1);
console.timeEnd('Sum Array 1');

const arr2 = Array.from({ length: 100 }, (_, index) => index + 1);

console.time('Sum Array 2');
quadSum(arr2);
console.timeEnd('Sum Array 2');

const arr3 = Array.from({ length: 10000 }, (_, index) => index + 1);

console.time('Sum Array 3');
quadSum(arr3);
console.timeEnd('Sum Array 3');
