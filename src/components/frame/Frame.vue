<template>
  <div  v-if="frame !== null"
        class="frame-container">
    <Board :frame="frame"></Board>
  </div>
</template>

<script>
  import Board from './Board'

  import {Frame} from '../../js/frame/Frame'

  import {mapGetters} from 'vuex'

  export default {
    created() {
      this.$store.dispatch('setFrame', new Frame(3,3,2));
    },
    computed: {
      ...mapGetters([
        'frame'
      ])
    },
    components: {
      Board
    }
  }
</script>

<style scoped>
</style>
