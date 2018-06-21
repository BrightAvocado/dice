import Tile from './Tile';
import Territory from './Territory';
import Player from './Player';

import {getSurroundingTiles} from '../helper/tiles_processing'

import {generateTiles} from '../helper/generateTiles'
import {generateTerritories} from '../helper/generateTerritories'

class Board {
  constructor(n_players, height, width) {
    this.tiles = generateTiles(this, height, width);//2D array containing the tiles
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
    return getSurroundingTiles([].concat(...this.tiles), x_pos, y_pos);
  }
  getSurroundingEnemyTiles(x_pos, y_pos) {
    let surrounding_tiles = this.getSurroundingTiles(x_pos, y_pos);
    let surrounding_enemy_tiles = surrounding_tiles.filter(tile => this.getOwner(tile.x_pos, tile.y_pos) !== this.getOwner(x_pos, y_pos));
    return surrounding_enemy_tiles;
  }
}

export default Board;
