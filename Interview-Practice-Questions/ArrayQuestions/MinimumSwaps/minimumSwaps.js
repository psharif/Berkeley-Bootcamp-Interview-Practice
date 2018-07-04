// minimumSwaps function below.
function minimumSwaps(arr) {
    /// Make variables for index and count of swaps.
    let i = 0;
    let count = 0;
    /// Making sure not to go past the last element.
    while( i < arr.length){
        /// If the index does not match the element
        if( arr[i] !== (i+1)){
            /// Swap the element in the right index, with the current element
            let temp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = temp;
            /// Increase the count of swaps
            count++;
        }
        else{
            /// Otherwise the element is in the correct position go to the next element.
            i += 1;
        }
    }
    /// Return the swap count.
    return count;
}
