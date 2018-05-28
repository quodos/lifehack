<template>
  <div class="player-box">
    <div class="player-box__body">
      <h1>{{ player.name }}</h1>
      <div class="lifecounter player-box__lifecounter">
        <span class="lifecounter__life">
          {{ player.life }}
        </span>
        <button class="lifecounter__button lifecounter__button--up"
                @click.prevent="incrementPlayerLife()"
        />
        <button class="lifecounter__button lifecounter__button--down"
                @click.prevent="decrementPlayerLife()"
        />
      </div>
      <!-- lifecounter -->
    </div>
    <!-- player-box__body -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import toSafeInteger from 'lodash/toSafeInteger';

export default {
  props: {
    player: Object,
    playerIndex: String,
  },

  computed: {
    ...mapState(['colors']),
  },

  methods: {
    incrementPlayerLife() {
      this.$store.commit('incrementPlayerLife', { playerIndex: this.playerIndex });
    },

    decrementPlayerLife() {
      this.$store.commit('decrementPlayerLife', { playerIndex: this.playerIndex });
    },
  },
};
</script>

<style lang="scss">
.player-box {
  display: block;
  flex: 0 1 50%;
  width: 50%;
  height: 50%;
  padding: 0.4em;

  &__body {
    width: 100%;
    height: 100%;
    padding: 1.2em;
    background-image: linear-gradient(-45deg, #3A81B2 0%, #51A36D 100%);
    border-radius: 6px;
  }
}
</style>
