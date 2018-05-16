
function fizzBuzz (num) {

    for (let i=1; i <= num; i++) {
        //This is the first condition you have to check
            if (i%3 === 0 && i%5 === 0) {
                console.log("FizzBuzz");
            }
            //If you put this one or any other conditions to line 6, the code will just run this condiction
            //Which it won't check the line 6
            else if (i%3 === 0) {
                console.log("Fizz");
            }
            else if (i%5 === 0) {
                console.log("Buzz");
            }
            else {
                console.log(i);
            }
        }
}

fizzBuzz(16);