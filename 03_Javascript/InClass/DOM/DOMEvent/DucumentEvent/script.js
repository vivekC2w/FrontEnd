//DOMContentLoaded -> It is the event which will be used whrn the DOM is fully Loaded.

document.addEventListener("DOMContentLoaded", () => {
  console.log("------------Inside -----------------");
  const containerDiv = document.getElementById("container");

  console.log(containerDiv);
});
console.log("------------Outside -----------------");
// const containerDiv = document.getElementById("container");

// console.log(containerDiv);

// const divEle = document.getElementById("container");

// console.dir(divEle);

//2. loadEvent -> When external resources are fully loaded(Images, CSS, etc.)

document.addEventListener("load", () => {});

//3. beforeunload => This event is called when user is moving away from web page
//uses for cleaning purpose

document.addEventListener("beforeunload", () => {
  //cancel all event listner
  //cleaning
});
