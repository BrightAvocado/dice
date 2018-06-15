import Board from './Board'

class Frame {
  constructor(height, width, n_players) {
    this.height = height;
    this.width = width;
    this.board = new Board(n_players, height, width);
  }
  getPlayers() { //return a list containing the players
    return this.board.territories.map(territory => territory.owner);
  }
}

export default Frame;
