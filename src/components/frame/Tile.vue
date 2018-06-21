<template>
  <div class="tile-container"
       :style="{'background-color': color}"
       @click="click()">
    <h2>{{tile.count}}</h2>
    <p>({{tile.x_pos}}, {{tile.y_pos}})</p>
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
      },
      board: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'is_regenerating',
        'current_player',
        'attacker',
        'surrounding_enemy_tiles'
      ]),
      color() {
        if (this.owner === null) {
          return 'black';
        } else if (this.surrounding_enemy_tiles.includes(this.tile)) {
          return 'lightblue';
        } else {
          return this.owner.color;
        }
      }
    },
    methods: {
      click() {
        if (this.is_regenerating) {
          if (this.current_player === this.owner) {
            if (this.current_player.amount_spare_dice > 1) {
              this.current_player.incrementTileCount(this.tile);
            } else {
              this.current_player.incrementTileCount(this.tile);
              this.$store.dispatch('toggleRegeneration');
            }
          }
        } else {
          if (this.current_player === this.owner && this.tile.count > 1) {
            this.attackFromThisTile();
          } else if (this.surrounding_enemy_tiles.includes(this.tile) && this.attacker !== null) {
            this.attackThisTile();
          }
        }
      },
      attackFromThisTile() {
        this.$store.dispatch('setAttacker', this.tile);
        this.$store.dispatch('setSurroundingEnemyTiles', this.board.getSurroundingEnemyTiles(this.tile.x_pos, this.tile.y_pos))
      },
      attackThisTile() {
        this.$store.dispatch('setAttackee', this.tile);
        this.board.attack(this.attacker, this.tile);
        this.$store.dispatch('nextMove');
      }
    }
  }
</script>

<style scoped>
  .tile-container {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    color: black;
    user-select: none;
  }
  .tile-container:hover {
    cursor: pointer;
    opacity: 0.8 !important;
  }
  .tile-container h2 {
    margin-bottom: 0;
  }
</style>
