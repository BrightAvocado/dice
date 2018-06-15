import {Tile} from './Tile'

export const Territory = function (owner, tiles) {
  this.owner = owner;//Owner of the territory
  this.tiles = tiles;//List of the tiles that are in this territory
}

Territory.prototype.addTile = function(tile) {
  this.tiles.push(tile);
}

Territory.prototype.hasTile = function(x_pos, y_pos) {
  let has_tile = false;
  this.tiles.forEach((tile) => {
    if (tile.x_pos == x_pos && tile.y_pos == y_pos) {
      has_tile = true;
    }
  });
  return has_tile;
}
