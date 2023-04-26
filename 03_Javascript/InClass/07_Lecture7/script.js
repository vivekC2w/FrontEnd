// ---------------------HOISTING-----------------------

// console.log(a); //undefined

// var a = 25;

//HOISTING =>
//1. Parsing phase
//2. Execution phase

//In Parsing Phase it will check only declarations and declare undefined
//var a = undefined;

//In execution phase
//console.log(a);       //undefined
//var a = 25;           //a = 25

//WHY it won't work with let and const

// console.log(val);       //ReferenceError: Cannot access 'val' before initialization

// let val = 10;           //Temporal dead zone
// The temporal dead zone (TDZ) is a behavior in JavaScript that occurs when a
// variable declared with let or const is accessed before it has been initialized.

// In JavaScript, variables declared with let and const are not hoisted to the top
// of their scope like variables declared with var. Instead, they are hoisted to the
// top of the block in which they are declared. However, the variable cannot be accessed
// until it has been fully initialized.

// The period of time between the start of the block and the point at which the
// variable is fully initialized is called the temporal dead zone (TDZ).
// Any attempt to access the variable during the TDZ will result in a ReferenceError.

// console.log(a);

// var a = 12;

// // console.log(a);

// function sum(a, b) {
//   var c = a + b;
//   return c;
// }

// const res = sum(1, 2);

// console.log(res);

console.log(a);

var a = 10;

console.log(a);

console.log(b);

let b = undefined;
