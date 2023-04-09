//Variables ----->

//1. let
//2. const

let age = 12;
//console.log(age);
//alert(age)        //old banking sites use

//Data types ----

//1. Strings = "vivek"
//2. Numbers = 123, 12, etc.
//3. boolean = true, false
//4. null => type - object
//5. undefined => type - 

let user = [{
    name: "vivek",
    parents: [{
        name: "mother",
        age: 50
    }, {
        name: "father",
        age: 55,
    }]
}]

//console.log(user);

user = null;        //this is right and good practise 
//user = undefined;   //this is bad practise, not wrong but bad practise 

//console.log(user);

//------------------------ Objects ---------------------------
//In java u can't create property name with space. But in JS it is allowed
let car = {
    wheels: "yes",
    seats: 4,
    ac: true,
    sports: false,
    powerWheels: true,
    "engine version": 8.01,
    "year": 2019
}

// console.log(car)

//get the property
console.log(car.year, car.seats, car["engine version"], "purchase year")
// console.log(car.wheels, car.seats);
// console.log("will I get wheels", car["wheels"]);
// console.log(car["seats"], "seats are there")

//edit
car.seats = 2;
// console.log(car.wheels, car.seats);

//delete
delete car.powerWheels;
// console.log(car);


//-----------------------------------Arrays ----------------------

// let arr = [1, 2, "abcd", true, 'c']
// console.log(arr);

// let char = 'c';
// let charStr = "c";

//get
// console.log(arr[0], arr[1], arr[2]);

// //edit
// arr[0] = "start"

// console.log(arr);

// console.log(arr.length, "length of array");

// //weird thing
// arr.length = 0; 

//------------- array properties -------------

//1. push
let arr = [1, 2, 3, 4];
arr.push(5);

console.log(arr);

//2. pop -> removes the last element
arr.pop();

console.log(arr)

// 3. forEach -> removes the first element
arr.shift()  

console.log(arr)
