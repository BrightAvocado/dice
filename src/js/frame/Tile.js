class Tile {
  constructor(x_pos, y_pos) {
    this.x_pos = x_pos;
    this.y_pos = y_pos;
    this.count = Math.ceil(Math.random()*4); //Number of dice
  }
}

export default Tile;
