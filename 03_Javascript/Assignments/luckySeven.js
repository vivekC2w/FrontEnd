// Problem Statement
// Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7
// Input
// An array containing numbers.
// Output
// Print true if such triplet exists summing to 7 else print false

// Example
// Sample input:-
// [2, 1, 5, 1, 0]
// [1, 6]

// Sample output:-
// true
// false

// Explanation:-
// 1+5+1 = 7
// no 3 consecutive numbers so false

function lucky_sevens(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] + arr[i + 1] + arr[i + 2] === 7) {
      return true;
    }
  }
  return false;
}

console.log(lucky_sevens([2, 1, 5, 1, 0])); // true
console.log(lucky_sevens([1, 6])); // false
