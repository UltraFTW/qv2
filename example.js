var Queue = require('qv2');
var testQueue = new Queue();

console.log(testQueue.empty); // prints: true

// .enqueue moves the argument to the back of the queue
testQueue.enqueue(1);
testQueue.enqueue(2);
testQueue.enqueue(3);

// queue.length returns the length
console.log(testQueue.length); // prints: 3

// .dequeue dequeues the frontmost element
console.log(testQueue.dequeue()); // prints: 1

// .peek returns the frontmost element without dequeuing it
console.log(testQueue.peek()); // prints: 2

console.log(testQueue.dequeue()); // prints: 2
console.log(testQueue.dequeue()); // prints: 3
console.log(testQueue.length); // prints: 0

// .dequeue returns undefined when the queue is empty
console.log(testQueue.dequeue() == undefined); // prints: true