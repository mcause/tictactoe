const gameBoard = document.querySelector('.game-board');

let playerTurn = document.querySelector('.player-turn');
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


function handleBoxClick(e) {
  e.target.innerText = currentPlayer;
  gameState[e.target.getAttribute('data')] = currentPlayer

  checkWin()
  if (gameActive === false) {
    return
  }
  switchPlayer()

}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X' && 'O' ? 'X' : 'O';
  // Below code equals above code
  // if(currentPlayer === 'X'){
  //   currentPlayer = 'O'
  // }else{
  //   currentPlayer = 'X'
  // }
  playerTurn.innerHTML = currentPlayer + "'s turn";
}

function checkWin() {
  for (let i = 0; i < winningConditions.length; i++) {
    let condition = winningConditions[i]
    //[0,1,2] 
    if (
      gameState[condition[0]] === gameState[condition[1]] &&
      gameState[condition[0]] === gameState[condition[2]] &&
      gameState[condition[0]] !== ''
    ){
      console.log('winner')
      playerTurn.innerHTML = currentPlayer + ' Won!'
      gameActive = false 
    }
  }
  if(gameState.includes('') === false && gameActive){
    playerTurn.innerText = "Draw!"
    gameActive = false 
  }
}
// function checkDraw(){
//   for(let i = 0; i > gameState.length; i++){
//     let 
//   }
// }

  //create 9 boxes 
  for (let i = 0; i < 9; i++) {
    //create a reference div call box 
    const box = document.createElement('div');
    // setting an attribute 
    box.setAttribute('class', 'box');
    // setting an attribute
    box.setAttribute('data', i);
    // setting 
    box.addEventListener('click', handleBoxClick);

    gameBoard.appendChild(box);
  }

  const clearButton = document.querySelector('.clear-button');

  clearButton.addEventListener('click', () => {

    const boxes = document.querySelectorAll('.box');

    for (let i = 0; i < boxes.length; i++) {
      let currentBox = boxes[i];
      currentBox.innerText = '';
      currentPlayer = "X";
      gameState = ["", "", "", "", "", "", "", "", ""];
      gameActive = true;
      playerTurn.innerText = currentPlayer + " 's turn" ;
      gameState = ["", "", "", "", "", "", "", "", ""];

    }
  })



