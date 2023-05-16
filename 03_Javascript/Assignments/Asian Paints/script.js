const allBlocks = document.querySelectorAll(".blocks-wall > div");
const wallIDInput = document.querySelector("#wall_id");
const colorInput = document.querySelector("#wall_color");

function resetColors(event) {
  // event.preventDefault();
  const wallListArr = Array.from(allBlocks);

  wallListArr.forEach((wall) => (wall.style.backgroundColor = "transparent"));

  resetInput(wallIDInput);
  resetInput(colorInput);
}

function applyBtnHandler(event) {
  event.preventDefault();

  const wall = allBlocks[wallIDInput.valueAsNumber - 1];
  wall.style.backgroundColor = colorInput.value;

  resetInput(wallIDInput);
  resetInput(colorInput);
}

function attachBtnEventListner() {
  const applyBtn = document.querySelector("#apply-btn");
  const resetBtn = document.querySelector("#reset-btn");

  applyBtn.addEventListener("click", applyBtnHandler);
  resetBtn.addEventListener("click", resetColors);
}

function resetInput(inputElement) {
  inputElement.value = "";
}

attachBtnEventListner();
