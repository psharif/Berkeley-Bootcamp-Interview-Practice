// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  /// Finds the midpoint of a column.
  /// Equal to the the Floor (Round down) of (2 * (number of rows) - 1) / 2
  const midpoint = Math.floor((2 * n - 1) / 2);
  /// For all rows in the pyramid.
  for( let row = 0; row < n; row++ ){
    /// Create a string variable for the row to be printed.
    let str = '';
    /// For all the columns in the row.
    /// (Remember a column is equal to 2 * (number of rows) - 1)
    for(let col = 0; col < 2 * n - 1 ; col++){
      /// If the
      if( midpoint - row <= col && midpoint + row >= col ){
        str += "#";
      }else {
        str += " ";
      }
    }
    console.log(str);
  }
}


///Takes in a number of rows for the user to print out.
/// Rows is the defualted to 0. And string is defaulted to empty.
function pyramid2(n, rows = 0, str = "") {
  /// Finds the midpoint of a column.
  /// Equal to the the Floor (Round down) of (2 * (number of rows) - 1) / 2
  const midpoint = Math.floor((2 * n - 1) / 2);
  // If rows is set to n return because we have printed enough rows.
  if(rows === n){
    return;
  }
  // If the length of the string has reached the desired length. Print it.
  // And recursively call the function again adding 1 to rows, and setting string
  // an argument. Make sure to return so no other steps are executed.
  /// (Remember a string which represents a row is equal to 2 * (number of rows) - 1)
  if(str.length ===  2 * n - 1 ){
    console.log(str);
    return pyramid2(n, rows + 1);
  }

  /// Create a temporary string variable to pass into recursive function.
  let tempStr = "";
  // If the length of the current string is less than or equal to the current row.
  // Add a "#". Otherwise add a space.
  if( midpoint - rows <= str.length && midpoint + rows >= str.length ){
    tempStr += "#";
  }else{
    tempStr += " ";
  }
  // Recursively call the function again.
  pyramid2(n, rows, str + tempStr);
}
pyramid(3);
pyramid2(3);
