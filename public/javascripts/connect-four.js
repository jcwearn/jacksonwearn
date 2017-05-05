const EMPTY = 0;
const PURPLE = 1;
const GREEN = 2;

function Game() {
  this.board = new Board();
  this.playerTurn = PURPLE;
  this.turnCount = 0;
  this.connections = {
    PURPLE: [],
    GREEN: []
  };
};

Game.prototype.takeTurn = function(colSelection) {
  this.board.spaces = updateBoard(this.board.spaces, colSelection, this.playerTurn);
  if (this.playerTurn === PURPLE)
    this.playerTurn = GREEN;
  else
    this.playerTurn = PURPLE;

  this.turnCount++;
  scanBoardForConnections(this.board);
};

function scanBoardForConnections(board) {
  let spaces = board.spaces;
  for(let x = 0; x < spaces.length; x++) {
    let col = spaces[x];
    for(let y = 0; y < col.length; y++) {
      let space = spaces[x][y];
      getConnections(board, space);
    }
  }
};

function getConnections(board, space) {
  let x = space.x;
  let y = space.y;
  let neighbors = space.neighbors;

  neighbors.forEach(function(neighbor) {
    if(isValidSpace(neighbor.x, neighbor.y, board.xMax, board.yMax)) {
      var neighborSpace = board.spaces[neighbor.x][neighbor.y];
      if (space.state == neighborSpace.state) {
	checkNextSpace(board, neighborSpace.direction);
      }
    }
  });
}

function isValidSpace(x, y, xMax, yMax) {
  if (x >= 0 && x <= xMax && y >= 0 && y <= yMax)
    return true;
}

function checkNextSpace(board, direction) {

}

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
  this.neighbors = setNeighbors(x, y);
}

function setNeighbors(x, y) {
  let neighbors = [
    { direction: "NW", x: x - 1, y: y + 1 },
    { direction: "N" , x: x    , y: y + 1 },
    { direction: "NE", x: x + 1, y: y + 1 },
    { direction: "E" , x: x - 1, y: y     },
    { direction: "W" , x: x + 1, y: y     },
    { direction: "SW", x: x - 1, y: y - 1 },
    { direction: "S" , x: x    , y: y - 1 },
    { direction: "SE", x: x + 1, y: y - 1 }
  ];

  return neighbors;
};

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
  this.xMax = xMax - 1;
  this.yMax = yMax - 1;
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
game.takeTurn(1);
game.takeTurn(0);
game.takeTurn(1);
debugger;
