const L = require('../linkedList.js');
const LinkedList = L.LinkedList;
const Node = L.Node;

// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

///Checks if a LinkedList is ciruclar meaning the tail does not point to null.
function circular(list) {
/// Create two references to the first node.
let fast = list.head;
let slow = list.head;
  /// While the fast reference has two nodes in front of it.
  while( fast.next && fast.next.next ){
    /// Increment the slow reference by 1. 
    slow = slow.next;
    /// Increment the fast reference by 2.
    fast = fast.next.next;
    /// If the two references point to the same node.
    if( fast === slow ){
      /// Then the list is circular return true.
      return true;
    }
  }
  /// If one of the nodes is pointing to null the return false.
  return false;
}

const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log('The linked List is ', l);
console.log(circular(l)); // true
