import Tile from './Tile';
import Territory from './Territory';
import Player from './Player';

import {getSurroundingTiles} from '../helper/tiles_processing'
import {generateTiles} from '../helper/generateTiles'
import {generateTerritories} from '../helper/generateTerritories'
import {score} from '../helper/score'

class Board {
  constructor(n_players, height, width) {
    this.tiles = generateTiles(this, height, width);//2D array containing the Tiles
    this.territories = generateTerritories(n_players, this.tiles)//list of Territories
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
  getTerritory(owner) {
    return this.territories.find(territory => territory.owner === owner);
  }
  getSurroundingTiles(x_pos, y_pos) {
    return getSurroundingTiles([].concat(...this.tiles), x_pos, y_pos);
  }
  getSurroundingEnemyTiles(x_pos, y_pos) {
    let surrounding_tiles = this.getSurroundingTiles(x_pos, y_pos);
    let surrounding_enemy_tiles = surrounding_tiles.filter(tile => this.getOwner(tile.x_pos, tile.y_pos) !== this.getOwner(x_pos, y_pos));
    return surrounding_enemy_tiles;
  }
  attack(attacker, attackee) {
    let attacker_score = score(attacker.count);
    let attackee_score = score(attackee.count);
    if (attacker_score > attackee_score) { //Attacker wins
      this.seizeTile(attacker, attackee);
    } else { //Attackee wins
      attacker.count = 1;
    }
  }
  seizeTile(tile_seizing, tile_seized) {
    tile_seized.count = Math.max(tile_seizing.count - 1, 1);
    tile_seizing.count = 1;
    this.getTerritory(this.getOwner(tile_seized.x_pos, tile_seized.y_pos)).removeTile(tile_seized);
    this.getTerritory(this.getOwner(tile_seizing.x_pos, tile_seizing.y_pos)).addTile(tile_seized);
  }
}

export default Board;
