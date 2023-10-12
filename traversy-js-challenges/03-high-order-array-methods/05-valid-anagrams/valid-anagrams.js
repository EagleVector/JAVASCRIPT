function validAnagrams(str1, str2) {
  const arrStr1 = str1.split('');
  const arrStr2 = str2.split('');

  const freqChar1 = {};
  const freqChar2 = {};

  arrStr1.forEach(char => {
    if (freqChar1[char]) {
      freqChar1[char]++;
    } else {
      freqChar1[char] = 1;
    }
  });
  
  arrStr2.forEach(char => {
    if (freqChar2[char]) {
      freqChar2[char]++;
    } else {
      freqChar2[char] = 1;
    }
  });
  
  const freqCharKeys1 = Object.keys(freqChar1).sort();
  const freqCharKeys2 = Object.keys(freqChar2).sort();

  if (freqCharKeys1.length !== freqCharKeys2.length) {
    return false;
  } else {
    const areEqual = freqCharKeys1.every((key, index) => {
    const freqCharValue1 = freqChar1[key];
    const freqCharValue2 = freqChar2[freqCharKeys2[index]];
    return freqCharValue1 === freqCharValue2;
  });
  if (areEqual) {
    return true;
  } else {
    return false;
  }
}
}

module.exports = validAnagrams;
