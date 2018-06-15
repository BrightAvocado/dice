<template>
  <div id="app">
    <Frame/>
  </div>
</template>

<script>
import Frame from './components/frame/Frame'

export default {
  name: 'App',
  components: {
    Frame
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
