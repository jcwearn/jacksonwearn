const EMPTY = 0;
const PURPLE = 1;
const GREEN = 2;

function Game() {
  this.board = initBoard();
  this.playerTurn = PURPLE;
  this.turnCount = 0;
};

Game.prototype.takeTurn = function(colSelection) {
  this.board = updateBoard(this.board, colSelection, this.playerTurn);
  if (this.playerTurn === PURPLE)
    this.playerTurn = GREEN;
  else
    this.playerTurn = PURPLE;

  this.turnCount++;
};

Game.prototype.scanForConnections = function() {
  let numRows = this.board[0].length;
  for (let i; i < numRows; i++) {
    let row = getRow(this.board, i);

  }
};

function updateBoard(board, colSelection, color) {
  let col = getCol(board, colSelection);
  let spaceToUpdate;

  for (let i = 0; i < col.length; i++) {
    if (col[i].state === 0) {
      spaceToUpdate = col[i];
      break;
    }
  }

  let x = spaceToUpdate.x;
  let y = spaceToUpdate.y;
  board[x][y].state = color;
  return board;
}

function Space(x, y) {
  this.state = EMPTY;
  this.x = x;
  this.y = y;
}

function initBoard(x, y) {
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
