<template>
  <div class="next-player-button-container" @click="click()">
    <h3>Finish round</h3>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    methods: {
      click() {
        this.$store.dispatch('nextRound');
      }
    }
  }
</script>

<style scoped>
  .next-player-button-container {
    width: 200px;
    height: 40px;
    background: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #90A4AE;
  }
  .next-player-button-container:hover {
    background-color: #CFD8DC;
    cursor: pointer;
  }
  .next-player-button-container:active {
    cursor: pointer;
    background-color: #ECEFF1;
  }
</style>
