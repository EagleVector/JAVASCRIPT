const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
  const stack = new Stack();
  const queue = new Queue();

  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (char of formattedStr) {
    stack.push(char);
    queue.enqueue(char);
  }

  while (!stack.isEmpty() && !queue.isEmpty()) {
    if (stack.pop() !== queue.dequeue()) {
      return false;
    } 
  }
  return true;
}

module.exports = isPalindromeQueueStack;
