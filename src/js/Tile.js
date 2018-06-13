function Tile(x_pos, y_pos) {
  this.x_pos = x_pos;
  this.y_pos = y_pos;
  this.owner = null;
  this.count = 0;
}

Tile.protoype = {
  constructor: Tile,
  setOwner: function (owner) {
    this.owner = owner;
  },
  setCount: function (count) {
    this.count = count;
  }
}

module.exports.Tile = Tile;
