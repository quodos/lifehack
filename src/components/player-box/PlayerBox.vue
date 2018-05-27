<template>
  <div class="player-box">
    <div class="player-box__body">
      <h1>{{ player.name }}</h1>
      <div class="lifecounter player-box__lifecounter">
        <span class="lifecounter__life">
          {{ player.life }}
        </span>
        <button class="lifecounter__button lifecounter__button--up"
                @click.prevent="tickUpLife()"
        />
        <button class="lifecounter__button lifecounter__button--down"
                @click.prevent="tickDownLife()"
        />
      </div>
    </div>
    <!-- player-box__body -->
  </div>
</template>

<script>
import toSafeInteger from 'lodash/toSafeInteger';

export default {
  props: {
    playerIndex: String,
  },

  computed: {
    player() {
      return this.$store.state.players[this.playerIndex];
    },

    colors() {
      return this.$store.state.colors;
    },
  },

  methods: {
    tickUpLife() {
      let playerLife = toSafeInteger(this.player.life);
      playerLife++;
      this.player.life = playerLife.toString();
    },

    tickDownLife() {
      let playerLife = toSafeInteger(this.player.life);
      playerLife--;
      this.player.life = playerLife.toString();
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
