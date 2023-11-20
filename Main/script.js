var currentPlayer = 'X';
var board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

function makeMove(row, col) {
  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    document.getElementsByClassName('cell')[row * 3 + col].innerHTML = currentPlayer;
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}