<template>
  <div class="board-container">
    <BoardRow v-for="row in Array.from(Array(frame.height).keys())" :even_row="row%2 === 0" :tiles="frame.board.tiles[row]" :width="frame.width"></BoardRow>
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
    }
  }
</script>

<style scoped>
</style>
