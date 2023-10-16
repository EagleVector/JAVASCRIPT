const Stack = require('./stack');

function balancedParenthesis(str) {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(str[i]);
    }
    else if (str[i] === ')') {
      if (stack.peek() !== '(') {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.isEmpty()) {
    return true;
  }
  return false;
}

module.exports = balancedParenthesis;
