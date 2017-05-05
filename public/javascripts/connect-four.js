function Game() {
  this.board = new Board();
 };

const EMPTY = 0;
const PURPLE = 1;
const GREEN = 2;

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
}

Board.prototype.getSpace = function(x, y) {
  return this.spaces[x][y];
};
