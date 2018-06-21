class Player {
  constructor() {
    this.color = "#"+((1<<24)*Math.random()|0).toString(16); // random color
    this.amount_spare_dice = 5;
  }
  resetAmountSpareDice() {
    this.amount_spare_dice += 5;
  }
  incrementTileCount(tile) {
    this.amount_spare_dice--;
    tile.count++;
  }
}

export default Player;
