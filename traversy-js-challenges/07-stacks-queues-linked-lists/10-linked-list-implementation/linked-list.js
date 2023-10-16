class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  get(index) {
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }
    return current.data;
  }

  insertAt(index, data) {
    if (index === 0) {
      const node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

			while (i < index) {
				previous = current;
        current = current.next;
        i++;
			}
      const node = new Node(data);
      node.next = current;
      previous.next = node;
    }
  }

  removeFrom(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
    }
  }
}

// const list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(5);
// list.printAll();
// console.log(list.get(2));
// list.insert(3, 4);
// list.printAll();
// list.insertAt(4, 5);
// console.log(list.get(5));
// list.printAll();
// list.removeFrom(4);
// list.printAll();

module.exports = { Node, LinkedList };