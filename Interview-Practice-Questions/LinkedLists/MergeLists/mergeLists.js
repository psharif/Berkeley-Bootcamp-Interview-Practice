///  You’re given the pointer to the head nodes of two sorted linked lists.
/// The data in both lists will be sorted in ascending order.
/// Change the next pointers to obtain a single,
/// merged linked list which also has data in ascending order.
// Either head pointer given may be null meaning that the corresponding list is empty.
function mergeLists(head1, head2) {
    if( !head1 || !head2){
        /// If both lists are empty return list 1
        return head1;
    }
    else if( !head1 ){
        /// If list 1 is empty return list 2
        return head2;
    }
    else if( !head2 ){
        /// If list 2 is empty return list 1
        return head1;
    }

    /// Create a new Linked List
    const mergedList = new SinglyLinkedList();
    /// Add the first node to the list.
    /// If head1's first node data is greater or equal to head2's first node data
    if(head1.data <= head2.data){
        /// Point the head of the list to head1.
        mergedList.head = head1;
        /// Increment head1
        head1 = head1.next;
    }else{
        /// Otherwise point the head of the list to head2
        mergedList.head = head2;
        /// Increment head2
        head2 = head2.next;
    }
    /// Create a reference to the head of the list.
    let node = mergedList.head;

    while(true){
        /// If the head1 becomes null
        if( !head1 ){
            /// Point the rest of the list to the the remaning nodes in head2.
            node.next = head2;
            break;
        }
         /// If the head2 becomes null
        if( !head2 ){
             /// Point the rest of the list to the the remaning nodes in head1.
            node.next = head1;
            break;
        }
         /// If head1's node data is greater or equal to head2's node data
        if( head1.data <= head2.data ){
            /// Point the node.next to head1
            node.next = head1;
            /// Increment head1
            head1 = head1.next;
            /// Increment node
            node = node.next;
        }
        else{
            ///otherwise Point the node.next to head2
            node.next = head2;
            /// Increment head2
            head2 = head2.next;
            /// Increment node.
            node = node.next;
        }
    }
    /// Return the head of the new list.
    return mergedList.head;
}
