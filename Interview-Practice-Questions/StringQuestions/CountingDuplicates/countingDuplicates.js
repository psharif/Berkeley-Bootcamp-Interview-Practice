var obj1 = {};

function duplicateCount(text){
  let stringArray = [];
  let finalArray = [];
  let string = text.toLowerCase();
    
  //Checks for content in string
  if (text.length > 0) {
    
    //Add 1 to value if character key exists, otherwise set value to 1
    for (let char of string) {  
      obj1[char] = obj1[char] + 1 || 1;
    }
    
    //Add number of times character appears in string to stringArray
    Object.keys(obj1).forEach(function(key) {
        stringArray.push(obj1[key]);
    });
    
    //Only add values of characters that appeared more than once in the string to finalArray
    finalArray = stringArray.filter(char => char > 1)
    
    //Deletes contents of object. This is done so that a new function call to duplicateCount doesn't use pre-existingg keys and values in obj1
    for (const prop of Object.getOwnPropertyNames(obj1)) {
      delete obj1[prop];
    }

    //This returns the number of characters that had duplicates. If not, returns 0
    if (finalArray.length > 0) {
      return "The number of duplicates is: " + finalArray.length;
    }
    else {
      return "The number of duplicates is: " + 0;
    }
  } 
  else {
    //returns 0 if there are no characters in the string
    return "The number of duplicates is: " + 0;
  }  
}
/* SAMPLE TESTS

//Tests for blank string input. Expected return--0.
duplicateCount("");

//Tests for no duplicates. Expected return--0.
duplicateCount("abcde");

//Expected Return is two, since only two letters have duplicates. Expected return--2.
duplicateCount("aabbcde");

//Should ignore case. Expected return--2.
duplicateCount("aabBcde");

//Expected return is one since only one letter is duplicated. Expected return--1.
duplicateCount("Indivisibility");

//Characters may not be adjacent. Expected return--2.
duplicateCount("Indivisibilities");

*/