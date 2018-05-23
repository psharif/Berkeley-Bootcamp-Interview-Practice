const num = -15;

reverseInt = (n) => {
  
  let array = [];
  let stringNum = "";
  //Convert number to string then add to array and reverse the order of the elements
  array = n.toString().split('').reverse();
  
  //Convert array elements to string and concatenate them
  stringNum = array.join('');
  
  //Convert the string to an integer and multiply by num sign
  return Math.sign(num) * parseInt(stringNum);
}