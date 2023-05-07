//grandparent

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

//-------------------Capturing---------------------

grandParent.addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  true //I want to execute this function in capturing phase(when event is going phase)
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  true
);

child.addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
  },
  true
);

// ----------------------Bubbling(Bydefault bubbling phase is used)--------------------

grandParent.addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  false //I want to execute this function in bubbling phase(when event is in returning phase)
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  false
);

child.addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
  },
  false
);

//--------------------stopPropagation()--------------------
// event.stopPropagation() is a method that stops the propagation of an event from being
// passed to its parent elements, thereby preventing any additional event listeners attached
// to those parent elements from executing.

// When an event occurs on an element, that event propagates or bubbles up the DOM tree,
// starting from the target element and moving upwards towards the document root. During
// this propagation, any event listeners attached to the element or its parent elements can
// respond to the event.

// However, sometimes you may want to prevent the event from propagating further up the DOM
// tree. This is where event.stopPropagation() comes in handy. When you call this method on
// an event, it stops the event from propagating to any parent elements.

grandParent.addEventListener(
  "click",
  () => {
    console.log("grandparent clicked");
  },
  false //I want to execute this function in bubbling phase(when event is in returning phase)
);

parent.addEventListener(
  "click",
  () => {
    console.log("parent clicked");
  },
  false
);

child.addEventListener(
  "click",
  (event) => {
    console.log("child clicked");
    event.stopPropagation();
  },
  false
);

//------------------------Removal of Listner -------------------------
const btn = document.getElementById("button");

btn.addEventListener("click", buttonClickedHolder);

function buttonClickedHolder(event) {
  console.log("click me");
  console.log(event);
}

btn.removeEventListener("click", buttonClickedHolder);
