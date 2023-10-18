const Queue = require('./queue');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function breadthFirstTraversal(root) {

  const queue = new Queue();
  
  if (!root) {
    return [];
  }

  const result = [];
  // const queue = [];

  // queue.push(root);
  queue.enqueue(root);

  // while (queue.length > 0) {
  //   const current = queue.shift();
  //   result.push(current.data);
  while (!queue.isEmpty()) {
    const current = queue.dequeue();
    result.push(current.data);
    
    if (current.left) {
      // queue.push(current.left);
      queue.enqueue(current.left);
    }

    if (current.right) {
      // queue.push(current.right);
      queue.enqueue(current.right);
    }
  }
  return result;
}

module.exports = {
  Node,
  breadthFirstTraversal,
};
