// &#11093; CIRCULO
// &#10060; CRUZ

const squares = document.querySelectorAll('.square');
const currentPlayer = document.querySelector('#player');
const currentWinner = document.querySelector('#winner');
const restartButton = document.querySelector('#restart');
let player = null, winner = null, lockBoard = false;

switchPlayer('&#10060;');

function pickSquare(){
  if(this.innerHTML !== '' || lockBoard === true) return;

  this.innerHTML = player;

  if(player === '&#10060;'){
    player = '&#11093;';
  }else{
    player = '&#10060;';
  }

  switchPlayer(player);
  checkWinner();
}

function switchPlayer(p){
  player = p;
  currentPlayer.innerHTML = player;
}

function checkWinner(){
  //check row
  if(checkSequence(squares[0],squares[1],squares[2])){
    highlightSquares(squares[0],squares[1],squares[2]);
    switchWinner(squares[0]);
    return;
  }
  if(checkSequence(squares[3],squares[4],squares[5])){
    highlightSquares(squares[3],squares[4],squares[5]);
    switchWinner(squares[3]);
    return;
  }
  if(checkSequence(squares[6],squares[7],squares[8])){
    highlightSquares(squares[6],squares[7],squares[8]);
    switchWinner(squares[6]);
    return;
  }
  //check column
  if(checkSequence(squares[0],squares[3],squares[6])){
    highlightSquares(squares[0],squares[3],squares[6]);
    switchWinner(squares[0]);
    return;
  }
  if(checkSequence(squares[1],squares[4],squares[7])){
    highlightSquares(squares[1],squares[4],squares[7]);
    switchWinner(squares[1]);
    return;
  }
  if(checkSequence(squares[2],squares[5],squares[8])){
    highlightSquares(squares[2],squares[5],squares[8]);
    switchWinner(squares[2]);
    return;
  }
  //check diagonal
  if(checkSequence(squares[0],squares[4],squares[8])){
    highlightSquares(squares[0],squares[4],squares[8]);
    switchWinner(squares[0]);
    return;
  }
  if(checkSequence(squares[2],squares[4],squares[6])){
    highlightSquares(squares[2],squares[4],squares[6]);
    switchWinner(squares[2]);
    return;
  }
}

function switchWinner(square){
  winner = square.innerHTML;
  currentWinner.innerHTML = winner;
  lockBoard = true;
}

function highlightSquares(sq1, sq2, sq3){
  sq1.style.background = '#0f0';
  sq2.style.background = '#0f0';
  sq3.style.background = '#0f0';
}

function checkSequence(sq1, sq2, sq3){
  let isEqual = false;

  if(sq1.innerHTML !== '' && sq1.innerHTML === sq2.innerHTML && sq2.innerHTML === sq3.innerHTML ) isEqual = true;

  return isEqual;
}

function restart(){
  winner = null;
  currentWinner.innerHTML = '';
  lockBoard = false;

  squares.forEach( square => {
    square.innerHTML = '';
    square.style.background = '#eee';
  });
}

restartButton.addEventListener('click', restart);

squares.forEach( square => {
  square.addEventListener('click', pickSquare);
})