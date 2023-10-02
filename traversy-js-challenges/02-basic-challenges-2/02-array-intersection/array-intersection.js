function arrayIntersection(arr1, arr2) {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr.push(arr2[j])
      }
    }
  }
  return arr;
}

module.exports = arrayIntersection;
