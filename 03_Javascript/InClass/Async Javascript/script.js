// const promiseObject = fetch("https://api.kanye.rest/")
//   .then((responseObject) => {
//     console.log(responseObject.status);
//     return responseObject.json();
//   })
//   .then((data) => {
//     const quote = data.quote;

//     //1. create an element edit that element
//     const h1Element = document.createElement("h1");
//     h1Element.innerText = quote;

//     //2.push that element inside DOM tree
//     const body = document.body;
//     body.appendChild(h1Element);

//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//==================================Async await =====================================

//Async await

//Await -> It looks like that JS executor waits for the complete JS function

//function which is using async keyword

//async function returns a promise

// function abc() {
//   return 1;
// }

// const abcResult = abc();
// console.log(abcResult, "abc() result"); //1 'abc() result'

// async function fun() {
//   // await fetch("jcjsbdkb")
//   return 1999;
// }

// const funPromise = fun();

// funPromise.then((data) => {
//   console.log("funPromise data", data); //funPromise data 1999
// });
// console.log(funPromise, "fun() result"); //Promise {<fulfilled>: 1999} 'fun() result'

// Promise
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 1

// Implement Kanyes quote with async wait

// async function fetchQuotes() {
//   const response = await fetch("https://api.kanye.rest/");
//   const data = await response.json();
//   console.log(data);

//   const { quote } = data; //const quotes = data.quotes;
//   console.log(quote);

//   addToTheDOM(quote);
// }

// function addToTheDOM(quote) {
//   const h1Element = document.createElement("h1");
//   h1Element.innerText = quote;

//   const body = document.body;
//   body.appendChild(h1Element);
// }

// fetchQuotes();

/*

  Behind the scenes 

*/
console.log("hello");
fetch("https://api.kanye.rest/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data");
  })
  .catch((error) => {
    console.log("Error");
  })
  .finally(() => {
    console.log("Finally Block");
  });
console.log("bye");
