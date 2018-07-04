// Complete the minimumBribes function below.
// This function can be solved using Bubble sort. Make sure to use the swapped variable
// To finish the function without timing out.
function minimumBribes(q) {
    // Set a variable to keep track of the count of swaps.
    let count = 0;
    // Check if any of the elements are in a slot more than two spaces in front of where
    // they should be. If they are they have made too many swaps return 'Too chaotic'
    for(let i = q.length - 1 ; i >= 0; i--){
        if(q[i] - (i + 1) > 2){
            count = 'Too chaotic';
        }
    }
    // If the array is not too chaotic
    if(count !== 'Too chaotic'){
        // Run Bubble Sort
        // Declare a variable for swapped, that keeps track if the elements have been swapped
        // in the inner loop.
        let swapped = false;
        // Looping through all the elements
        for(let i = 0; i < q.length; i++){
            // Check the elements that haven't been sorted.
            // e.g. [3, 5, 2, 6] Six is sorted so check [3, 5, 2] on the next iteration
            // then it will be [3, 2, 5, 6] so check [3, 2] etc.
            for(let j = 0; j < q.length - i - 1; j++){
                // If the element to the right is smaller than the current element
                if(q[j] > q[j+1]){
                    /// Swap the elements
                    let temp = q[j];
                    q[j] = q[j+1];
                    q[j+1] = temp;
                    // Increase the number of swaps
                    count++;
                    // assign swapped to true.
                    swapped = true;
                }
            }
            /// If you swapped any elements on the last inner loop.
            /// The array is not sorted yet.
            if (swapped){
                /// change swapped to false for the next check
                swapped = false;
            }
            /// Otherwise it is sorted because there weren't any swaps
            else{
                /// Break out of the loop
                break;
            }
        }
    }
    /// Print the 'Too chaotic' or the count from bubble sort.
    console.log(count);
}
