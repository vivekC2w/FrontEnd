// function fun() {
//   //local enviornment
//   var c = 14;
//   console.log(a);
//   console.log(c);
// }

// var a = 12;
// fun();

function foo() {
  let var1 = 10;

  function bar() {
    var1 = var1 + 1;
    console.log("Value of var1 ", var1);
  }
  return bar;
}

let result = foo();
result();   //11
result();   //11 12