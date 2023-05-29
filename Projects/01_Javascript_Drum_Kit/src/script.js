function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing"); // Apply the visual effect
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing"); // Remove the visual effect
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
