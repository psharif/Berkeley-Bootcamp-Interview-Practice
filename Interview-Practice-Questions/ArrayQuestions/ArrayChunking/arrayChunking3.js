
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  /// Creates an array for the array Chunks.
  const chunksArray = [];
  /// Creates a count to check how much to add the array.
  /// And to know how to increment during iteration.
  let count = 0;

  /// While all the elements have not been added.
  while( count < array.length ){
      /// Take a slice of the array from the start point to the size specified.
      /// will change as each time the count grows by the size.
      chunksArray.push(array.slice(count, size + count));
      count = count + size;
  }
  // Return the chunks array.
  return(chunksArray);
}

// Test Cases
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
