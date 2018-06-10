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
  /// Removes the First Node in a LinkedList.
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
}
