<template>
  <div class="board-container">
    <BoardRow v-for="row in Array.from(Array(frame.height).keys())"
              :even_row="row%2 === 0"
              :tiles="frame.board.tiles[row]"
              :width="frame.width"
              :board="frame.board"></BoardRow>
  </div>
</template>

<script>
  import BoardRow from './BoardRow'

  export default {
    components: {
      BoardRow
    },
    props: {
      frame: {
        type: Object,
        required: true
      }
    },
    created() {
      console.log('surrounding tiles:', this.frame.board.getSurroundingTiles(0, 0));
      console.log('surroudning enemy tiles:', this.frame.board.getSurroundingEnemyTiles(0, 0));
      
    }
  }
</script>

<style scoped>
</style>
