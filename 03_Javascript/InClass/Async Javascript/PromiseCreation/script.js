//PROMISE CREATION
//1. Using constructor
const myFetch = new Promise((resolve, reject) => {
    //1 Calling ther server
    //const data = XMLHttpRequest
    try
}
// })
//2. To use Async Keyword

// function abc() {
//     return 1;
// }

// const res = abc();
// console.log(res);               //1

// async function getTheQuotes() {
//     return 1;
// }


// const res2 = getTheQuotes();
// console.log(res2);              //Promise { 1 }

//Consume Promise

//way 1: then block
// res2.then((data) => {
//     console.log("My marks ", data)      //My Marks 1
// })

//way 2: await
// const res3 = await getTheQuotes();
// console.log(res3, " result 3");

// MicrotaskQueue vs Macrotask queue
//

let promise = new Promise((resolve, reject) => {
    resolve(100);
})

console.log("hello");           //1

setTimeout(() => {
    console.log("Hello World");         //4
})

promise.then(data => console.log(data));        //3

console.log("bye");             //2