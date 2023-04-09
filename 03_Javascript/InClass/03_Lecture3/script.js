//---------------------Hoisting-------------------------
// -> varaibles, and functions Declarations are hoisted.
//Hoisting in JavaScript is the process of moving variable and function declarations to the top of their respective scopes 
// (either the global scope or the function scope)  before the code is executed. This means that you can use a variable or a 
// function before it has been declared in your code, without getting an error.

// console.log(a);             //undefined
// var a = 12;             

// sum()

// function sum() {
//     console.log('inside the sum function');     //inside the sum function
// }

// console.log(a)          //RferenceError: cannot access 'a' before initialization

// let a = 122             


//console.log(name)       //ReferenceError: Cannot access 'name' before initialization
// const name = "vivek"

//Conclusion ==> vars are hoisted 
// Where let and const are also hoisted but in Temporaral deadzone 

// ------------------------------BASIC MATH (assignment, operators, .......) -----------------------------

// console.log(1 + 2);     //  3
// console.log(1 > 2);     //  false

// console.log(10 % 2)
//


//-------------------- comparision ---------------------------
//<, >, <=, >=, ==, !=, ===

// console.log('A' > 'D')     //false

// console.log('Ram' > 'Rbm')  //false

// //console.log(1 > 2)    //false
// //const val = 1;
// //console.log(val == 1) //true

// console.log(1 == "1")   //true

// console.log(1 === "1") //false

//=== is doing 2 things
//1. checking the value
//2. checking the type

//Few Programming

if(true) {
    //do something
} else {
    //do something
}

// Loops

// let arr = [1,2,3,4,5];

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// let j = 0

// while(j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

//op=>
// 1
// 2
// 3
// 4
// 5

// for in => loops over object and its properties
// for of => arrays and (ITERABLE objects) -> array is a default iterable object

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(item of arr1) {
//     console.log(arr1);
// }

// let obj = {
//     name: "vivek",
//     age: 24,
//     canDrive: true
// }

// for(const key in obj) {
//     console.log(key + "=" + obj[key]);
//     // console.log(obj[key]);
// }

// name=vivek
// age=24
// canDrive=true

// -----> Switch

// switch(condition) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("podium position");
//         break;
//     case 4:
//         console.log("consolidation position");
//         break;

//     default:
//         console.log("nkjsdnv");
//         break;
// }

//typeof
const a = 12                //number
const str = "abcd"          //String
console.log(typeof a);      //number

const obj = {
    name: "utkarsh"
};

const sum = function() {

}

console.log(typeof sum)     //function