// console.log("Start");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 5000);

// console.log("End");

// let startDate = new Date().getTime;
// let endDate = startDate;
//This loop will basically keep on updating endDate with present date
//after every milisecond it will update my endDate with current Date
//We will keep running untill and unless our end Date is less than start Date + timeout or the delay

// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }

// console.log("While expires");

// Start
// End
// While expires
// Callback

// console.log("Start");

// setTimeout(function cb() {
//   console.log("Callback");
// }, 0);

// console.log("End");

// Start
// End
// Callback

//SetTimeout eait for x seconds then going to execute your function()
console.log("a");

setTimeout(function cb() {
  console.log("c");
}, 0);

console.log("b");
