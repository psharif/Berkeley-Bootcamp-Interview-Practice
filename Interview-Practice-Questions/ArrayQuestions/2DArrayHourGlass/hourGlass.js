
// The hourglassSum function is below. The hourGlass input is a 2D 6 X 6 array.
function hourglassSum(arr) {
    /// Creates a low max in case the max is a negative number.
    let max = -1000;
    /// Creates a variable to keep track of hourGlass variables.
    let hourglass = [];
    /// Outer loop that iterates Rows.
    for(let i = 0; i < 4; i++){
      /// Inner loop that iterates columns.
        for(let j = 0; j < 4; j++){
            /// The hourGlass will change so we change the values in the variable.
            hourglass = [ arr[i][j], arr[i][j+1], arr[i][j+2], arr[i+1][j+1], arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]];
            /// If the sum of the variables in hourglass are greater than the current Max.
            if( max < hourglass.reduce((accum, current)=>accum + current, 0) ){
                /// Set the new max to the variables in the hourglass variable.
                max = hourglass.reduce((accum, current)=>accum + current, 0);
            }
            //// Prints out the houglass variables the value of max and
            //// The sum of the variables.
            console.log(`${arr[i][j]} ${arr[i][j+1]} ${arr[i][j+2]}`);
            console.log(`  ${arr[i+1][j+1]}  `);
            console.log(`${arr[i+2][j]} ${arr[i+2][j+1]} ${arr[i+2][j+2]}`);
            console.log(`The max is: ${max}`);
            console.log(`The hourglass sum was: ${ hourglass.reduce((accum, current)=>accum + current, 0)}`)
        }
    }
    /// Returns the max sum.
    return max;
}
