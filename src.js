/*

Queue.js

A function to represent a queue

Created by Stephen Morley - http://code.stephenmorley.org/ - and released under
the terms of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/
/* Creates a new queue. A queue is a first-in-first-out (FIFO) data structure -
 * items are added to the end of the queue and removed from the front.
 */
module.exports = function() {

    // initialise the queue and offset
    var queue = [];
    var offset = 0;
    var out = {};

    Object.defineProperties(out, {
        'empty': {
            get: function() {
                return queue.length == 0;
            }
        },
        'length': {
            get: function() {
                return queue.length - offset;
            }
        }
    });

    /* Enqueues the specified item. The parameter is:
     *
     * item - the item to enqueue
     */
    out.enqueue = function(item) {
        queue.push(item);
    }

    /* Dequeues an item and returns it. If the queue is empty, the value
     * 'undefined' is returned.
     */
    out.dequeue = function() {

        // if the queue is empty, return immediately
        if (queue.length == 0) return undefined;

        var item = queue[offset];
        
        // increment the offset and remove the free space if necessary
        if (offset++ * 2 >= queue.length) {
            queue.splice(0, offset);
            offset = 0;
        }

        // return the dequeued item
        return item;

    }

    /* Returns the item at the front of the queue (without dequeuing it). If the
     * queue is empty then undefined is returned.
     */
    out.peek = function() {
        return (queue.length > 0 ? queue[offset] : undefined);
    }
    
    return out;
}