function Player() {
  this.color = "#"+((1<<24)*Math.random()|0).toString(16); // random color 
}

module.exports.Player = Player;
