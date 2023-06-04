// "use strict";
//Class -> 1. Methods
// 2. Properties
// 3. Constructor

//---------------This is somewhat like Java or CPP++

// class Car {
//   model = "basic engine";
//   speed;

//   constructor(speed, model) {
//     this.model = model;
//     this.speed = speed;
//   }

//   CanIDrive() {
//     console.log("Yes I can Drive");
//   }
// }

//Create an object
// const audi = new Car("123", "v8");
// console.log(audi); //Car { model: 'basic engine', speed: undefined }

// console.log(audi.model); //basic engine
// console.log(audi.CanIDrive()); //Yes I can Drive

//-------------------Constructor Function (Before ES6) --------------------------

// function CarConstructor(sp, md) {
//   this.speed = sp;
//   this.model = md;
//   this.CanIDrive = function () {
//     console.log("Yes I can drive");
//   };
// }

// const hyundai = new CarConstructor(200, "Verna");

// console.log(hyundai.CanIDrive()); //Yes I can drive
// console.log(hyundai.model); //Verna
// console.log(hyundai);
/*
CarConstructor {
  speed: 200,
  model: 'Verna',
  CanIDrive: [Function (anonymous)]
}
*/

// ------- Circle Object -> radius, location -> {x, y}

// function CircleConstructor(radius, position) {
//   this.radius = radius;
//   this.location = position;
//   this.draw = function () {
//     console.log("X: " + this.location.x + " Y: " + this.location.y);
//   };
// }

// const circle = new CircleConstructor(10, { x: 5, y: 8 });
// console.log(circle);
// CircleConstructor {
//     radius: 10,
//     location: { x: 5, y: 8 },
//     draw: [Function (anonymous)]
//   }

// console.log(circle.draw()); //X: 5 Y: 8

//Concept of callSite

// function foo() {
//   console.log("foo");
// }

// //defined -> global
// //called -> global
// function bar() {
//     console.log("bar");
//     foo();

//     foo;
// }

// foo();

// 4 Rules to determine the context

//Rule 1: -> Default Binding....

// function foo() {
//   console.log(this.abc);
//   console.log("this object");
//   console.log(this);
// }

// console.log(window);

// foo(); // -> global

//Rule 2 -> Implicit binding()

// function foo() {
//   console.log(this);
// }

// var obj = {
//   name: "vivek",
//   rollNumber: 12,
//   func: function () {
//     console.log(this.name); //vivek
//     console.log(this.rollNumber); //12

//     console.log(this); // { name: 'vivek', rollNumber: 12, func: [Function: func] }
//   },
// };

// obj.func();

/*
    Rule 3: Explicit Binding()
    User or Developer will tell the JS what is the context
    JS will not determine the context itself

    call, apply, bind 

    all these are used to set the context
*/

// function foo() {
//   console.log("asdasd", a, b);
// }

// var obj = {
//   a: 1,
//   Food: foo,
// };

//Way 1 -> To call a function
// function abc(a, b) {
//   console.log(this); //null
//   console.log("asdasd", a, b); //asdasd 10 20
// }

// abc(1, 2); //asdasd 1 2

// abc.call(null, 10, 20); //we are setting context null of function abc explicitly

/*
    Rule 4 : new keyword()
    New Keyword creates a blank object
*/

// function CarConstructor(sp, md) {
//     this.speed  = sp;
//     this.model = md;
//     this.canIDrive = function() {
//         console.log("Yes i can drive hundai with speed", this.speed)
//     }
// }

// const hundai = new CarConstructor(100, "hundai v8");
// console.log(hundai)

/*
    Rules Precedence -> if two or more rules fight then who will win 

*/

// new > explicit > implicit > default

// function foo(str) {
//     this.a = str;
// }

// var obj1 = {
//     foo: foo
// }

// var obj2 = {
//     name: "obj2"
// }

// obj1.foo("hey tehre")

// console.log(obj1) // {a: "" , foo: function}

//  ------ > Inplicit Vs Explicit

// obj1.foo.call(obj2, "inplicit vs explicit") // foo will have context of obj2
// obj1.foo.call(null, "inplicit vs explicit") // foo will have context of Window obj

// 'use strict'
// obj1.foo.call(null, "inplicit vs explicit") // foo will have context of null

// console.log(obj1)
// console.log(obj2)

//  --------> new Keyword vs IMPLICIT ------

// function foo(str) {
//     console.log("sadasddsa")
//     this.a = str;
// }

// var obj1 = {
//     foo: foo
// }

