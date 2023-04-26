// let arr = [1, 2, 3, 4];
// //array is created in heap because array is also an object
// arr.push(5);

// console.log(arr.length); //5

// const arr1 = [1, 2, 3, 4, 5, 6];
// arr1.push(7);

// console.log(arr1.length); //7

// //sorting of array
// console.log([2, 5, 7, 3, 4, 1].sort()); //this will give correct sorting order

// console.log([1, 11, 2, 22, 3, 33, 4, 5, 7].sort());//why this won't giving correct sorting

// let arr1 = [1, 2, 3, 4, 5, 6];

// const arr2 = [1, 2, 3, 4, 5, 6];

// console.log(arr1 === arr2); //false

// //1.Push
// let lenOfArr = arr1.push(7);

// console.log(lenOfArr); //7

// //2. pop => remove the last element and return the last element

// console.log(arr1.pop(), "pop value");       //7 pop value
// console.log(arr1.length);                   //6

//3. Slice
// console.log(arr1);

// let slicedArr = arr1.slice(2, 5); //[ 1, 2, 3, 4, 5, 6 ]
// console.log(slicedArr); //[ 3, 4, 5 ]

// console.log(arr1 == slicedArr); //false

//4. Splice
// console.log(arr1); //[ 1, 2, 3, 4, 5, 6 ]

// let splice = arr1.splice(1, 2); //splice(start: number, deleteCount : number | undefined)
// console.log(splice); //[ 2, 3 ]

// console.log(arr1); //[ 1, 4, 5, 6 ]

//5. Sort
// let orgArr = [1, 5, 7, 3, 2, 9, 8];
// console.log(orgArr); //[1, 5, 7, 3, 2, 9, 8]
// let ansSorted = orgArr.sort();

// console.log(ansSorted); //[1, 2, 3, 5, 7, 8, 9]

// console.log(orgArr == ansSorted, " sorting"); //true sorting

// orgArr.sort((a, b) => a - b); //ascending order
// console.log(orgArr);
// orgArr.sort((a, b) => b - a); //descending order
// console.log(orgArr);

//----------------------------Looping ----------------------------

//1. For loop
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

//2. for of loop
// for (let item of arr1) {
//   console.log(item);
// }

//3. for in loop will print index
// for (let item in arr1) {
//   console.log(item);
// }

//4. forEach
// let arr = [11, 22, 33, 44, 55];

//1. Parent -> forEach
//2. callback -> () => {
//print out element
//} //users function arrow function

//1. foreach is going to every index
// arr.forEach((value, index, array) => {
//   console.log(value, index, array, "hey there i am traversing");
// });

// arr.forEach(myFun);

// function myFun(value, index) {
//   console.log(value, " at index : ", index);
// }

// 11  at index :  0
// 22  at index :  1
// 33  at index :  2
// 44  at index :  3
// 55  at index :  4

// function sum(a, b) {
//   return a + b;
// }

// let res1 = sum(1, 3);

// const sumFun = (a, b) => {
//   return a + b;
// };

// let res2 = sumFun(2, 4);

// console.log(res1, " ", res2); //4  6

//2. -------------------------MAP -----------------------

// let arr = [19, 21, 37, 44, 51, 69, 77, 89];

// let beautifullArr = arr.map((value, index, array) => {
//   console.log(value + " map at the index of: ", index);

//   let rank = "";
//   if (value < 22) {
//     rank = "undergrad";
//   } else if (value >= 22 && value < 30) {
//     rank = "passed out";
//   } else if (value >= 30) {
//     rank = "Expereinced people";
//   }

//   let obj = {
//     age: value,
//     rank: rank,
//   };

//   return obj;
// });

// console.log(arr); //[19, 21, 37, 44, 51, 69, 77, 89]

// console.log(beautifullArr);

// [
//     { age: 19, rank: 'undergrad' },
//     { age: 21, rank: 'undergrad' },
//     { age: 37, rank: 'Expereinced people' },
//     { age: 44, rank: 'Expereinced people' },
//     { age: 51, rank: 'Expereinced people' },
//     { age: 69, rank: 'Expereinced people' },
//     { age: 77, rank: 'Expereinced people' },
//     { age: 89, rank: 'Expereinced people' }
//   ]

//  <22 -> undergrads
// {
//     age: 19,
//     rank: 'undergrand'
// }

// {
//     age: 37,
//     rank: 'Expereinced People'
// }

// let arr2 = ["abc", "def", "ghi"];

// let arr1 = [
//   {
//     name: "utkarsh",
//     age: 25,
//   },
//   {
//     name: "akash",
//     age: 26,
//   },
//   {
//     name: "Bhanu",
//     age: 95,
//   },
// ];

// 3. -------------------------------Filter-------------------------

// let arr = [19, 21, 29, 44, 51, 69, 77, 88];

// let filteredArray = arr.filter((value) => {
//   if (value % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(filteredArray); //[ 44, 88 ]

//1. go to every element
//2. execute the function
//3. except (foreach) every function cares about return values

//6. Find last

// let arr1 = [1, 2, 3, 4, 5, 6]
//4. Array find

// let arr = [1, 2, 3, 4, 5];

// let restFindArr = arr.find((value) => {
//   // if (value == 3) {
//   //   return true;
//   // }

//   if (value == 99) {
//     return true;
//   }
// });

// console.log(restFindArr);     //if value present it will return val and if not present then undefined

//5. findIndex

// let arr = [1, 2, 3, 4, 5];

// let indexof99 = arr.findIndex((value) => {
//   if (value == 99) {
//     return true;
//   }
// });

// console.log(indexof99);   //-1 if val not present

//  this is different than others

//7.  array.reduce

let sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// sumArr.forEach((num) => {
//   sum += num;
// });

// console.log(sum);

//sumArr.forEach( () => {})  value is function

//You can give 2 things to reduce
//reduce( () => {}, )
let ans = sumArr.reduce((accumulator, value) => {
  return accumulator + value;
}, 1);

console.log("Accumulator", ans);

//odd numbers from array using resuce
const number = [1, 2, 3, 4, 5];

// const oddNumbers = number.reduce((acc, curr) => {
//   if (curr % 2 !== 0) {
//     acc.push(curr);
//   }
//   return acc;
// }, []);

// console.log(oddNumbers);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumOfOddNums = arr.reduce((acc, curr) => {
//   if (curr % 2 !== 0) {
//     acc += curr;
//   }
//   return acc;
// });

// console.log(sumOfOddNums);

const arr2 = [1, 2, 3, 4, 5];

const newArr = arr2.reduce((acc, currentValue) => {
  acc.push(currentValue * 2);
  return acc;
}, []);

console.log(newArr);


let arr1 = [1, 2, 3, 4];
let copyArray = arr1.slice();