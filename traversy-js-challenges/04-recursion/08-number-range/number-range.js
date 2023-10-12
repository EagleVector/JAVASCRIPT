function numberRange(startNum, endNum) {
  const Output = [];
  if (startNum === endNum) {
    Output.push(endNum);
    return Output;
  }
  Output.push(startNum);
  return Output.concat(numberRange(startNum + 1, endNum));
}

module.exports = numberRange;
