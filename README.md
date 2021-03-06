# qv2
A slightly modified [Queue.js](http://code.stephenmorley.org/javascript/queues/) (originally written by Stephen Morley under CC0 1.0 Universal).

Not really too much to see here, just a few improvements and things.

Here's an example of it in use:

```javascript
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
```

[Here](http://code.stephenmorley.org/javascript/queues/) is the link to the original file.

This, like the original, is licensed under the CC0 1.0 license. You can read it in the 'LICENSE' file in the directory.