// let car = new obj1.foo(1);
// console.log(car)

// JS

// console.log(car)
// console.log(obj1)

//  ----> new Vs Explicit  ---------

// let car = new obj1.foo.call(obj2, "implicit"); // calll site

// console.log(obj1, obj2)

/*
    Property Descriptor
*/

//1.    Enumerable

// let obj2 = {
//   name: "Vivek",
//   rollNumber: 12,
//   address: "MG Road",
// };

// Object.defineProperty(obj2, "cashInHand", {
//   value: 42,
//   enumerable: true,
// });

// console.log(obj2);

// for (const key in obj2) {
//   console.log(key);
// }

//Enumerable -> The properties which are enumerable will be part of for in
// else that property will not be part

//-------------------2 Writable -----------------------
//Writable basically means value can be changed ...

// let obj3 = {
//   name: "Vivek",
//   rollNumber: 12,
//   address: "MG Road",
// };

// Object.defineProperty(obj3, "cashInHand", {
//   value: 100,
//   writable: true,
//   enumerable: true,
// });

// console.log(obj3, "obj3");
// console.log(obj3.cashInHand, "obj3"); //100

// obj3.cashInHand = 99;

// console.log(obj3.cashInHand, "obj3"); //99 if writable true else it will print 100 nly

//-------------------3 Configurable -------------------
//Configurable means properties of an object can be modified, deleted and new property added

// const obj4 = {
//   name: "Jayesh",
// };

// Object.defineProperty(obj4, "class", {
//   value: "9th class",
//   enumerable: true,
//   configurable: true,
// });

// console.log(obj4, "obj4"); //{ name: 'Jayesh', class: '9th class' } obj4

// delete obj4.class;

// console.log(obj4, "obj4"); //{ name: 'Jayesh' } obj4

//-------------------4 Own Property --------------------
//the property of an object which is directly in the object and not in the prototype/
// class Car {
//   canmove;

//   func() {
//     console.log("absndvjh");
//   }
// }

// const carObj = {
//   canMove: true,
//   func: function () {
//     console.log("carObj", carObj);
//   },
// };

// console.log(carObj);

// const descriptor1 = Object.getOwnPropertyDescriptor(carObj, "func");
// const descriptor2 = Object.getOwnPropertyDescriptor(carObj, "canMove");
// console.log(descriptor1, "descriptor fun");
// console.log(descriptor2, "descriptor canMove");

// let carAudi = new Car();

// console.log(carAudi);
// carAudi.func();

/*
    Derivatives property 
*/
// const object1 = {
//   property1: 42,
// };

//you can't delete the existing object and you can't add new properties
// Object.seal(object1); //making configurable property false

// delete object1.property1; //It cant delete

//adding new property
// object1.abcd = "abcd"; //It will not be added

// console.log(object1);

// Object.freeze;
//prevent the modification of existing property

// const object1 = {
//   property1: 42,
// };
// Object.freeze(object1); //configurable and writable will be false

//can not add the property
// object1.abcd = "abcd";
//can not edit the property
// object1.property1 = 99;
//can not delete the property
// delete object1.property1;

// console.log(object1);

/*
    Date and Time Object ...
*/

const rightNowDate = new Date(); //1970-01-01T00:00:00.000Z

console.log(rightNowDate);

//Date
console.log(rightNowDate.getTime(), "time"); //miliseconds 1685886548600 time
console.log(rightNowDate.getDay(), "Day"); //0 Day
console.log(rightNowDate.getDate(), "Date"); //4 Date
console.log(rightNowDate.getFullYear(), "Year"); //2023 Year

// EDITING DATE OBJECT ->  SET

// date
// rightNowDate.setDate(15)

// rightNowDate.setFullYear(2099)

// rightNowDate.

// edit the milliseconds
// minutes, hours, seconds.

// console.log(rightNowDate)

//  ------  get UTC time -----------

// const rightNowDate  = new Date() // IST
// console.log(rightNowDate, "IST time");

// const utcTime = rightNowDate.toUTCString();

// console.log(utcTime, "utc time");

// // const offset = new Date(utcTime).

// console.log(offset, "offset")

// -------- MATH ----------------------

// let date = new Date();

// let dateAdd2Hrs = new Date()

// //  added 5 min
// dateAdd2Hrs.setTime(date.getTime() + 300000)

// console.log(dateAdd2Hrs, date)

// console.log( dateAdd2Hrs - date)

/*

    SUGGESTION: see the MOMENT library ..
*/
