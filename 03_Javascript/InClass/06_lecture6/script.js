//Objects

let a = new Object();

let b = {};

//creating an object using literal notation

const obj = {
  firstName: "Rahul", //here key is string format weather you declare quotes or not
  lastName: "Patil", //key must be either symbol or strings
  dob: "18th Oct",
  frnds: ["Vivek", "Mayur"],
};

// //at()
// console.log(obj.frnds.at(0)); //Vivek

// //Adding and updating value using . notation
// obj.country = "india"; //it will crete new entry of country

// obj.firstName = "shubham";

// console.log(obj);

// // obj.(d.o.b.) = "23 Mar";
// //Bracket notation
// let keyName = "firstName";

// console.log(obj.keyName); //undefined

// console.log(obj[keyName]); //Rahul

// //delete

// delete obj.frnds;

// console.log(obj);

//value can be a function
// let funObj = {
//   //KEY : VALUE
//   name: function (a, b) {
//     return a + b;
//   },
// };

// let funObj1 = {
//   //shortcut for function
//   name(a, b) {
//     return a + b;
//   },
// };

// console.log(funObj.name(4, 5)); //9

//unlike arrays u can't simply iterate an object.

// popular methods

//1. For
// //get the keys
// console.log(Object.keys(obj)); //[ 'firstName', 'lastName', 'dob', 'frnds' ]
// //get the values
// console.log(Object.values(obj)); //[ 'Rahul', 'Patil', '18th Oct', [ 'Vivek', 'Mayur' ] ]
// //get the arrays
// console.log(Object.entries(obj)); //[ [ 'firstName', 'Rahul' ],[ 'lastName', 'Patil' ],[ 'dob', '18th Oct' ],[ 'frnds', [ 'Vivek', 'Mayur' ] ]]

//using for-in loop get the keys and values
for (const k in obj) {
  console.log(k, "=>", obj[k]);
}

// firstName => Rahul
// lastName => Patil
// dob => 18th Oct
// frnds => [ 'Vivek', 'Mayur' ]

//IT IS RECOMENDED NOT USE FOR-IN LOOP

//Can we sort objects?
//Yes and No
//object(set), they are un-ordered
//obj
//all_keys_in_array
//sort the array above
//then use the key from the above array to get values in sorted array

//WHY ',' DOESN'T work?

let emptyObj = {}; //empty object with 0 keys and 0 values
console.log(emptyObj.toString()); //[object Object] it doesn't seems like empty

//------------------------ARRAYS----------------------------

// Arrays in java
//-> same type
//-> contigous memory locations
//=> we really don't have this type of array in JS

//In JS Array(obj)
//Arrays are special objects where keys are 0, 1, 2, 3

//how to create array
var arr1 = ["a", "b", "c"]; //array literals
// arr1.foo = 123;
// arr1 {
//     0: 'a',
//     1: 'b',
//     foo: 123;
// }

// console.log(arr1) //will print 0 and 1 only not foo's value bcz array prints only o to max key-values

// const arrObj = {
//   name: "vivek",
//   clasZ: 10,
// };

// console.log(typeof arrObj); //object

// const arr = {
//   0: "vivek",
//   1: 10,
// };

// console.log(typeof arr); //object

// console.log(arr); //{ '0': 'vivek', '1': 10 }

// console.log(arr[1]);    //10

//Array.of() =>
// Array.of()

//HOW TO CHECK IF A VALUE IS ARRAY?

// You cant use typeof bcz it will give object type

// instanceof you can use but it doesn't wotk every where

//USE .isArray() to check weather it is array or not
//if(Array.isArray(arr)) {console.log("Yes it's an ARRAY")};

let array = ["a", "b", "c"];
//destructive methods of array may change the actual array
array.push("d");
console.log(array); //[ 'a', 'b', 'c', 'd' ]
array.pop();
console.log(array); //[ 'a', 'b', 'c' ]
array.shift(); //pop from the start
console.log(array); //[ 'b', 'c' ]
array.unshift("a"); //add to the begining
console.log(array); //[ 'a', 'b', 'c' ]
