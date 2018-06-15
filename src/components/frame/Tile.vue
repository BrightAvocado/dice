<template>
  <div class="tile-container"
       :style="{'background-color': color}"
       @click="click()">
    <h1>{{tile.count}}</h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {
      owner: {
        required: true
      },
      tile: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'current_player',
        'attacker'
      ]),
      color() {
        if (this.owner === null) {
          return 'black';
        } else {
          return this.owner.color;
        }
      }
    },
    methods: {
      click() {
        if (this.current_player === this.owner && this.attacker === null) {
          this.attackFromThisTile();
        } else if (this.current_player !== this.owner && this.attacker !== null) {
          this.attackThisTile();
        }
      },
      attackFromThisTile() {
        this.$store.dispatch('setAttacker', this.tile);
      },
      attackThisTile() {
        this.$store.dispatch('setAttackee', this.tile);
      }
    }
  }
</script>

<style scoped>
  .tile-container {
    height: 100px;
    width: 100px;
    border: 1px solid black;
  }
  .tile-container:hover {
    cursor: pointer;
    background-color: lightblue !important;
  }
</style>
