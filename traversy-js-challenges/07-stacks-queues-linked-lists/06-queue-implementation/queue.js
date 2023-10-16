class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  getLength() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }

  enqueue(element) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = element;
    this.tail++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return false;
    }
    const item = this.queue[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.queue[this.head];
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(1);
queue.enqueue(7);
queue.enqueue(2);
queue.enqueue(9);
queue.dequeue();
queue.enqueue(3);
queue.dequeue();

module.exports = Queue;
