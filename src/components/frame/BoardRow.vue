<template>
  <div class="board-row-container">
    <div v-if="even_row" class="empty-space">
    </div>
    <Tile v-for="column in Array.from(Array(width).keys())"
          :owner="board.getOwner(tiles[column])"
          :count="tiles[column].count"
          :x_pos="tiles[column].x_pos"
          :y_pos="tiles[column].y_pos">
    </Tile>
  </div>
</template>

<script>
  import Tile from './Tile'
  import {mapGetters} from 'vuex'

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
      }
    },
    computed: {
      ...mapGetters([
        'board'
      ])
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
