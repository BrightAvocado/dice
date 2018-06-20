import Tile from '../frame/Tile'

//Generate a 2D array containing the tiles that are on the board
// TODO: Make the Board more interesting than just a rectangle
export function generateTiles(board, height, width) {
  let generated_tiles = [];
  for (let i = 0; i < height; i++) {
    generated_tiles.push([]);
    for (let j = 0; j < width; j++) {
      generated_tiles[i].push(new Tile(i, j));
    }
  }
  return generated_tiles;
}
