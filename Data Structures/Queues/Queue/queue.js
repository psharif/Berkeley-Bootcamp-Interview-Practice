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

}
