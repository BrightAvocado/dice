let Tile = require('./Tile').Tile;

function Board (height, width) {
   this.tiles = generateTiles(height, width);
}

Board.protoype = {
  constructor: Board
}

//Generate a 2D array containing the tiles that are on the board
// TODO: Make the Board more interesting than just a rectangle
function generateTiles(height, width) {
  let generated_tiles = [];
  for (i = 0; i < height; i++) {
    generated_tiles.push([]);
    for (j = 0; j < width; j++) {
      generated_tiles[i].push(new Tile(i, j));
    }
  }
  return generated_tiles;
}

module.exports.Board = Board;
