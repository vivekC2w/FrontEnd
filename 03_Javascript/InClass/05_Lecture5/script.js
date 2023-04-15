// ------------------Execution context-------------------
// var a = 12;
// console.log(a); //12
// if (true) {
//   var a = 13;
//   console.log(a); //13
// }
// console.log(a); //13

// function abc() {
//   var a = 12;
//   console.log(a); //12
//   return a;
// }
// let result = abc();

// console.log(result); //12

// console.log(a); //13

// //           JavsScript
// //1. Parsing            2.Execution

// //Parsing -> Read the declarations

// console.log(val); //val = undefined during parding

// let val = 10; //val = 10 during execution context

// ---------------------Try and Catch------------------

function sum(a, b) {
  try {
    throw Error("Reference error due to non alignment");
    let c = a + b;
    return c;
  } catch (error) {
    console.log("Hey there");
    console.log(error);
    // alert("Something went wrong");
  }
}

let res = sum(1, 2);

console.log(res);
