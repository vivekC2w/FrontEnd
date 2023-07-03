// javascript code goes here
const buttonContainer = document.querySelector(".keyboard");
const preview = document.querySelector(".preview");

function createButton(text) {
  const btn = document.createElement("button");
  btn.setAttribute("id", `key-${text}`);
  btn.textContent = text;
  return btn;
}

for (let i = 97; i < 97 + 26; i++) {
  const btn = createButton(String.fromCodePoint(i));
  buttonContainer.appendChild(btn);
}

for (let i = 0; i <= 9; i++) {
  const btn = createButton(i);
  buttonContainer.appendChild(btn);
}

const space = createButton("Space");
space.setAttribute("id", "key-space");
buttonContainer.appendChild(space);

buttonContainer.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName.toLowerCase() === "button") {
    const clickedButtonID = target.getAttribute("id");
    const btn = clickedButtonID.split("-")[1];

    if (btn === "space") {
      preview.textContent += " ";
    } else {
      preview.textContent += btn;
    }

    if (preview.textContent.trim() === "forty two") {
      addQuote();
    } else {
      const q = document.querySelector(".quote");
      if (q) {
        q.remove();
      }
    }
  }
});

function addQuote() {
  const div = document.createElement("div");
  div.classList.add("quote");

  const quote = getQuote();
  quote.then((q) => {
    div.textContent = q;
  });

  buttonContainer.parentElement.appendChild(div);

  return div;
}

function getQuote() {
  return fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => data.content);
}
