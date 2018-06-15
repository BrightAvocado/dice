<template>
  <div class="tile-container"
       :style="{'background-color': color}"
       @click="click()">
    <h1>{{count}}</h1>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {
      owner: {
        required: true
      },
      x_pos: {
        type: Number,
        required: true
      },
      y_pos: {
        type: Number,
        required: true
      },
      count: {
        type: Number,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'attacker'
      ]),
      color() {
        if (this.owner === null) {
          return 'black';
        } else {
          return this.owner.color;
        }
      },
      hovering_color() {
        if (this.owner === this.attacker) {
          return 'lightblue';
        } else {
          return this.color;
        }
      }
    },
    methods: {
      click() {
        if (this.attacker === this.owner) { //todo : use another condition
          this.attackFromThisTile();
        } else {
          this.attackThisTile();
        }
      },
      attackFromThisTile() {
        this.$store.dispatch('setAttacker', {
          x_pos: this.x_pos,
          y_pos: this.y_pos
        })
      },
      attackThisTile() {
        // TODO:
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
