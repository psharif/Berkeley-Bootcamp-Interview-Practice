// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/// Creates a memoize function that
/// caches the values of certain fib() recursive calls.
function memoize(fn){
  const cache = {};
  /// We are going to return a function. And we have args in an array,
  /// in case we don't know the number of arguments.
  return function(...args){
    /// If we have already cached a case of the function
    /// For example if fn(2) had been called already.
    /// Then return the cached result.
    if(cache[args]){
      return cache[args];
    }

    /// Otherwise use apply (which is like call but with an array as arguments).
    /// To invoke the function with the new arguments.
    const result = fn.apply(this, args);
    ///Store the reuslt in a cache object.
    cache[args] = result;
    /// Return the result.
    return result;
  }
}
/// This is the recursive fib function
function fib(num){
  /// If the fib function is less than 2 return the number passed in.
  if(num < 2){
    return num;
  }
  // Otherwise return the sum of the last two numbers in the sequence.
  // Find them by recursively calling the function.
  return fib(num - 1) + fib(num - 2);
}
// Sets a memoized version of the recursive fibonacci sequence.
fib = memoize(fib);

console.log(fib(10));
