// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

///Takes in a number of rows for the user to print out.
function steps(n) {
  /// For all the rows in the steps.
  for(let row = 0; row < n; row++){
    //Create an empty string.
    let str = '';
    // For all the columns in the steps.
    for(let col = 0 ; col < n; col++){
      /// If the column is less than or equal to the row.
      if( col <= row){
        /// Add A "#"
        str += "#";
      }else{
        // Else add a space.
        str += " "; /// Can use "_" To make sure spaces are being printed.
      }
    }
    /// Console.log the string for each row.
    console.log(str);
  }
}

///Takes in a number of rows for the user to print out.
/// Rows is the defualted to 0. And string is defaulted to empty.
function steps2(n, rows = 0, str = "") {
  // If rows is set to n return because we have printed enough rows.
  if(rows === n){
    return;
  }
  // If the length of the string has reached the desired length. Print it.
  // And recursively call the function again adding 1 to rows, and setting string
  // an argument. Make sure to return so no other steps are executed.
  if(str.length === n){
    console.log(str);
    return steps2(n, rows + 1);
  }

  /// Create a temporary string variable to pass into recursive function.
  let tempStr = "";
  // If the length of the current string is less than or equal to the current row.
  // Add a "#". Otherwise add a space.
  if(str.length <= rows){
    tempStr += "#";
  }else{
    tempStr += " ";
  }
  // Recursively call the function again.
  steps2(n, rows, str + tempStr);
}

steps2(4);
steps2(3);
