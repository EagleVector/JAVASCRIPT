const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
  const LL = new LinkedList();
  let revStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    LL.add(str[i]);
  }

  let current = LL.head;

  while (current !== null) {
    revStr = revStr + current.data;
    current = current.next;
  }
  
  return revStr;
}

module.exports = reverseStringLinkedList;
