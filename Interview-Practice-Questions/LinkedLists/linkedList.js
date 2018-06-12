// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  /// Constructs a Node with a data property. And a refrence to the next node.
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  /// Creates a property called Head and sets it to Null to start.
  constructor(){
    this.head = null;
  }
  insertFirst(data){
    /// Takes the Value of what is currently the head Node. (Or Null).
    /// And creates a new Node that points to the head Node.
    const headNode = new Node(data, this.head);
    /// Assign the head reference to the the newly insterted Node.
    this.head = headNode;
  }
  size(){
    /// Create a counter
    let count = 0;
    /// Assign a variable to keep track of the nodes in the list.
    /// Start with the head node.
    let node = this.head;
    /// While head or the next reference is not Null.
    while( node ){
      /// Add one to the counter
      count++;
      /// Set the node to the next node.
      node = node.next;
    }
    /// Return the count.
    return count;
  }
  /// Returns the First Node in the LinkedList.
  getFirst(){
    return this.head;
  }
  /// Returns the Last Node in the LinkedList.
  getLast(){
    /// Get a reference to the head of the LinkedList.
    let node = this.head;

    /// While the nodes.next reference does not point to null
    while ( node && node.next ){
      node = node.next;
    }
    /// Since we have met the condition we have traversed the list.
    return node;
  }
  /// Clears out the list of any Nodes.
  clear(){
    this.head = null;
  }
  removeFirst(){
    /// Declare a variable to point to the first node.
    const firstNode = this.head;
    /// If there is a first node.
    if( firstNode ){
      /// Assign the Node after the first to head.
      this.head = firstNode.next;
      /// Remove the reference from the previous first Node.
      firstNode.next = null;
    }
  }
  /// Removes the last element in a Linked List.
  removeLast(){
    /// If there isn't a first element Don't remove anything.
    if( !this.head ){
      return;
    }
    /// If there is only one element in the list.
    /// Set the head pointer to Null to set it to 0 elements.
    if( !this.head.next ){
      this.head = null;
      return;
    }

    /// Set a node reference to point to the second Node.
    let node = this.head.next;
    /// Set a previous reference to point to the first Node.
    let previous = this.head;
    /// While the node.next is Not Null.
    while( node.next ){
      /// Set the previous reference to node.
      previous = node;
      /// Set the node to the next Node.
      node = node.next;
    }
    /// Set the previous reference to Null.
    previous.next = null;
  }
  ///Inserts an element at the end of a linkedList.
  insertLast(data){
    /// Gets the last node in the LinkedList.
    const lastNode = this.getLast();
    /// If there is a lastNode
    if( lastNode ){
      /// Set the next pointer of the previous last node to the newly created Node.
      lastNode.next = new Node(data);
    }else{
      /// Otherwise the Only Node in the list will be inserted.
      this.head = new Node(data);
    }
  }
  /// Gets an element at a given index.
  getAt(index){
    /// Sets a reference to Head.
    let node = this.head;
    /// Sets a count to check against the desired index.
    let count = 0;
    /// While there is a node remaining to check in the list.
    while( node ){
      /// If you have reached the desired index return the node.
      if( count == index){
        return node;
      }
      /// otherwise increment count and go to the next node.
      count++;
      node = node.next;
    }
    /// Return null if it the desired index is not in the list.
    /// Or there aren't any nodes in the list.
    return null;
  }
  /// Removes an element of a given index.
  removeAt( index ){
    /// If the linkedList is empty, don't go any further.
    if( !this.head ){
      return;
    }
    /// If the desired index to be removed is the first node.
    if( index === 0 ){
      /// Set the head to the second Node.
      this.head = this.head.next;
      return;
    }
    ///Get the element before the desired index.
    let previous = this.getAt(index - 1);
    /// If getAt() does not return a node
    /// or if the next node after previous is null,
    /// don't go any further. We can't remove the desired index.
    if( !previous || !previous.next ){
        return;
    }
    /// Otherwise set the next reference of the previous node to the.
    /// Node after the one being removed.
    previous.next = previous.next.next;
  }
  ///Inserts an element at a given index.
  insertAt( data, index ){
    /// If the the list is empty
    if( !this.head ){
      /// Create a new element and have head reference it.
      this.head = new Node(data);
    }
    /// If we want to insert an element at the first index.
    if( index == 0){
      /// Create an element and point the new element to the previous first element.
      this.head = new Node(data, this.head);
      return;
    }
    /// Find the previous element of the linked list.
    /// If the desired index is out of bounds, then get the last element.
    const previous = this.getAt( index - 1 ) || this.getLast();
    /// Create a new Node that will point to the previous next node.
    const node = new Node(data, previous.next);
    /// Previous node will now reference the current node.
    previous.next = node;
  }
  ///Creates a forEach Loop for the linkedList
  forEach( func ){
    /// Start the linkedList at the Head.
    let node = this.head;
    /// Create a count variable to go the length of the list.
    let count = 0;
    /// While the nodes aren't null.
    while( node ){
      /// Call the function on the node. Passing in count.
      func( node, count );
      /// Increment Count.
      count++;
      /// Go to the next node.
      node = node.next;
    }
  }
  /// Create a Generator with an iterator.
  *[Symbol.iterator]() {
    /// Start the loop at the first element in the linked list.
    let node = this.head;
    /// While node isn't null.
    while (node) {
      /// Use yield to yield the value.
      yield node;
      /// Go to the next node.
      node = node.next;
    }
  }
}


module.exports = {LinkedList, Node};
