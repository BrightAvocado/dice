import Tile from './Tile';
import Territory from './Territory';
import Player from './Player';

import {getSurroundingTiles} from '../helper/tiles_processing'

import {generateTiles} from '../helper/generateTiles'
import {generateTerritories} from '../helper/generateTerritories'

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
}

export default Board;
