// const inputBox = document.getElementById("input");
// console.log(inputBox);

// const searchCallbackFunction = (e) => {
//     // console.log("event ", e)
//     const value = e.target.value;
//     // api call

//     console.log(value, "value api call");
// }

// inputBox.addEventListener("input", searchCallbackFunction)

// Debounce function ..... callbackFunction, delay

// function myDebounce( callback, delay ) {
//     let timerNumber;
//     return function() {
//         const event = arguments[0];

//         clearTimeout(timerNumber)

//         timerNumber = setTimeout(() => {
//             // i shoud
//             callback(event)
//         }, delay)
//     }
// }

// const debouncedSearchCallbackFunction
// = myDebounce(searchCallbackFunction, 1000)

// inputBox.addEventListener("input", debouncedSearchCallbackFunction)

/*
Explanation -> If we type abcde in input box it will call API 5 times which is very bad and csotly
And 5 API calls because for every keystroke we have timer. But I should have last timer only
i.e. Timer on the last keystroke and rest all the timers should be deleted. for that we need 
to make sure that before adding new timer we need to delete old one.This what are we doing in 
above code.
*/

// ===================================================================================== //

// throttling

// const fireBullets = (event) => {

//     console.log("hello window");
// }

// function throttle( callback, delay ) {

//     let flag = true;

//     return function() {

//         const event = arguments[0];

//         if(flag) {
//             // callback.call(this, )//  we should do this , set the context as well

//             callback(event)
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, delay);
//         }

//     }
// }

// // window.addEventListener("resize", fireBullets); // event argument

// const throttleFireBullets = throttle(fireBullets, 3000);

// window.addEventListener("resize", throttleFireBullets); // better function // 1 argument event

// =======================================================================================

// MEMOIZATION
//Make Obj keep track of an argument so that function call with same argument does not make another call
//Instead of it using precalculated solutions

// Memoization is a technique used in programming to optimize the execution time of functions
// by caching the results of expensive function calls and reusing them when the same inputs
// occur again.

//If you have not visited the silmply call the function and store the result

//If you have already visited then do not call the function again return the value from the stores

function fibbo(n) {
  //  dp

  if (n <= 1) {
    return 0;
  }

  if (n === 2 || n === 3) {
    return 1;
  }

  return fibbo(n - 1) + fibbo(n - 2);
}

function memiozation(callback) {
  let cacheMemory = {};

  return function () {
    const n = arguments[0];
    //    console.log(cacheMemory);
    if (cacheMemory[n]) {
      return cacheMemory[n];
    } else {
      // expensive functon
      const results = callback(n);
      cacheMemory[n] = results;
      return results;
    }
  };
}

const improvedFibbo = memiozation(fibbo);

// const abc = fibbo(45);
const abc1 = improvedFibbo(45); // 1st expensive call
const abc2 = improvedFibbo(45);
const abc4 = improvedFibbo(45);
console.log(abc1, "delayed"); // very delayed
console.log(abc2, "fast");
console.log(abc4, "fast 45 again");

// const abc = setTimeout(() => {
//   console.log("a");
// }, 8000); //8 sec

// console.log(abc); //id

/*
Timeout {
  _idleTimeout: 8000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 55,
  _onTimeout: [Function (anonymous)],
  [Symbol(triggerId)]: 1
}
a
*/

// setTimeout return an Id and we are capturing that id in abc. It would wait for 8 sec and
//and then it will excute the function. But if we dont want to excute it right now. For
//we have clearTimeout. clearTimeout needs to know which timer you needs to clear/delete.
//for that clearTimeout will take ID which our setTimeOut returns

// let abc1 = setTimeout(() => {
//   console.log("a");
// }, 12000); //12 sec

// console.log(abc1); //a

// clearTimeout("Here we will pass the ID of abc1"); //Timer is gone now
