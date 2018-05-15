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

console.log(`Reverse of 15 is ${reverseInt(15)}`);
console.log(`Reverse of 981 is ${reverseInt(189)}`);
