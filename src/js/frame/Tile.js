export const Tile = function (board, x_pos, y_pos) {
  this.x_pos = x_pos;
  this.y_pos = y_pos;
  this.count = 0;
}

Tile.prototype.setCount = function (count) {
  this.count = count;
}
