// You’re given the pointer to the head nodes of two linked lists.
// Compare the data in the nodes of the linked lists to check if they are equal.
// The lists are equal only if they have the same number of nodes and
// corresponding nodes contain the same data.
// Either head pointer given may be null meaning that the corresponding list is empty.

/// Compares the nodes of two lists to see if they have the same number of nodes.
/// And that each of the nodes has the same data inside of it.
function CompareLists(llist1, llist2) {
    /// If one of the lists is empty and the other one isn't return false(0).
    if( (llist1 && !llist2) || (!llist1 && llist2)){
        return 0;
    }
    /// Set two variables to the head of the list.
    let node1 = llist1;
    let node2 = llist2;
    /// While their are still nodes in each of the lists.
    while(node1 && node2){
        /// If one of the lists has more nodes and the other doesn't return false(0).
        if( ( node1.next && !node2.next ) || ( !node1.next && node2.next) ){
            return 0;
        }
        /// If the data in the nodes are different return false(0).
        if (node1.data !== node2.data){
            return 0;
        }
        /// Go to the next node in each of the lists.
        node1 = node1.next;
        node2 = node2.next;
    }
    /// You've compared all the nodes data, and the length so they are similar.
    /// Return true(1).
    return 1;
}
