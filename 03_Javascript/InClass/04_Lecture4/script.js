//Arrays

//In java
//int[] arr = new int[size];

//In javascript
//variable -> let const var
//Datatypes -> int, char, boolean, ...

// let a = 12;         //a can take anything as we don't declare datatype in js
// let b = "abcd";

//why in const array we can push

// var name = "vivek";
// name = "hiray";

// let a = "123";
// a = 1;

// const b = 1;
// b = "123";      //this is illegal

//---------------- Execution context ---------------------

//1. the js file is itself global
//2. scope of variable -> Global & functional
//3. var doesn't care about {brackets} (BLOCK)

// var a = 12;         //global

// console.log(a);

// if(true) {
//     var a = 10;
//     console.log(a); //If parent scope have the variable then child scope will also have access to that variable
//     console.log(b);
// }
// console.log(b);

//---------- let and const

//1. let and const have scope of {} block scope
//-------------------------------------------------
//LET ->
// let a = 12;

// console.log(a); //12

// if (true) {
//   let b = 100;
//   console.log(b); //100
//   console.log(a); //12
// }

// console.log(b);             //ReferenceError: b is not defined
// ----------------------------------------------------------------
//const ->
// const a = 12;

// console.log(a); //12

// if (true) {
//   const b = 100;
//   console.log(b); //100
//   console.log(a); //12
// }

// console.log(b);         //ReferenceError: b is not defined
