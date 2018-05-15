// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  ///Create An Empty Object
  const charMap = {};
  /// Set a variable to keep track of the highest number of characters.
  let max = 0;
  /// Keep track of the maxChar
  let maxChar = '';

  /// For each character in the string.
  for (let char of str) {
    /// If the character has a value.
    if (charMap[char]) {
      /// Add one to the value.
      charMap[char]++;
    } else {
      /// Otherwise set the character value to 1.
      charMap[char] = 1;
    }
  }

  /// For every character in the chars object.
  for (let char in charMap) {
    /// If the max value is greater than max.
    if (charMap[char] > max) {
      /// Set the new max value to max.
      max = charMap[char];
      /// The new maxChar is equal to that char.
      maxChar = char;
    }
  }

  ///return the maxChar.
  return maxChar;
}

console.log(maxChar("abcccccccd")); ///=== "c"
console.log(maxChar("apple 1231111")); /// === "1"
