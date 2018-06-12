// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  /// Creates an instance of the class and makes a variable
  /// of an array.
  constructor(){
    this.data = [];
  }
  /// If the Enqueue or (add) is called add an element to front of the Queue.
  /// We are using unshift on the array for this functionality
  add(record){
    this.data.unshift(record);
  }
  /// If the Dequeue or (remove) is called remove an element to front of the Queue.
  /// We are using pop on the array for this functionality then we return the element.
  remove(record){
    return this.data.pop(record);
  }
  /// Returns what the first element in a queue is.
  peek(){
    return this.arr[0];
  }
  /// Returns if a queue is empty
  isEmpty(){
    return this.arr.length === 0;
  }
  /// Prints the values in a Queue.
  print(){
    console.log(this.arr);
  }
}

///Tests to see if the Queue is working.
const testQueue = new Queue();
testQueue.add(87);
testQueue.add(16);
testQueue.add(8);
testQueue.add(80);
testQueue.print();
testQueue.remove();
testQueue.remove();
testQueue.print();
console.log(testQueue.isEmpty());
console.log(testQueue.peek());
