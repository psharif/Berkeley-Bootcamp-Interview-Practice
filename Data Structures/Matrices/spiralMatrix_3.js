
function matrix(n) {
    //Saves the arrays we are using for the matrix.
    let matHolder = [];
    ///Creates the empty subarrays.
    for(let i = 0; i < n; i++){
      matHolder.push([]);
    }
    //Keeps track of what column we are currently looking at.
    //Keeps track of what row we are currently looking at.
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    ///Numbers going into the matrix.
    let count = 1;

    /// Have a loop that four loops inside of them to go left, down, right, up.
    /// If we
    while(startColumn <= endColumn && startRow <= endRow){
      //Moving Right. Or from Start Column to End Column.
      for(let i = startColumn; i <= endColumn; i++){
        matHolder[startRow][i] = count;
        count++;
      }
      // Now we are only filling in the rows after the finished one.
      startRow++;
      //Moving Down. Or from Start Row to EndRow.
      for(let i = startRow; i <= endRow; i++){
        matHolder[i][endColumn] = count;
        count++;
      }
      // Now we are only filling in columns before the finished column.
      endColumn--;
      //Moving Left. Or from End Column to Start Column.
      for(let i = endColumn; i >= startColumn; i--){
        matHolder[endRow][i] = count;
        count++;
      }
      //Now we are only filling in rows before the finished row.
      endRow--;
      //Moving up. Or from the End Row to the Start Row.
      for(let i = endRow; i >= startRow; i--){
        matHolder[i][startColumn] = count;
        count++;
      }
      //Now we are only filling in columns after the finished column.
      startColumn++;
    }
    return matHolder;
}

console.log(matrix(6));
