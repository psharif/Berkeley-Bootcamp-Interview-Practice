// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
let string = 'apple';

function reverse(str) {
    let array = [];
    let newString = "";
    
    //Iterate through every character in the input string
    for (char of str) {
        //First insert each character in 'str' then reverse the order of the elements in 'array'
        array = str.split('').reverse();
        //Join the string elements into newString
        newString = array.join('');
    }
  
    return newString;
}