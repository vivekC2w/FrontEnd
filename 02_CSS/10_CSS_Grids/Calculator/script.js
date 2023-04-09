document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");

  let firstOperand = null;
  let secondOperand = null;
  let currentOperation = null;

  function clear() {
    // Function to clear the calculator
    display.textContent = "0";
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
  }

  function handleNumberClick(number) {
    // Function to handle number clicks
    if (display.textContent === "0") {
      display.textContent = number;
    } else {
      display.textContent += number;
    }
  }

  function handleOperationClick(operation) {
    // Function to handle operation clicks
    if (firstOperand === null) {
      firstOperand = parseFloat(display.textContent);
      currentOperation = operation;
      display.textContent = "0";
    } else {
      secondOperand = parseFloat(display.textContent);
      const result = performCalculation();
      display.textContent = result;
      firstOperand = result;
      currentOperation = operation;
      secondOperand = null;
    }
  }

  function performCalculation() {
    // Function to perform the calculation based on the current operation
    switch (currentOperation) {
      case "+":
        return firstOperand + secondOperand;
      case "-":
        return firstOperand - secondOperand;
      case "*":
        return firstOperand * secondOperand;
      case "/":
        return firstOperand / secondOperand;
      default:
        return null;
    }
  }

  function handleEqualClick() {
    // Function to handle equal click
    if (currentOperation !== null) {
      secondOperand = parseFloat(display.textContent);
      const result = performCalculation();
      display.textContent = result;
      firstOperand = result;
      currentOperation = null;
      secondOperand = null;
    }
  }

  // Add event listeners to the buttons
  document.querySelectorAll(".btns button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const buttonText = event.target.textContent;

      if (/\d/.test(buttonText)) {
        handleNumberClick(buttonText);
      } else if (["+", "-", "*", "/"].includes(buttonText)) {
        handleOperationClick(buttonText);
      } else if (buttonText === ".") {
        if (!display.textContent.includes(".")) {
          display.textContent += ".";
        }
      } else if (buttonText === "AC") {
        clear();
      }
    });
  });

  document
    .querySelector(".equal button")
    .addEventListener("click", handleEqualClick); // Adds event listener to the equal button
});
