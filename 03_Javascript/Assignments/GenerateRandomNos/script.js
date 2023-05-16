// javascript code goes here
function displayRandomNumber() {
  const randomNum = Math.floor(Math.random() * 41) - 20;
  const numEle = document.getElementById("num");
  numEle.textContent = randomNum;
}
