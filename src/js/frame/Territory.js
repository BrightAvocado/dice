class Territory {
  constructor(owner, tiles) {
    this.owner = owner;//Owner of the territory
    this.tiles = tiles;//List of the tiles that are in this territory
  }
  addTile(tile) {
    this.tiles.push(tile);
  }
  removeTile(tile) {
    this.tiles.splice(this.tiles.indexOf(tile), 1);
  }
  hasTile(x_pos, y_pos) {
    let has_tile = false;
    this.tiles.forEach((tile) => {
      if (tile.x_pos == x_pos && tile.y_pos == y_pos) {
        has_tile = true;
      }
    });
    return has_tile;
  }
}

export default Territory;
