<template>
  <div id="container" class="container">
    <player-box v-for="(player, index) in players"
                :key="`player-${index}`"
                :player="player"
                :player-index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import toSafeInteger from 'lodash/toSafeInteger';
import PlayerBox from '../player-box';

export default {
  computed: {
    ...mapState(['players']),
  },

  created() {
    console.log('Players:', this.players);
  },

  components: {
    PlayerBox,
  },
};
</script>
