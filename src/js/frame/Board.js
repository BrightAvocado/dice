let Tile = require('./Tile').Tile;
let Territory = require('./Territory').Territory;
let Player = require('./Player').Player;

export const Board = function (n_players, height, width) {
  this.tiles = generateTiles(this, height, width);//list of Tiles
  this.territories = generateTerritories(n_players, this.tiles)//list of territories
}

//Return a list of length n_territories containing lists containing the Tiles in each territory
// TODO: make that function interesting
function generateTerritories(n_territories, tiles) {
  let players = generatePlayers(n_territories);//List of players
  let territories = [];
  for (let i = 0; i < n_territories; i++) {
    territories.push(new Territory(players[i], []));
  }

  for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {
      let selected_player_index = Math.ceil(Math.random() * n_territories) - 1;
      if (typeof selected_player_index === Number) {
        territories[selected_player_index].addTile(tiles[x][y]);
      }
    }
  }
  return territories;
};

//Generate a 2D array containing the tiles that are on the board
// TODO: Make the Board more interesting than just a rectangle
function generateTiles(board, height, width) {
  let generated_tiles = [];
  for (let i = 0; i < height; i++) {
    generated_tiles.push([]);
    for (let j = 0; j < width; j++) {
      generated_tiles[i].push(new Tile(board, i, j));
    }
  }
  return generated_tiles;
}

//Returns a list of Player
function generatePlayers(n_players) {
  let players = [];
  for (let i = 0; i < n_players; i++) {
    players.push(new Player());
  }
  return players;
}
