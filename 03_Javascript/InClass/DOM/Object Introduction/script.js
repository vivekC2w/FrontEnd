let name = "vivek";
let key = "parentsName";

let obj = {
  name: name,
  rollNumber: 1,
  class: "9th Class",
  [key]: "Parent 1 Parent 2",
};
console.log(obj);
//get
// console.log(obj.name); //Vivek
// console.log(obj["rollNumber"]); //1

//Method 1 to Add dynamic keys

obj["newProperty"] = 12;
// obj[name] = "abcd"
// console.log(obj);
// { name: 'Vivek', rollNumber: 1, class: '9th Class', newProperty: 12 }

//Method 2 to Add dynamic keys
// let obj = {
//   name: name,
//   rollNumber: 1,
//   class: "10th Class",
//   [key]: "parent 1 parent 2"      //Mthod 2
// }

//delete inside object

delete obj.rollNumber;

console.log(obj);

//Copy of an object
// *******************************************************************************
//==============================Shallow Copy - It will create a new copy of object=================

//-----------------Method 1 using spread operator-----------------------
const user = {
  name: "Ajit",
  age: 24,
};

const userCopy1 = user; //this is not how you copy in JS

const userCopy2 = { ...user }; //shallow copy of user

// console.log(user === userCopy1);    //true
// console.log(user === userCopy2);    //false

//------------------Method 2 Object.assign() method------------------------

let a = {
  name: "Omkar",
  address: { house: 20 },
};

let b = {};
Object.assign(b, a);

console.log(a === b); //false

// ***************************************************************************
//================================DEEP COPY=================================
