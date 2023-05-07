const container = document.getElementById("container");

container.style.color = "red";
container.style.border = "1px solid black";
container.style.width = "100px";
container.style.height = "60px";

// container.addEventListener("click", () => {
//   console.log("I am clicked!!");
// });

// container.addEventListener("mouseover", () => {
//   console.log("I am hovered");
// });

// function containerClick() {
//   console.log("Click");
// }

//Keyboard events ----------------

// Get the input element
var input = document.getElementById("myInput");

// Attach an event listener for keydown event
input.addEventListener("keydown", function (event) {
  console.log("Keydown event triggered. Key code: " + event.keyCode);
});

// Attach an event listener for keyup event
input.addEventListener("keyup", function (event) {
  console.log("Keyup event triggered. Key code: " + event.keyCode);
});

// Attach an event listener for keypress event
input.addEventListener("keypress", function (event) {
  console.log("Keypress event triggered. Character code: " + event.charCode);
});

//----------------Mouse events ----------------

const button = document.querySelector("button");
//Click event:
button.addEventListener("click", function () {
  console.log("Button clicked");
});

//Double-click event
button.addEventListener("dblclick", function () {
  console.log("Button double-clicked");
});

//Mouse Event
container.addEventListener("mouseover", function () {
  console.log("Mouse over container");
});

//Mouseout event
container.addEventListener("mouseout", function () {
  console.log("Mouse out of container");
});

//Mousemove event
container.addEventListener("mousemove", function () {
  console.log("Mouse moving over container");
});


//1. Event Bubbling 