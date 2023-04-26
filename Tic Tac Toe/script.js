let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

//Fun to handle a player's move
function handleMove(event) {
  const index = event.target.id - 1;

  //If the spot is already taken or the game is over, do nothing
  if (gameBoard[index] !== "" || checkWin(gameBoard)) {
    return;
  }

  //update game board with player's move
  gameBoard[index] = currentPlayer;
  event.target.innerText = currentPlayer;

  //check if the game is over
  const winner = checkWin(gameBoard);
  if (winner) {
    if (winner === "X") alert("Congratulations! Player1 wins");
    else alert("Congratulations! Player2 wins");
  } else if (!gameBoard.includes("")) {
    alert("Draw!");
  }

  //Switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWin(board) {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //columns
    [0, 4, 8],
    [2, 4, 6], //diagonals
  ];

  for (let combo of winningCombination) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return null;
}

//Add event listner to each grid button
const gridButtons = document.querySelectorAll(".grid");
gridButtons.forEach((button) => button.addEventListener("click", handleMove));
