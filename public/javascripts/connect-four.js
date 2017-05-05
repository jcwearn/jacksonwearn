const EMPTY = 0;
const PURPLE = 1;
const GREEN = 2;

function Game() {
  this.board = new Board();
  this.playerTurn = PURPLE;
};

function Space(x, y) {
  this.state = EMPTY;
  this.x = x;
  this.y = y;
}

function Board(x, y) {
  let xMax = x || 7;
  let yMax = y || 6;
  let board = new Array();

  for (let x = 0; x < xMax; x++) {
    board[x] = new Array();
    for (let y = 0; y < yMax; y++) {
      board[x][y] = new Space(x, y);
    }
  }

  return board;
}

function getRow(board, rowNum) {
  let col = board.map(function(value) { return value[rowNum]; }).filter(n => n);
  if (col.length)
    return col;
}

function getCol(board, colNum) {
  let row = board[colNum];
  if(row && row.length)
    return row;
}
