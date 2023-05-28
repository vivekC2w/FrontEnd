//Promise API

// 6 Static Methods

// 1. Promise.all => 
//It takes a array of promises

//AP
// let payerPromise = new Promise((res, rej) => {
//     res(95);
// })

// let shopkeeperPromise = new Promise((res, rej) => {
//     res(1000 + 5);
// })

// Promise.all([
    //Promise1 deduction of money
    // payerPromise,
    //Promise2 addition of money
//     shopkeeperPromise
// ]).then((data) => {
//     //rbi take the ledger
//     console.log("RBI take the ledger, take a note");
// }).catch((error) => {
//     //rollback the transition
//     console.log("Rollback The Transition");
// })

//2. Promise.race
//It will wait till the first promise is settled and then it will be resolved 

// let promise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(500);
//     }, 5000);
    
// })

// promise1.then(data => {
//     console.log(data, " data will be resolved after 5 sec")
// })

// let promise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(1000);
//     }, 10000);
    
// })

// promise2.then(data => {
//     console.log(data, " data will be resolved after 10 sec");
// })

// Promise.race([
//     promise1,
//     promise2
// ]).then(data => {
//     console.log("data")
// }).catch(error => {
//     console.log("error")
// })

/*3. Promise.any
 takes an iterable of Promises and returns a single Promise. This Promise is fulfilled 
 when any of the input Promises are fulfilled. If all the input Promises are rejected, 
 then the returned Promise is rejected with an AggregateError that contains an array of 
 all the rejection reasons.

*/
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 1 fulfilled');
//     }, 2000);
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Promise 2 rejected');
//     }, 1000);
//   });
  
//   const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Promise 3 fulfilled');
//     }, 1500);
//   });
  
//   Promise.any([promise1, promise2, promise3])
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.log(error);
//     });
  
//Diff bet promise.race and promise.any
//In race all the promises needs to be fulfilled(not rejected)
//


//4 Promise.resolve() is a static method of the Promise object in JavaScript. 
//It returns a new Promise that is resolved with the given value or promise-like object.

//Resolving a Value
// const promise = Promise.resolve(42);
// promise.then(value => {
//   console.log(value); // Output: 42
// });


//Resolving an already resolved Promise
// const originalPromise = new Promise(resolve => {
//     resolve('Original Promise resolved');
//   });
  
//   const resolvedPromise = Promise.resolve(originalPromise);
//   resolvedPromise.then(value => {
//     console.log(value); // Output: Original Promise resolved
//   });
  

//5 Promise.reject() is a static method of the Promise object in JavaScript. 
//It returns a new Promise that is immediately rejected with the provided reason.

//Rejection with a specific reason
// const promise = Promise.reject('Error occurred');
// promise.catch(reason => {
//   console.log(reason); // Output: Error occurred
// });

//Rejection with an Error object
const error = new Error('Something went wrong');
const promise = Promise.reject(error);
promise.catch(reason => {
  console.log(reason); // Output: Error: Something went wrong
});
