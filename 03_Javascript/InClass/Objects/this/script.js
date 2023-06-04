let arfat = {
  name: "arfat",
  city: "NewYork",
};

let ajay = {
  name: "ajay",
  city: "Nashik",
};
let vivek = {
  name: "vivek",
  city: "Pune",
};
let mohit = {
  name: "mohit",
  city: "London",
};
let omkar = {
  name: "omkar",
  city: "Bangalore",
};

function printName() {
  console.log(this.name); //undefined Window scope / Global scope
}

printName();
//Dynamically context of function changes using .call()
printName.call(vivek); //vivek
printName.call(arfat); //arfat
printName.call(mohit); //mohit

//this
//-> Figure out the surrounding context(env)
//  -> new keyword -> context this = { (empty object) }
//-> What is call site?  -> Exact location where exact function is executed

//Exactly oppsite of closure
//In closure it imp that where we write function
//in This keyword it is imp that where we execute it

//Why 3 functions that do the same thing?
//Call, Apply, Bind
//Slightly different things

function sum(a, b) {
  return this.c + a + b;
}

// call
sum.call({ c: 10 }, 20, 30);
//call doesn't modify original function it's just execute function in different context
//fn.call(context, arg1, arg2);

//apply
let arr = [1, 2];
sum.apply({ c: 40 }, arr);
//apply is very similar to call but you give the array of args
//fn.apply(context, [arg1, arg2])

//bind
//call and apply executes the function immedietly but bind doesn't execute immedietly
//it return a new copy function whos context is permenantly changed.
//let newCopyFun = sum.bind({c:30});
//newCopyFun(10, 30);

//if you create arrow function then you don't have to deal complexity of "this"
