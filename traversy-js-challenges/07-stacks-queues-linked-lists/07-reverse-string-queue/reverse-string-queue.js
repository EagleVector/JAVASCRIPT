const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
  const queue = new Queue();
  let revStr = '';

  for (char of str) {
    queue.enqueue(char);
  }

  while (!queue.isEmpty()) {
    revStr = queue.dequeue() + revStr;
  }

  return revStr;
};

module.exports = reverseStringWithQueue;
