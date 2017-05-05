const EMPTY = 0;
const PURPLE = 1;
const GREEN = 2;

function Game() {
  this.board = new Board();
  this.playerTurn = PURPLE;
  this.turnCount = 0;
  this.connections = [];
};

Game.prototype.takeTurn = function(colSelection) {
  this.board.spaces = updateBoard(this.board.spaces, colSelection, this.playerTurn);
  if (this.playerTurn === PURPLE)
    this.playerTurn = GREEN;
  else
    this.playerTurn = PURPLE;

  this.turnCount++;
};

function scanForConnections(board) {
  let purpleSpaces = [];
  let greenSpaces = [];
  let connections = [];

  board.spaces.forEach(function(col) {
    let purp = col.filter(function(space) { return space.state === PURPLE; });
    let green = col.filter(function(space) { return space.state === GREEN; });

    if (purp.length) {
      purp.forEach(function(space) { purpleSpaces.push(space); });
    }

    if (green.length) {
      green.forEach(function(space) { greenSpaces.push(space); });
    }
  });

  return connections;
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

function Board(x, y) {
  let xMax = x || 7;
  let yMax = y || 6;
  let spaces = new Array();

  for (let x = 0; x < xMax; x++) {
    spaces[x] = new Array();
    for (let y = 0; y < yMax; y++) {
      spaces[x][y] = new Space(x, y);
    }
  }

  this.spaces = spaces;
  this.rowLen = yMax;
  this.colLen = xMax;
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

var game = new Game();
game.takeTurn(0);
game.takeTurn(0);
game.takeTurn(0);
game.takeTurn(0);
game.scanForConnections();
