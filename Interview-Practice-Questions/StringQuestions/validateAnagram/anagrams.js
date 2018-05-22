// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/////////////////////////////////////////////////////
////////////////////// WAY 1 ////////////////////////
/////////////////////////////////////////////////////

/// Takes two objects and checks if they are equivalent.
isEquivalent = (a, b) => {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    // Go through each key in the objecg and check the object[key](value) of a
    // Against the object[key](value) of b.
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

const helper = (str) => {
  /// Create an array of alphabetic letters.
  letters = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // Create an empty object.
    lettersObj = {};
    // Map all the lowercase characters in the string if they are alphabetical.
    // Add one to the value if there is already a value.
    // Set it to one if there is no value.
    for( let char of str.toLowerCase()){
      if(letters.indexOf(char) !== -1){
        if(lettersObj[char]){
          lettersObj[char]++;
        }else{
          lettersObj[char] = 1;
        }
      }
    }
    // Returned the mapped object of character values.
    return lettersObj;
}

/// Checks whether two strings are anagrams.
function anagrams(stringA, stringB) {

  /// Changes strings to character objects.
  /// { a: 1, b: 2, c: 1 ..etc.} key is the alphabetic character,
  /// the number is the number of times it appears in the string.
  ObjA = helper(stringA);
  ObjB = helper(stringB);

  /// Checks if the two objects are equal. Returns true or false.
  return isEquivalent(ObjA, ObjB);

}

/////////////////////////////////////////////////////
////////////////////// WAY 2 ////////////////////////
/////////////////////////////////////////////////////

/// Creates Objects from Strings.
function createObjects(str){
  charObj = {};

  /// Replaces all non alphabetic charactes with nothing. LowerCases letters.
  /// Sets the key value pair for the values. Returns object
  for ( let char of str.toLowerCase().replace(/[^\w]/g, "")){
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}

/// Takes two strings to check if they are equal.
function anagrams2(str1, str2){
  /// Creates two objects.
  Obj1 = createObjects(str1);
  Obj2 = createObjects(str2);

  // If the objects have a different number of keys. They can't have the same
  // letters return false.
  if( Object.keys(Obj1).length !== Object.keys(Obj2).length ){
    return false;
  }
  // Checks to make sure each key has the same value to the other object.
  for( let key in Obj1 ){
    if( Obj1[key] !== Obj2[key] ){
      return false;
    }
  }
  // If everything has been checked they are anagrams.
  return true;
}

///Test Cases
console.log(anagrams('rail safety', 'fairy tales'));
console.log(anagrams('Hi there', 'Bye there'));
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));

///Test Cases
console.log(anagrams2('rail safety', 'fairy tales'));
console.log(anagrams2('Hi there', 'Bye there'));
console.log(anagrams2('RAIL! SAFETY!', 'fairy tales'));
