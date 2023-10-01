function titleCase(str) {
  arrStr = str.split(" ");
  for (let i = 0; i < arrStr.length; i++) {
    arrStr[i] = arrStr[i].charAt(0).toUpperCase() + arrStr[i].slice(1, arrStr[i].length);
  }
  str = arrStr.join(' ');
  
  return str;
}



module.exports = titleCase;
