<template>
  <div id="container" class="container">
    <player-box v-for="(player, index) in players"
                :key="`player-${index}`"
                :player-index="index"
    />
  </div>
</template>

<script>
import toSafeInteger from 'lodash/toSafeInteger';
import PlayerBox from '../player-box';

export default {
  computed: {
    players() {
      return this.$store.state.players;
    },
  },

  created() {
    console.log('Players:', this.players);
  },

  components: {
    PlayerBox,
  },
};
</script>
