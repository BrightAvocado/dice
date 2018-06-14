import {Board} from './Board'

export const Frame = function (height, width, n_players) {
  this.height = height;
  this.width = width;
  this.board = new Board(n_players, height, width);
}
