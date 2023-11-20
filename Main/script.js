var currentPlayer = 'X';
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
var movesCount = 0;
var roundCounter = 1;
var canPickUp = false;

function makeMove(row, col) {
  if (canPickUp) {
    if (board[row][col] === currentPlayer) {
      board[row][col] = '';
      document.getElementsByClassName('cell')[row * 3 + col].innerHTML = '';
      canPickUp = false;
      return;
    }
  }

  if (board[row][col] === '') {
    if (countMarkers(currentPlayer) < 3) {
      board[row][col] = currentPlayer;
      document.getElementsByClassName('cell')[row * 3 + col].innerHTML = currentPlayer;
      movesCount++;
    } else {
      removeOldestMarker(currentPlayer);
      board[row][col] = currentPlayer;
      document.getElementsByClassName('cell')[row * 3 + col].innerHTML = currentPlayer;
    }
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + " wins!");
      resetBoard();
    } else {
      roundCounter++;
      updateRoundCounter();
    }
  }
  if (countMarkers(currentPlayer) === 3) {
    canPickUp = true;
  }
}

function countMarkers(player) {
  var count = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === player) {
        count++;
      }
    }
  }
  return count;
}

function removeOldestMarker(player) {
  var oldestMove = Infinity;
  var oldestRow, oldestCol;

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i][j] === player) {
        var currentMove = i * 3 + j;
        if (currentMove < oldestMove) {
          oldestMove = currentMove;
          oldestRow = i;
          oldestCol = j;
        }
      }
    }
  }

  board[oldestRow][oldestCol] = '';
  document.getElementsByClassName('cell')[oldestRow * 3 + oldestCol].innerHTML = '';
}

function checkWin(player) {
  // Check rows
  for (var i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  // Check columns
  for (var j = 0; j < 3; j++) {
    if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}

function resetBoard() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  movesCount = 0;
  currentPlayer = 'X';
  roundCounter = 1;
  updateRoundCounter();
  for (var i = 0; i < 9; i++) {
    document.getElementsByClassName('cell')[i].innerHTML = '';
  }
}

function updateRoundCounter() {
  document.getElementById('round-counter').innerHTML = "Round: " + roundCounter;
}