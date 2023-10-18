const { Node, recDepthFirstTraversal } = require('./depth-first-traversal-recursive');

// Create a binary tree:      a
//                          /   \
//                         b     c
//                        / \    /
//                       d   e  f

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const i = new Node('i');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
f.left = g;
d.left = h;
g.right = i;

console.log(recDepthFirstTraversal(a));