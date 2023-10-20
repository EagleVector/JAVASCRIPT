const { Node, isValidBST } = require('./validate-bst');

// Create the binary tree:
//       8
//      / \
//     4   10
//    / \
//   2   6

const node1 = new Node(8);
const node2 = new Node(4);
const node3 = new Node(10);
const node4 = new Node(2);
const node5 = new Node(6);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(isValidBST(node1));