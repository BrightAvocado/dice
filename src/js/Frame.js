let Board = require('./Board').Board;

function Frame(height, width) {
  this.height = height;
  this.width = width;
  this.board = new Board(height, width);
}

module.exports.Frame = Frame;
