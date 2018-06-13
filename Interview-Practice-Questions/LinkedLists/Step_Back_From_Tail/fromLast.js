const L = require('../linkedList.js');
const LinkedList = L.LinkedList;
const Node = L.Node;

// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  /// Create two variables that point to the start of the list.
  let slow = list.head;
  let fast = list.head;
  ///Move fast n so start from n and move down n spaces.
  while ( n > 0 ){
    fast = fast.next;
    n--;
  }
  /// While fast has a node that comes after it.
  while( fast.next ){
    /// Move fast forward and slow forward.
    fast = fast.next;
    slow = slow.next;
  }
  // Return slow.
  return slow;
}

///Creates a list and returns the data of the node 2 back from the end. 
const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
console.log(fromLast(list, 2).data); // 'b'
