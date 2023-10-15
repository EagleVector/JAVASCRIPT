function symmetricDifference(arr1, arr2) {
  const set1 = new Set();
  const set2 = new Set();
  const result = new Set();

  for (item of arr1) {
    set1.add(item);
  }

  for (item of arr2) {
    set2.add(item);
  }

  for (item of set1) {
    if (set2.has(item)) {
      continue;
    }
    result.add(item);
  }

  for (item of set2) {
		if (set1.has(item)) {
			continue;
		}
		result.add(item);
	}
  const resultArr = Array.from(result);
  return resultArr;
}

module.exports = symmetricDifference;
