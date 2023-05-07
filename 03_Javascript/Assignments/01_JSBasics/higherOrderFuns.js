// Problem Statement
// You are given a function calculate(operation), with a parameter operation.
// Complete the given function calculate by writing functions in it which takes two numbers as parameter and prints the sum or difference of both numbers in the desired format based on the value of operation
// Input
// Function will take one argument for operation which is in string format.
// The sub functions will take two arguments both of which are in integer format
// Output
// Function prints the numbers with the operation performed between them and the result which sum/difference of both the numbers based on the value of operation

// Format of the string logged on console should be like this

// num1 operationSymbol num2 = answer

// Note:- Keep in mind the spaces

function calculate(operation) {
  operation = operation.toUpperCase();

  function add(a, b) {
    a = +a;
    b = +b;
    let c = a + b;
    console.log(c);
  }

  function subtract(a, b) {
    a = +a;
    b = +b;
    let c = a - b;
    console.log(c);
  }

  if (operation === "ADD") {
    return add;
  } else if (operation === "SUBTRACT") {
    return subtract;
  }
}
