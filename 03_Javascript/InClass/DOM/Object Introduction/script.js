let name = "vivek";
let key = "parentsName";

let obj = {
  name: name,
  rollNumber: 1,
  class: "9th Class",
  [key]: "Parent 1 Parent 2",
};
// console.log(obj);
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

// console.log(obj);

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

// console.log(a === b); //false

const sourceObj1 = { name: "akash", class: 9 };
const sourceObj2 = { name: "vijay", class: 10 };
const targetObj = {};

Object.assign(targetObj, sourceObj1, sourceObj2);

// console.log(targetObj);
// [[Prototype]]: Object

//Object.create
//-> 1st way to create obj
const person = {
  name: "blah",
  rollNumber: 12,
};

//-> 2nd way to create object

//name and rollNumber -> these properties will be created but in prototype
//i.e., these properties are not own properties

const newPerson = Object.create(person);

console.log("person", person); //person { name: 'blah', rollNumber: 12 }
console.log("newPerson", newPerson); //newPerson {}

console.log(person.name, newPerson.name);

// 3. Object.getOwnPropertyNames()

const personOwnPropArr = Object.getOwnPropertyNames(person);
const newPersonOwnPropArr = Object.getOwnPropertyNames(newPerson);

console.log(personOwnPropArr, newPersonOwnPropArr); //[ 'name', 'rollNumber' ] []

//4. Object.keys()

const keysPerson = Object.keys(person);

console.log(keysPerson); //[ 'name', 'rollNumber' ]

//5. Object.values

const valuesPerson = Object.values(person);

console.log(valuesPerson); //[ 'blah', 12 ]

//6.Object.entries()

const keyValPerson = Object.entries(person);

console.log(keyValPerson); //[ [ 'name', 'blah' ], [ 'rollNumber', 12 ] ]

for (const [key, value] of keyValPerson) {
  console.log(`${key} : ${value}`);
}

// ***************************************************************************
//================================DEEP COPY=================================
