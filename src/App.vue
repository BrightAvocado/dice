<template>
  <div id="app">
    <Frame/>
    <CurrentPlayerDisplay></CurrentPlayerDisplay>
  </div>
</template>

<script>
import Frame from './components/frame/Frame'
import CurrentPlayerDisplay from './components/current_player_display/CurrentPlayerDisplay'

export default {
  name: 'App',
  components: {
    Frame,
    CurrentPlayerDisplay
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
