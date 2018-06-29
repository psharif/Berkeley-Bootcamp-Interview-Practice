// rotLeft function below
// Rotates an array a certain distance to the left.
function rotLeft(a, d) {
    /// Finds the rotation
    /// in case the rotation is longer than the length of the array.
    const rotation = d % a.length;
    /// Keeps a variable for the new array.
    let newArray = [];
    /// Iterates through all the elements
    for( let i = 0; i < a.length; i++){
        /// If the index is less than the rotion number
        if( i < rotation ){
            /// The new element will appear. The index + the length of the array
            /// minus the rotation length. e.g. [ 1, 2, 3, 4, 5] rotates 3 places
            /// The second index element or [3] has an index less than 3. So we add
            /// the length of the array to the index and subtract the rotation number.
            ///  (2 + 5) - 3 = 4. This is the new index.
            newArray[ (i + a.length) - rotation ] = a[i];
        }
        else{
            /// Otherwise all we have to do is subtract the rotation amount from the
            /// the index. e.g. Index 3  has element [4]. 3 - 3 = 0. [4] is now at index 0.
            newArray[i - rotation] = a[i];
        }
    }
    /// Return the new array.
    return newArray;
}
