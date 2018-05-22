// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Takes in a string.
// Replaces any characters that aren't alphabetic characters with nothing.
// Turns all characters to lowerCase letters.
// Splits the characters into an array.
// Sorts the characters and joins them back into a string.
function clean(str) {
	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// If string one and two cleaned are equal to one another we have anagrams.
// We can ignore Case sensitivity and punctuation.
function anagram(one, two) {
	return (clean(one) === clean(two));
}
// Test case.
const ayy = "history";
const bee = "this YOR#$$%";

console.log(anagram(ayy, bee));
