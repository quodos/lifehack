import toNumber from 'lodash/toNumber';
import toSafeInteger from 'lodash/toSafeInteger';

class Player {
  constructor(name = 'Name', startingLifeTotal = 20, colors = [], counter = {}) {
    this.name = name;
    this.commanderName = null;
    this.lifetotal = toSafeInteger(startingLifeTotal);
    this.counter = {
      poison: 0,
      ...counter
    };
    this.colors = colors;
    this.commanderDamages = [];
  }
}

export default Player;
