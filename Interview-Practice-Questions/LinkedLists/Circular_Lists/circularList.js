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

function circular(list) {
let fast = list.head;
let slow = list.head;

  while( fast.next && fast.next.next ){
    slow = slow.next;
    fast = fast.next.next;

    if( fast === slow ){
      return true;
    }
  }

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
