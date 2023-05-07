const colorVal = document.querySelector("#colourValue");
const buttons = document.querySelectorAll(".colourButton");
const resetBtns = document.querySelector("#resetButton");
const answerE1 = document.querySelector("#answer");

let ansColor;

function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function resetGame() {
  ansColor = generateColor();
  colorVal.textContent = ansColor;

  buttons.forEach((button) => {
    button.style.backgroundColor = generateColor();
  });
  answerE1.textContent = "";
}

function checkAnswer(button) {
  if (button.style.backgroundColor === ansColor) {
    answerE1.textContent = "Correct!";
  } else {
    answerE1.textContent = "Wrong answer! Guess again!";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    checkAnswer(button);
  });
});

resetBtns.addEventListener("click", resetGame);

resetGame();
