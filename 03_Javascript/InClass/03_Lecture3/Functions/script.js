/*
    Functions
*/

// -> input (box) -> output

// function functionName() {

// }

// function sum(a, b) {
//     return a + b;
// }

// let ans = sum(1, 2);
// console.log(ans);

// -------variables

// let c = 12;

// function sum(a, b) {
//     return a + b + c;
// }

// let result = sum(1,2);

// console.log(result);        //15

//----------------------Function Expression

// function sum(a, b) {
//     //do something here
// }

let sum = function (a, b) {
  return a + b;
};

let sumExpression = function (a, b) {
  return a + b;
};

let res1 = sum(1, 2); //3

let res2 = sumExpression(1, 3); //3

console.log(res1, res1);

//-----------------------Higher Order Functions------------------------------
//A function which takes another function as an argument or returns a funtion from it is
// known as Higher order Function

// x() is the callback function
// function x() {
//     console.log("Namaste");
// }

// //y is higher order functions
// function y(x) {
//     x();
// }

//Array of radius of circles
const radius = [3, 1, 2, 4];

// const calcArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };

// console.log(calcArea(radius));

//calculate circumference of circle
// const calcCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };

// console.log(calcCircumference(radius));

//calculate Diameter of circle
// const calcDiameter = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//       output.push(2 * radius[i]);
//     }
//     return output;
//   };

//   console.log(calcDiameter(radius));

//DRY -> Don't Repeat Youself

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));
