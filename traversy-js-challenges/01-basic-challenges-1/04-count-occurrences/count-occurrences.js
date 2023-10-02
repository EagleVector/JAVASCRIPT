// function countOccurrences(str, char) {
  // let number = 0;
  // for (i = 0; i < str.length; i++) {
  //   if (str[i] === char) {
  //     number++;
  //   }
  // } 
  // return number;

// }

const countOccurrences = (str, char) => str.split(char).length - 1;

module.exports = countOccurrences;
