import Player from '../frame/Player';
import Territory from '../frame/Territory';

//Return a list of length n_territories containing lists containing the Tiles in each territory
// TODO: make that function interesting
export function generateTerritories(n_territories, tiles) {
  let players = generatePlayers(n_territories);//List of players
  let territories = [];

  //Populate territories with n_territories empty territories
  for (let i = 0; i < n_territories; i++) {
    territories.push(new Territory(players[i], []));
  }

  for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {
      let selected_player_index = Math.ceil(Math.random() * n_territories) - 1;
      territories[selected_player_index].addTile(tiles[x][y]);
    }
  }
  return territories;
}

//Returns a list of Player
function generatePlayers(n_players) {
  let players = [];
  for (let i = 0; i < n_players; i++) {
    players.push(new Player());
  }
  return players;
}
