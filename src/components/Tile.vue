<template>
  <div class="tile-container">

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
    }
  }
</script>

<style scoped>
  .tile-container {
    height: 100px;
    width: 100px;
    background-color: blue;
  }
</style>
