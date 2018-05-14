// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome2(str) {
  /// Return if the original string is the same as if we:
  /// Split the original string. Reversed the order of the array. And joined it back together.
  /// If it's equal then string is a palindrome and it will return true. Otherwise it will be false.
  return str === str.split("").reverse().join('');
}

function palindrome(str){
  /// every() Returns true or false if every character meets a condition.
  /// Condition: If every current character is equal to the same index of the character from the end.
  /// In other words if the first character is equal to the last character pass. If the second character is
  /// equal to the second to last character pass. If the third is equal to the third last pass, etc.
  /// If any characters don't match the function will return false. If every character does return true.
  return str.split("").every((char, indx)=>{
      return char === str[str.length - indx - 1];
  });
}

console.log(`Is racecar a palindrome ${palindrome('racecar')}`)
console.log(`Is racecar a palindrome ${palindrome2('racecar')}`)


console.log(`Is NotAPalindrome a palindrome ${palindrome('NotAPalindrome')}`)
console.log(`Is NotAPalindrome a palindrome ${palindrome2('NotAPalindrome')}`)
