<template>
  <div class="board-row-container">
    <Tile v-for="column in Array.from(Array(width).keys())"
          :owner="tiles[column].owner"
          :count="tiles[column].count"
          :x_pos="tiles[column].x_pos"
          :y_pos="tiles[column].y_pos">
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
      }
    }
  }
</script>

<style scoped>
  .board-row-container {
    display: flex;
    flex-direction: row;
  }
</style>
