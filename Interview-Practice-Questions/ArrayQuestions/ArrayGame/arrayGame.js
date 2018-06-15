// PsuedoCode
// 1. While all the values in the array are different.
// 2. Increment Count to the number of times this happens.
// 3. Find the largest value in the array. And return it's index.
// 4. Increment all the indices of the elements that don't have that index.
// 5. Keep doing this until the array is homogeneous. Return count.

/// Function that takes an array and increments four out of the five numbers
/// Until all the numbers are the same.
/// e.g
//0 - [ 1, 1, 2, 3, 7, 7 ]
//1 - [ 2, 2, 3, 4, 7, 8 ]
//2 - [ 3, 3, 4, 5, 8, 8 ]
//3 - [ 4, 4, 5, 6, 8, 9 ]
//4 - [ 5, 5, 6, 7, 9, 9 ]
//5 - [ 6, 6, 7, 8, 9, 10 ]
//6 - [ 7, 7, 8, 9, 10, 10 ]
//7 - [ 8, 8, 9, 10, 10, 11 ]
//8 - [ 9, 9, 10, 11, 11, 11 ]
//9 - [ 10, 10, 11, 11, 12, 12 ]
//10 - [ 11, 11, 12, 12, 12, 13 ]
//11 - [ 12, 12, 13, 13, 13, 13 ]
//12 - [ 13, 13, 13, 14, 14, 14 ]
//13 - [ 14, 14, 14, 14, 15, 15 ]
//14 - [ 15, 15, 15, 15, 15, 16 ]
//15 - [ 16, 16, 16, 16, 16, 16 ]
/// Returns the number of iterations in this case 15.
function arrayGame(array){
  /// Set a variable to count the number of iterations.
  let count = 0;
  /// While all the numbers are not the same.
  while(!allSame(array)){
    /// Prints the array.
    console.log(array);
    /// Increases the count for each time it runs.
    count++;
    /// Calls the increment function with the array and the max found with the
    /// findMax function. findMax returns the index of the max number.
    increment( array ,findMax(array));
  }
  /// Prints the array after before it returns the count.
  console.log(array);
  /// Returns the number of times the loop iterates.
  return count;
}

/// Finds the index of the max number in an array.
function findMax(numbers){
  /// Start with the first number being the max.
  let max = numbers[0];
  /// Start with the first index being the index of the max.
  let index = 0;
  /// For all the rest of the numbers in the array.
  for(let i = 1; i < numbers.length; i++){
    /// If max is less than one of the other numbers.
    if( max < numbers[i]){
      /// The index of the max now becomes that numbers index.
      index = i;
      /// The max number is now the number that is greater.
      max = numbers[i];
    }
  }
  /// Return the max index of that number.
  return index;
}
/// Increments the array of numbers by 1 except for the index passed in.
function increment(numbers, index){
  /// For all the numbers in the array.
  for(let i = 0; i < numbers.length;i++){
    /// If the index of does not equals the number passed in.
    if(i !== index){
      /// Increase the value by 1.
      numbers[i]++;
    }
  }
}

/// Checks to see if all the numbers in the array are the same.
function allSame(numbers){
  /// Returns true if every number in the array equals the first number in the array.
  return numbers.every(function(el, index, array){return el === array[0]});
}
/// Creates an array of numbers.
let numbers = [];
/// Prints out the count of how many times it took.
console.log(arrayGame(numbers));
