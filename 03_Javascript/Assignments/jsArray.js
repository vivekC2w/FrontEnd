// Problem Statement
// Write a JavaScript function with function name first to return the first n elements of an array.
// The function takes two arguments array and number n
// Passing a parameter 'n' will return the first 'n' elements of the array.
// The function will be tested as follows first(array, n)

// Note to use Generate Expected Output section
// Pass input like this

// 5 4 2 1
// 1
// Input
// The function first accepts two arguments
// - array which is an array like [1,2,3]
// - n which is a number like 2
// Output
// Return the array of first n numbers of array.

// Example
// const inputArray = [5,4,3,2,1]
// const newArrayOfFirst2Numbers = first(inputArray,2)
// console.log(newArrayOfFirst2Numbers) [5,4]

// ---------------------------------------------Code--------------------------------------------

const first = function (array, n) {
  let arr = array.splice(0, n);
  return arr;
};
