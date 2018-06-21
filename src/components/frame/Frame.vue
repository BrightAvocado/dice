<template>
  <div v-if="frame !== null"
        class="frame-container">
    <Board :frame="frame"></Board>
  </div>
</template>

<script>
  import Board from './Board'

  import Frame from '../../js/frame/Frame'

  export default {
    data() {
      return {
        frame: new Frame(5, 5, 4)
      };
    },
    components: {
      Board
    },
    created() {
      this.$store.dispatch('setPlayers', this.frame.getPlayers());
      this.$store.dispatch('setCurrentPlayer', this.frame.getPlayers()[0]);
    }
  }
</script>

<style scoped>
</style>
