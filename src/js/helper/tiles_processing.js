export function getSurroundingTiles(tiles, x_pos, y_pos) {
  let even_row = x_pos%2 === 0;//The first row from the top is considered to be an even row
  if (even_row === true) {
    return getSurroundingTilesOnEvenRow(tiles, x_pos, y_pos);
  } else {
    return getSurroundingTilesOnOddRow(tiles, x_pos, y_pos);
  }
}

function isTileOutOfBoard(tiles, x_pos, y_pos) {
  return tiles.find(board_tile => board_tile.x_pos === x_pos && board_tile.y_pos === y_pos) === undefined;
}

function getTile(tiles, x_pos, y_pos) {
  return tiles.find(tile => tile.x_pos === x_pos && tile.y_pos === y_pos);
}

//Return a list of the Tiles surrounding the `tile`
function getSurroundingTilesOnEvenRow(tiles, x_pos, y_pos) {
  let positions_surrounding_tiles = [];
  positions_surrounding_tiles.push({
    x_pos,
    y_pos: y_pos + 1
  });
  positions_surrounding_tiles.push({
    x_pos,
    y_pos: y_pos - 1
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos + 1,
    y_pos
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos - 1,
    y_pos
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos - 1,
    y_pos: y_pos + 1
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos + 1,
    y_pos: y_pos + 1
  });

  // Remove from `positions_surrounding_tiles` all the tiles that are out of the board
  let positions_tiles_to_remove = [];
  for (let positions_surrounding_tile of positions_surrounding_tiles) {
    if (isTileOutOfBoard(tiles, positions_surrounding_tile.x_pos, positions_surrounding_tile.y_pos)) {
      positions_tiles_to_remove.push(positions_surrounding_tile);
    }
  }
  for (let position_tile_to_remove of positions_tiles_to_remove) {
    positions_surrounding_tiles.splice(positions_surrounding_tiles.indexOf(position_tile_to_remove), 1);
  }

  let surrounding_tiles = positions_surrounding_tiles.map(positions_tile => getTile(tiles, positions_tile.x_pos, positions_tile.y_pos));
  return surrounding_tiles;
}

function getSurroundingTilesOnOddRow(tiles, x_pos, y_pos) {
  let positions_surrounding_tiles = [];
  positions_surrounding_tiles.push({
    x_pos,
    y_pos: y_pos + 1
  });
  positions_surrounding_tiles.push({
    x_pos,
    y_pos: y_pos - 1
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos - 1,
    y_pos: y_pos - 1
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos - 1,
    y_pos
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos + 1,
    y_pos: y_pos - 1
  });
  positions_surrounding_tiles.push({
    x_pos: x_pos + 1,
    y_pos
  });

  // Remove from `positions_surrounding_tiles` all the tiles that are out of the board
  let positions_tiles_to_remove = [];
  for (let positions_surrounding_tile of positions_surrounding_tiles) {
    if (isTileOutOfBoard(tiles, positions_surrounding_tile.x_pos, positions_surrounding_tile.y_pos)) {
      positions_tiles_to_remove.push(positions_surrounding_tile);
    }
  }
  for (let position_tile_to_remove of positions_tiles_to_remove) {
    positions_surrounding_tiles.splice(positions_surrounding_tiles.indexOf(position_tile_to_remove), 1);
  }

  let surrounding_tiles = positions_surrounding_tiles.map(positions_tile => getTile(tiles, positions_tile.x_pos, positions_tile.y_pos));
  return surrounding_tiles;
}
