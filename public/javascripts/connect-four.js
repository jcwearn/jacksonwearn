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

  if(y + 1 > 0)
    this.north = y + 1;

   if(y - 1 > 0)
     this.south = y + 1;

   if(x + 1 > 0)
     this.east = y + 1;

   if(y + 1 > 0)
    this.west = y + 1;
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
