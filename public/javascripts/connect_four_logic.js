const EMPTY = 0;
const PURPLE = 1;
const GREEN = 2;

function Game() {
  this.board = new Board();
  this.playerTurn = PURPLE;
  this.turnCount = 0;
};

Game.prototype.takeTurn = function(colSelection) {
  this.board.spaces = updateBoard(this.board.spaces, colSelection, this.playerTurn);
  if (this.playerTurn === PURPLE)
    this.playerTurn = GREEN;
  else
    this.playerTurn = PURPLE;

  this.turnCount = this.turnCount + 1;
  if (this.turnCount >= 7) {
    let winner = scanBoardForWinner(this.board);
    if (winner) {
      (winner === PURPLE) ? console.log("Purple Player wins") : console.log("Green Player wins");
    }
  }
};

function scanBoardForWinner(board) {
  let spaces = board.spaces;
  var winner = 0;

  outerLoop:
  for(var x in spaces) {
    let col = spaces[x];
    innerLoop:
    for(var y in col) {
      let space = spaces[x][y];
      if (space.state !== EMPTY) {
	winner = checkConnectFour(board, space);
	if (winner) {
	  break outerLoop;
	}
      }
    }
  }

  return winner;
};

function checkConnectFour(board, space) {
  let x = space.x;
  let y = space.y;
  let neighbors = space.neighbors;
  let connectionLength;

  neighbors.forEach(function(neighbor) {
    if(isValidSpace(neighbor.x, neighbor.y, board.xMax, board.yMax)) {
      let neighborSpace = board.spaces[neighbor.x][neighbor.y];
      if (space.state === neighborSpace.state) {
	connectionLength = checkNextSpace(board, neighborSpace, neighbor.direction, 2);
      }
    }
  });

  if (connectionLength === 4) {
    return space.state;
  }
}

function checkNextSpace(board, space, direction, connectionLength)  {
  if (connectionLength === 4) {
    return connectionLength;
  } else {
    let neighborCoordinates = space.neighbors.filter(function(value) { return value.direction === direction; });
    let x = neighborCoordinates[0].x;
    let y = neighborCoordinates[0].y;
    if(isValidSpace(x, y, board.xMax, board.yMax)) {
      let neighborSpace = board.spaces[x][y];
      if(neighborSpace.state === space.state) {
	return checkNextSpace(board, neighborSpace, direction, connectionLength + 1);
      } else {
	return connectionLength;
      }
    } else {
      return connectionLength - 1;
    }
  }
}

function isValidSpace(x, y, xMax, yMax) {
  if (x >= 0 && x <= xMax && y >= 0 && y <= yMax)
    return true;
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
