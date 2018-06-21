<template>
  <div class="current-player-display-container">
    <div v-for="player in players"
         :style="{'background-color': player.color, 'opacity': (player === current_player) ? 1: 0.1}"
         class="player-square">
         <h1>{{player.amount_spare_dice}}</h1>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'players',
        'current_player'
      ])
    }
  }
</script>

<style scoped>
  .current-player-display-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 40px;
  }
  .player-square {
    height: 100px;
    width: 100px;
    border: 1px solid black;
  }
  .player-square h1 {
    color: black;
  }
</style>
