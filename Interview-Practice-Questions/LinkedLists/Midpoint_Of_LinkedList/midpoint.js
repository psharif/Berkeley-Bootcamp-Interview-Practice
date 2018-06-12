const Linked = require('../linkedList.js');
const LinkedList = Linked.LinkedList;
const Node = Linked.Node;

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  /// Create two variables one that will go slow ( 1 node per iteration)
  /// One slow that goes over ( two nodes per iteration ).
  //Get the first of the list and have slow and fast point to them.
  let slow = list.head;
  let fast = list.head;
  /// While fast has two elements after what it's currently pointing to.
  while( fast.next && fast.next.next ){
    /// You can increment slow.
    slow = slow.next;
    /// You can incrment fast.
    fast = fast.next.next;
  }
  /// When there aren't any elements left to iterate over return slow.
  return slow;
}

  const l = new LinkedList();
  l.insertLast('a')
  l.insertLast('b')
  l.insertLast('c')
  console.log(midpoint(l)); // returns { data: 'b' }
