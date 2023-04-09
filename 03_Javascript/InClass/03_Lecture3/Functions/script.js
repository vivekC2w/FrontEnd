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

let sum = function(a, b) {
    return a + b;
} 

let sumExpression = function(a,b) {
    return a + b;
}

let res1 = sum(1,2);                //3

let res2 = sumExpression(1, 3)      //3

console.log(res1, res1);

