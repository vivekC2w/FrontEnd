// const red = document.getElementById("red");
// const green = document.getElementById("green");
// const blue = document.getElementById("blue");

// red.addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "red";
// });

// green.addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "green";
// });

// blue.addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "blue";
// });

//-------------Way 2 - Event Deligation -----------------------

const parent = document.getElementById("parent");

parent.addEventListener("click", (e) => {
  if (e.target.classList.contains("box")) {
    const color = e.target.id;
    e.target.style.backgroundColor = color;
  }
});
