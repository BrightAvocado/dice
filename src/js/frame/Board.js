import Tile from './Tile';
import Territory from './Territory';
import Player from './Player';

class Board {
  constructor(n_players, height, width) {
    this.tiles = generateTiles(this, height, width);//list of Tiles
    this.territories = generateTerritories(n_players, this.tiles)//list of territories
  }
  getOwner(x_pos, y_pos) {
    let owner = null;
    this.territories.forEach((territory) => {
      if (territory.hasTile(x_pos, y_pos)) {
        owner = territory.owner;
      }
    });
    return owner;
  }
  getSurroundingTiles(x_pos, y_pos) {
    let even_row = x_pos%2 === 0;//The first row from the top is considered to be an even row
    if (even_row === true) {
      return this._getSurroundingTilesOnEvenRow(x_pos, y_pos);
    }
  }
  _getSurroundingTilesOnEvenRow(x_pos, y_pos) {
    let surrounding_tiles = [];
    surrounding_tiles.push({
      x_pos,
      y_pos: y_pos + 1
    });
    surrounding_tiles.push({
      x_pos,
      y_pos: y_pos - 1
    });
    surrounding_tiles.push({
      x_pos: x_pos + 1,
      y_pos
    });
    surrounding_tiles.push({
      x_pos: x_pos - 1,
      y_pos
    });
    surrounding_tiles.push({
      x_pos: x_pos - 1,
      y_pos: y_pos + 1
    });
    surrounding_tiles.push({
      x_pos: x_pos + 1,
      y_pos: y_pos + 1
    });

    let tiles_to_remove = [];
    for (let surrounding_tile of surrounding_tiles) {
      if (isTileOutOfBoard(this, surrounding_tile.x_pos, surrounding_tile.y_pos)) {
        tiles_to_remove.push(surrounding_tile);
      }
    }

    for (let tile_to_remove of tiles_to_remove) {
      surrounding_tiles.splice(surrounding_tiles.indexOf(tile_to_remove), 1);
    }
    return surrounding_tiles;
  }
}

function isTileOutOfBoard(board, x_pos, y_pos) {
   let list_tiles = [].concat(...board.tiles);
   return list_tiles.find(tile => tile.x_pos === x_pos && tile.y_pos === y_pos) === undefined;
}


//Return a list of length n_territories containing lists containing the Tiles in each territory
// TODO: make that function interesting
function generateTerritories(n_territories, tiles) {
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
};

//Generate a 2D array containing the tiles that are on the board
// TODO: Make the Board more interesting than just a rectangle
function generateTiles(board, height, width) {
  let generated_tiles = [];
  for (let i = 0; i < height; i++) {
    generated_tiles.push([]);
    for (let j = 0; j < width; j++) {
      generated_tiles[i].push(new Tile(i, j));
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

export default Board;
