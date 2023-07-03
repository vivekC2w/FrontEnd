let toggleInputs = document.getElementById("toggleinputs");
let Count = document.getElementById("count");
let doneTypingInterval = 4000;
let input2 = document.getElementById("input2");
let input1 = document.getElementById("input1");

toggleInputs.addEventListener("click", () => {
  let input2 = document.getElementById("input2");
  if (input2.style.visibility == "hidden") {
    input2.style.visibility = "visible";
  } else if (input2.style.visibility == "visible") {
    input2.style.visibility = "hidden";
  }
});

function handleTyping(input1, display) {
  let typingTimer;

  input1.addEventListener("keyup", () => {
    clearTimeout(typingTimer);

    if (input1.value) {
      typingTimer = setTimeout(() => {
        display.innerText = input1.value;

        input1.value = "";

        Count.innerText = "";
      }, doneTypingInterval);

      if (input1.id == "input1") {
        Count.innerText = `${input1.value.length} characters`;
      } else if (input1.id == "input2") {
        Count.innerText = `${input1.value.split(" ").length} words `;
      }
    } else {
      Count.innerText = "";
    }
  });
}

let inputs = document.getElementsByClassName("userinput");

let textOutput = document.getElementById("textoutput");

handleTyping(input1, textOutput);

handleTyping(input2, textOutput);
