let cells = document.querySelectorAll(".cell");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlay = "X";
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

clickbox = (index) => {
  if (board[index] !== "") {
    return;
  }
  board[index] = currentPlay;
  cells[index].innerHTML = currentPlay;
  let winner = checkwinner();
  if (winner) {
    let winners = document.getElementsByClassName("popUpWinner");
    for (let i = 0; i < winners.length; i++) {
      winners[i].style.display = "block";
    }

    winnerAnnounce.innerHTML = `The Winner is ${currentPlay}`;
    return;
  }

  currentPlay = currentPlay == "X" ? "O" : "X";
  tellTurn.innerHTML = `Player ${currentPlay}'s Turn`;
  console.log(tellTurn.value);
};

checkwinner = () => {
  for (let combos of winningCombinations) {
    let [a, b, c] = combos;
    if (board[a] && board[a] == board[b] && board[a] == board[c]) {
      return board[a];
    }
  }
  return null;
};


restart=()=>{
    
}
