class Player {
  constructor() {
    this.color = "#"+((1<<24)*Math.random()|0).toString(16); // random color
  }
}

export default Player;
