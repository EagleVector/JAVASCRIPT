function removeDuplicates(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        delete arr[j];
      }
    }
  }
  let newArr = [];

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] !== undefined) {
      newArr.push(arr[k]);
    }
  }

  return newArr;
}

module.exports = removeDuplicates;
