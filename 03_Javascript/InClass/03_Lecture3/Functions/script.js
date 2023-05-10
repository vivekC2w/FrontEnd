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

// let sum = function (a, b) {
//   return a + b;
// };

// let sumExpression = function (a, b) {
//   return a + b;
// };

// let res1 = sum(1, 2); //3

// let res2 = sumExpression(1, 3); //3

// console.log(res1, res1);

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
// const radius = [3, 1, 2, 4];

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

// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// -------------------------Rest Operator ---------------------------

//... (triple dot)
//If you have an object [1, 2, 3, 4, 5] then it will take values and spread out

// function child(name, standard, rollNo, ...otherInfo) {
//   console.log(name, standard, rollNo);

//   console.log(otherInfo);
// }

// console.log("---------------CHILD INFO------------------");

// child(
//   "Akshay",
//   "5th standard",
//   2,
//   "parentFather",
//   "parentMother",
//   "Malegaon",
//   "Gaming PUBG"
// );

//Pass by Value and Pass by reference
//primitives are pass by value(numbers, boolean)
// let num1 = 1;
// let num2 = 2;

// function sum(a, b) {
//   a = a + 10;
//   b = b + 10;

//   console.log(a, b);      //11 12

//   return a + b;
// }

// let resultSum = sum(10, 20); //pass by value

// console.log(num1, num2);    //1 2

// let math = {
//   marks: 100,
//   grade: "A",
// };

// let science = {
//   marks: 80,
//   grade: "B",
// };

// function sum1(obj1, obj2) {
//   obj1.marks = 1;
//   obj2.marks = 2;

//   console.log(obj1, obj2);
// }

// sum1(math, science);

// console.log(math.marks, science.marks);

//--------------------DEEP CLONE and SHALLOW CLONE------------------------------

let math = {
  marks: 100,
  grade: "A",
};

//like Scanner scn = new Scanner();
//SHALOW COPY
let mathClone = { ...math };
//same as below
// let mathClone = { marks: 100, grade: "A", }

let science = {
  marks: 80,
  grade: "B",
};

let scienceClone = { ...science };

function sum1(obj1, obj2) {
  obj1.marks = 1;
  obj2.marks = 2;

  console.log(obj1.marks, obj2.marks);
}

sum1(mathClone, scienceClone);

console.log(math.marks, science.marks);
