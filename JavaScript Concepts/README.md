# JavaScript

## Interview Questions

* What is a closure?
	* A closure is the "lexical environment" in which a function exists. For example, all functions can access variables from the global level, so their lexical environment includes global variables as well as variables initialized within a function itself. In JavaScript, closures are special because they allow variables that seem like they would be out of scope to be accessed. Check out this code block:
	```
	var add5 = function() {
		var x = 5;
		return function(numberToAdd) {
			return x + numberToAdd;
		}
	}
	add5(10); // returns 15
	```
	You might think that add5 wouldn't work, as once it is returned from the original function, var x no longer seems to be defined. However, x is actually still within the lexical environment of add5, so it's still accessible from within the add5 function only. That's just one of JavaScript's quirks.
	
[Here's](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) another Source that Explains Closures.

[This is a link](https://www.toptal.com/javascript/interview-questions) to other sources of javascript questions.
