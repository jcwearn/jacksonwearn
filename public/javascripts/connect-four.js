function Game() {
  this.board = new Board();
  this.longestConnection = 0;
};

const EMPTY = 0;
const PURPLE = 1;
const GREEN = 2;

function Space(x, y) {
  this.state = EMPTY;
  this.x = x;
  this.y = y;
}

Space.prototype.getSurroundingSpaces = function() {
  let surroundingSpaces = {};
  let north = this.y + 1;
  let south = this.y - 1;
  let east = this.x + 1;
  let wesst = this.x - 1;

  if (north > 0)
    surroundingSpaces.north = north;

  if (south > 0)
    surroundingSpaces.north = north;

  if (east > 0)
    surroundingSpaces.north = north;

  if (north > 0)
    surroundingSpaces.north = north;

  return surroundingSpaces;
};

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

var board = new Board();
board[0][0].state = GREEN;
console.log(board[0][0]);
