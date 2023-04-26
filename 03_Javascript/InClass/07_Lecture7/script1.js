// ----------------------------FUNCTIONS------------------------------
// 1. First Class Functions: languages which supports first class function can treat their
// function as variable

//integers, objects are first class in java and js
//Functions are first-class in java-script

//VARIABLE TREATMENT are as follows ->

//1.    we can declare variables
//2.    we can pass variables uin functions as their arguments
//3.    we can return variables from the function

// let num1 = 12;
// let num2 = 13;

// function sum(a, b) {
//     //a and b are arguments
//     let c = a + b;
//     return c;
// }

// let result = sum(num1, num2);

// function calc(fn, val) {
//   console.log(fn);              //[Function: sum]
//   console.log(val);             //1
// }

// calc(sum, 1);

// function sum(a, b) {
//   return a + b;
// }

//mercury -> weapons

//earth    ->life support

//jupiter   -> food rations

//space ships method
// function spaceShip(func, num1, num2) {
//logging hey who has initiated life support
//check for auth
//log
//   console.log(num1, num2); //vivek 24

//   if (num1 === "Vivek") {
//     fun();
//   } else {
//     console.log("Spaceship is hacked...");
//   }
//   func(); //Life Support
// }

// spaceShip(lifeSupport, "vivek", 24);

// function weapons() {
//   console.log("weapons activated");
// }

// function lifeSupport() {
//   console.log("Life Support");
// }

// function food() {
//   console.log("food");
// }

//What is different between myFunction() and myFunction?

// function myFunction() {
//     console.log("Hello world!");
//   }

//   myFunction(); // function call

// In the example above, myFunction() is a function call, which executes the code inside
// the function and logs "Hello world!" to the console.

// On the other hand, fun refers to the function itself, without executing it. This can
// be useful when passing a function as an argument to another function or when assigning
//  a function to a variable. For example:
// function myFunction() {
//     console.log("Hello world!");
//   }

//   var myVariable = myFunction; // assign function to variable

//   myVariable(); // function call using variable

// One big function ...
// -> needs to do some important work and then it will call your function

//logging
//and i should add

// function logging(callBackFun) {
//   console.log("logging");           //1. -> logging
//   callBackFun(1, 2);
// }

// function add(a, b) {
//   console.log(a + b);               //2. -> 3
//   return a + b;
// }

// logging(add);
// console.log(add(1, 2));

//Calculator->

// function calculator(operation) {
//     if(operation === 'add') {
//       return function(a, b) {
//         return a + b;
//       }
//     }
// }

// let num1 = 1;
// let num2 = 2;

// calculator('add')

//1.  Function declaration

// function sum() {

// }

//2. Function Expression ->

// const sum = function(a, b) {
//   return a + b;
// }

// let res = sum(1, 2);
// console.log(res);             //3

//1.  Named functions
// function abc() {}

//2.  anonymous functions

// const sum1 = function () {
//   //anything
// };

//3.  Arrow Functions
// const sumArrow = (a, b) => {
//   return a + b;
// };

// let resultArrow = sumArrow(1, 3);
// console.log("Result of sumArrow function => " + resultArrow);   //Result of sumArrow function => 4

//---------------------------------CALLBACKS-----------------------------------

// function loggin(callBackFunction) {
//     //please do your work
//     console.log("logging");

//     callBackFunction();
// }

// function add(a, b) {
//     console.log(a+b);
//     return undefined;
// }

// loggin(add)       //You need to pass value of add not execution of add()

//--------------------------Higher Order Functions----------------------------------

//the functions which can return a function is HOF(calcMotherEarth())

function calcMotherEarth(condition) {
  if (condition === "add") {
    return function (a, b) {
      return a + b;
    };
  } else if (condition === "sub") {
    return function (a, b) {
      return a - b;
    };
  }
}

let functionAdd = calcMotherEarth("add");

console.log(functionAdd);
