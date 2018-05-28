<template>
  <div class="player-box">
    <div class="player player-box__body">
      <div class="player__infos">
        <h1 class="player__name">
          {{ player.name }}
        </h1>
        <div class="player__colors">

        </div>
        <button class="player__actions">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16" viewBox="0 0 29 16">
            <g fill="none" transform="translate(-9 -16)">
              <circle cx="24" cy="24" r="24" />
              <path fill="#FFF" d="M23.875055,31.8479396 C23.4595282,31.8479396 23.0456622,31.6903051 22.7285813,31.3741302 L10.3572947,19.0028437 C9.72403901,18.368833 9.72403901,17.3431519 10.3572947,16.7108021 C10.9905505,16.0767914 12.0162315,16.0767914 12.6493363,16.7108021 L23.875055,27.935615 L35.1007738,16.7108021 C35.7340296,16.0767914 36.7597106,16.0767914 37.3928154,16.7108021 C38.0260711,17.3440579 38.0260711,18.368833 37.3928154,19.0028437 L25.0207738,31.3741302 C24.7045989,31.6903051 24.289827,31.8479396 23.875055,31.8479396 Z" />
            </g>
          </svg>
        </button>
      </div>
      <!-- player__infos -->
      <div class="counters player__counters">
        <div class="counter counter--poison counters__counter">
          <span class="counter__value">
            {{ player.counter.poison }}
          </span>
        </div>
        <!-- counters__poison -->
        <div class="counter counter--lifetotal counters__counter">
          <span class="counter__value">
            <button class="counter__button counter__button--up"
                    @click="incrementPlayerLife()"
            />
            <button class="counter__button counter__button--down"
                    @click="decrementPlayerLife()"
            />
            {{ player.lifetotal }}
          </span>
        </div>
        <!-- counters__lifecounter -->
        <div class="counter counter--commander-damage counters__counter">
          <span class="counter__value">
            &ndash;
          </span>
        </div>
      </div>
      <!-- player__counters -->
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
    playerIndex: Number,
  },

  computed: {
    ...mapState(['colors']),
  },

  methods: {
    incrementPlayerLife() {
      this.$store.commit('incrementPlayerLife', this.player);
    },

    decrementPlayerLife() {
      this.$store.commit('decrementPlayerLife', this.player);
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
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1.2em;
    background-image: linear-gradient(-45deg, #3A81B2 0%, #51A36D 100%);
    border-radius: 6px;
  }
}

.player {
  &__infos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 0 0 auto;
  }

  &__name {
    font-size: 4rem;
  }

  &__counters {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    flex: 1 1 auto;
  }
}

.counters {
  &__counter {
    display: flex;
    align-items: flex-end;
    flex: 1 1 33%;
    height: 100%;
  }
}

.counter {
  &__value {
    position: relative;
    display: block;
    flex: 1 1 auto;
    text-align: center;
  }

  &--lifetotal {
    .counter__value {
      font-size: 14rem;
    }
  }

  &__button {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 50%;

    &--up {
      top: 0;
    }

    &--down {
      bottom: 0;
    }
  }
}
</style>
