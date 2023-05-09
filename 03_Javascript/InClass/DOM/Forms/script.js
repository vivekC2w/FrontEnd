const nameInputElement = document.getElementById("name");
const nameInputElementAgain = document.getElementById("nameagain");

//-------------------------keypress-------------------------

// nameInputElement.addEventListener("keypress", (event) => {
//   let key = event.key;
//   console.log(key);
// });

// The keypress event is triggered when a character key is pressed, but it may not be
// triggered for all keys on all browsers. In contrast, the keydown event is more reliable
// and is triggered when any key is pressed.

// Additionally, the keydown event provides more information about the key that was pressed,
// such as whether it was a modifier key (e.g. shift, ctrl) or a function key (e.g. F1, Escape).

//Implementation of keypress is also complex

//----------------------------------keydown-------------------------------

// nameInputElement.addEventListener("keydown", (event) => {
//   let key = event.key;
//   console.log(event.target.value);
// });

//------------------------------copy and paste--------------------

// nameInputElementAgain.addEventListener("copy", (event) => {
//   event.preventDefault();
// });

// nameInputElementAgain.addEventListener("paste", (event) => {
//   event.preventDefault();
// });

//----------------------FOCUS------------------

nameInputElement.addEventListener("focus", (event) => {
  //   console.log("Hey there I'm focused");
  //   console.dir(event);
  event.target.value = "";
});

//bubbling: false for this event

//---------------blur -> opposite to focus

// nameInputElement.addEventListener("blur", (event) => {
//   console.log("blur!!");
//   const value = event.target.value;
//   console.log("Value debug ", value);
// });

//FORMS event

const formElement = document.getElementById("forms");

const nameElement = formElement.elements["name"];
// console.log(nameElement);

const nameagainElement = formElement.elements["nameagain"];
// console.log(nameagainElement);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit");

  const name = nameElement.value;
  const nameAgain = nameagainElement.value;

  console.log("submitting a name--------", name, nameAgain);
});
