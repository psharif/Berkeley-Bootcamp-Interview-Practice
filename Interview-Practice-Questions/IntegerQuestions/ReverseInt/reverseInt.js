// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //Turns number into a string
    let str = n + '';
    //Split the string into an array.
    let arr = str.split("");
    //Reverse the array. Joining it back into a s
    return parseInt(arr.reverse().join("")) * Math.sign(n);
}


function reverseInt2(n) {
  /// Turn number into a string. Split the string into an array.
  /// Reverse the array. Then join the array making a new string.
  /// Assign the new string to a variable called reversed.
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  /// Parse the reversed strint to get the integer value.
  /// Multiply by the sign value
  /// (If it's negative -1, positive 1, zero 0)
  /// of the number.
  /// Return this value.
  return parseInt(reversed) * Math.sign(n);
}

console.log(`Reverse of 15 is ${reverseInt(15)}`);
console.log(`Reverse of 981 is ${reverseInt(189)}`);
