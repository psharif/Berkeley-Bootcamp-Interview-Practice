///Split the string into individual words and map through the words.
/// Use charAt to target the first letter.
/// And then use toUppercase to capitalize the letter.
/// Add the remaining letters of the word using substring.
/// And join the array back together.
function capitalize(str){
  // Map each word in the string.
  // Concatinate the first letter uppercase with the rest of the word.
  // Join it back together after the mapping has taken place.
  return str.split(" ").map((el)=>{
    //e.g           "C"               +     "ode"
    return el.charAt(0).toUpperCase() + el.substring(1);
  }).join(" ");
}

//Test Case
console.log( capitalize("hi how are you?"))
