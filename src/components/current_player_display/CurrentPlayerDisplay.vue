<template>
  <div class="current-player-display-container">
    <h2>Current Player :</h2>
    <div class="current-player-display-color"
         :style="{'background-color': current_player.color}">
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'current_player'
      ])
    }
  }
</script>

<style scoped>
  .current-player-display-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .current-player-display-color{
    height: 100px;
    width: 100px;
    border: 1px solid black;
  }
</style>
