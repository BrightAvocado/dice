<template>
  <div class="board-row-container">
    <div v-if="even_row" class="empty-space">
    </div>
    <Tile v-for="column in Array.from(Array(width).keys())"
          :board="board"
          :owner="board.getOwner(tiles[column].x_pos, tiles[column].y_pos)"
          :tile="tiles[column]">
    </Tile>
  </div>
</template>

<script>
  import Tile from './Tile'

  export default {
    components: {
      Tile
    },
    props: {
      tiles: {
        type: Array,
        required: true
      },
      width: {
        type: Number,
        required: true
      },
      even_row: {
        type: Boolean,
        required: true
      },
      board: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
  .board-row-container {
    display: flex;
    flex-direction: row;
  }
  .empty-space {
    width: 50px;
  }
</style>
