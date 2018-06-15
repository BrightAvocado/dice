<template>
  <div class="tile-container" :style="{'background-color': color}">
    <h1>{{count}}</h1>
  </div>
</template>

<script>
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
      color() {
        if (this.owner === null) {
          return 'black';
        } else {
          return this.owner.color;
        }
      }
    },
    methods: {
      attackFromThisTile() {
// TODO:
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
