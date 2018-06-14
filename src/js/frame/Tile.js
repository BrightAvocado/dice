function Tile(board, x_pos, y_pos) {
  this.board = board;
  this.x_pos = x_pos;
  this.y_pos = y_pos;
  this.count = 0;
}

Tile.prototype.setCount = function (count) {
  this.count = count;
}

Tile.prototype.getOwner = function () {
  let owner = null;
  this.board.territories.forEach((territory) => {
    if (territory.hasTile(this.x_pos, this.y_pos)) {
      owner = territory.owner;
    }
  });
  return owner;
}

module.exports.Tile = Tile;
