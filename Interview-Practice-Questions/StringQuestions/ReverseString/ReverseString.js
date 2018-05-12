// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/// Function that reverses a string. Takes in a parameter of string (not reversed).
function reverse(str) {
  //Split the string into an array of individual letters.
  strArray = str.split("");
  //Create an index variable of the last element in the array.
  let end = strArray.length - 1;
  //Create an index variable of the first element in the array.
  let beg = 0;
  //In a while loop check if the last index is greater than the first.
  while(end > beg){
    //Use a temp variable to swap the first element with the last element.
    let temp = strArray[beg];
    strArray[beg] = strArray[end];
    strArray[end] = temp;
    //Since the two most outer elements are swapped continue this process by subtracting
    //one from the last index and adding one to the first index. This will continue until
    //we have reached the middle element(s).
    end--;
    beg++;
  }
  ///Return the array of reversed letters as a string by using the join function.
  return strArray.join("")
}

/// Function does same thing but uses the reduce function to reverse a string.
function reverse2(str){
  /// 1. Turn the string into an array using split.
  /// 2. Call the reduce function on the array of letters.
  /// 3. If you want to learn more about Array.prototype.reduce() function visit:
  ///    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  /// 4. We are passing an initial value of empty string to the reduce function this will be set
  ///    as the accumulator.
  /// 5. For each element in the array we will add the currentIndex to the accumulator.
  /// 6. For example the function will do this for each pass for "Greetings!":
  ///    First Pass => "G" + ""
  ///    Second Pass =>  "r" + "G"
  ///    Third Pass => "e" + "rG"
  ///    Fourth Pass => "e" + "erG"
  ///    ...And so on.
  /// 7. When reduce is finished it will return the reversed string.
  return str.split("").reduce((rev, char) => char + rev , "")
}
console.log(reverse('Greetings!')); //Should print out !sgniteerG
console.log(reverse2('Greetings!')); //Should print out !sgniteerG

module.exports = reverse;
