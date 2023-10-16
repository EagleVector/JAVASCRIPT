const Stack = require('./stack');

function reverseStringStack(str) {
  const stack = new Stack();
  let revStr = '';

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (!stack.isEmpty()) {
    revStr = revStr + stack.pop();
  }

  return revStr;
}

module.exports = reverseStringStack;