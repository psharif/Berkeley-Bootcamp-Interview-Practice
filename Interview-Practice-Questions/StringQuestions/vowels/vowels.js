// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Take a string as an argument
// Match will find all the characters you are searching for and return an
// array of those characters. In this case we checked for vowels. Globally '/g'.
// And made it case insensitive so lower and uppercase vowels would be included.
// If the string has vowels return the lenght of the array otherwise 0.
function vowels(str){
  return str.match(/[AEIOU]/gi) ? str.match(/[AEIOU]/gi).length : 0;
}

/// Takes a string as an argument.
/// Creates a counter.
/// Split the string full of vowels and map through through the letters in the string.
/// If vowels array includes a character in the string add one to the counter.
/// Return the counter.
function vowels(str){
  let counter = 0;
  const vowels = 'aeiou'.split("");
  str.split("").map((ch)=>{
    if(vowels.includes(ch)){
      counter++
    }
  })
  return counter;
}
