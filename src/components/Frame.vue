<template>
  <div class="frame-container">
    <Board :frame="frame"></Board>
  </div>
</template>

<script>
  import Board from './Board'

  let Frame = require('../js/Frame').Frame;

  let frame = new Frame(3, 3);

  export default {
    data() {
      return {
        frame
      };
    },
    components: {
      Board
    }
  }
</script>

<style scoped>
</style>
