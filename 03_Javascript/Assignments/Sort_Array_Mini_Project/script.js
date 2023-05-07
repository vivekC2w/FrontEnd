window.onload = function () {
  init();
};
var arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
function init(params) {
  var ele = document.getElementById("array");
  console.log(arr);
  ele.innerText = arr;

  var sortBtn = document.getElementById("sort");
  sortBtn.addEventListener("click", function () {
    alert(
      arr
        .slice()
        .sort((a, b) => a - b)
        .toString()
    );
  });

  var revSortBtn = document.getElementById("revsort");
  revSortBtn.addEventListener("click", function () {
    arr.sort((a, b) => b - a);
    alert(arr.toString());
  });

  var firstFive = document.getElementById("first5");
  firstFive.addEventListener("click", function () {
    alert(arr.slice(0, 5).toString());
  });

  var lastFive = document.getElementById("last5");
  lastFive.addEventListener("click", function () {
    alert(arr.slice(-5).toString());
  });

  var avgButton = document.getElementById("avg");
  avgButton.addEventListener("click", function () {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    const avg = sum / arr.length;
    alert(avg);
  });
}
